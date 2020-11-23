import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl"
import * as uniData from "../data/universidades.json"
import pin from "../images/pin.png"
import styled from "styled-components"

let REACT_APP_MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2F0YWhhY2hlIiwiYSI6ImNrZ3BsNnoxYTA3dHYyenIzOXBjNnE2M20ifQ.8jOX6CUIDqlnBoMjkxtH1A"

const MapContainer = styled.div`
  position: relative;
`

const MarkerBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

const controlMargin = "0.5em"

const ControlGroup = styled.div`
  position: absolute;
  z-index: 1000;
  top: ${props => (props.top ? controlMargin : null)};
  left: ${props => (props.left ? controlMargin : null)};
  bottom: ${props => (props.bottom ? controlMargin : null)};
  right: ${props => (props.right ? controlMargin : null)};
`
const SearchContainer = styled.div`
  height: 400px;
  width: 400px;
  background-color: ${props => props.theme.colors.greens[0]};
`
const SearchFooter = styled.div`
  height: 30px;
  width: 400px;
  background-color: ${props => props.theme.colors.greens[1]};
  margin-top: 370px;
`
const SearchMapContainer = styled.div`
  height: 400px;
  width: 1000px;
  display: flex;
  align-items: center;
`

const SearchControl = ({ features = [], onSelect }) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])

  const searchFor = query => {
    return features.filter(feat =>
      ["Institución", "Facultad"].some(key => {
        const property = feat.properties[key]
        return (
          property && property.toLowerCase().indexOf(query.toLowerCase()) >= 0
        )
      })
    )
  }

  const onInputChange = e => {
    const query = e.target.value
    setQuery(query)
    if (query !== "") {
      const results = searchFor(query)
      setResults(results)
    } else {
      setResults([])
    }
  }

  const onItemSelect = item => {
    console.log("select item:", item)
    setQuery("")
    setResults([])
    onSelect(item.geometry.coordinates, item)
  }

  return (
    <>
      <SearchControlInput onChange={onInputChange} value={query} />
      {results.length > 0 && (
        <SearchControlResults onItemSelect={onItemSelect}>
          {results}
        </SearchControlResults>
      )}
    </>
  )
}

const SearchControlInput = styled(({ className, onChange, value }) => (
  <input className={className} value={value} onChange={onChange} type="text" />
))`
  border-radius: 1rem;
  border: solid 1px #888;
  font-size: 1em;
  padding: 0.5em 0.5em;
  margin-left: 2.8em;
  margin-top: 1rem;
  width: 300px;

  &:focus {
    outline: none;
  }
`

const SearchControlResults = styled(
  ({ className, children = [], onItemSelect }) => {
    return (
      <ul className={className}>
        {children.map((item, i) => (
          <li key={i} onClick={() => onItemSelect(item)}>
            <strong>{item.properties["Institución"]}</strong> -{" "}
            {item.properties["Facultad"]}
          </li>
        ))}
      </ul>
    )
  }
)`
  background-color: #fff;
  height: 300px;
  font-size: 12px;
  overflow: scroll;
  padding: 0.5em;
  margin-left: 2.8rem;
  width: 300px;
  border: solid 1px #888;

  & li {
    cursor: pointer;
  }

  & li strong {
    font-weight: bold;
  }

  & li:hover {
    background-color: ${props => props.theme.colors.greens[1]};
  }
`

export default function MapboxMap() {
  const [viewport, setViewport] = useState({
    latitude: -34.5829196,
    longitude: -58.4294226,
    width: "600px",
    height: "400px",
    zoom: 10,
  })
  const [selectedUni, setSelectedUni] = useState(null)

  const onSearchItemSelect = ([longitude, latitude], item) => {
    setViewport({
      longitude,
      latitude,
      zoom: 14,
      transitionInterpolator: new FlyToInterpolator({ speed: 1.2 }),
      transitionDuration: "auto",
    })
    setSelectedUni(item)
  }

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedUni(null)
      }
    }
    window.addEventListener("keydown", listener)

    return () => {
      window.removeEventListener("keydown", listener)
    }
  }, [])

  return (
    <MapContainer>
      <SearchMapContainer>
        <SearchContainer>
          <ControlGroup top left>
            <SearchControl
              features={uniData.features}
              onSelect={onSearchItemSelect}
            />
          </ControlGroup>
          <SearchFooter></SearchFooter>
        </SearchContainer>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={REACT_APP_MAPBOX_TOKEN}
          mapStyle="mapbox://styles/catahache/ckgpmul5a1c7419p426g1ara8"
          onViewportChange={viewport => {
            setViewport(viewport)
          }}
        >
          {uniData.features.map(university => (
            <Marker
              key={university.properties.id}
              longitude={university.geometry.coordinates[0]}
              latitude={university.geometry.coordinates[1]}
            >
              <MarkerBtn
                onClick={e => {
                  e.preventDefault()
                  setSelectedUni(university)
                }}
              >
                <img src={pin} alt="pin" />
              </MarkerBtn>
            </Marker>
          ))}

          {selectedUni ? (
            <Popup
              longitude={selectedUni.geometry.coordinates[0]}
              latitude={selectedUni.geometry.coordinates[1]}
              closeOnClick={false}
              onClose={() => {
                setSelectedUni(null)
              }}
            >
              <div>
                <a target="_blank" href={selectedUni.properties["Web Site"]}>
                  <h2>{selectedUni.properties["Facultad"]}</h2>
                </a>
                <h3>{selectedUni.properties["Institución"]}</h3>
              </div>
            </Popup>
          ) : null}
        </ReactMapGL>
      </SearchMapContainer>
    </MapContainer>
  )
}
