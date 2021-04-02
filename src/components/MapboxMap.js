import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, Popup, FlyToInterpolator } from "react-map-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import * as uniData from "../data/universidades.json"
import pin from "../images/pin.png"
import styled from "styled-components"
import process from "process"

const MAPBOX_TOKEN = process.env.GATSBY_MAPBOX_TOKEN

const MapContainer = styled.div`
  position: relative;
`

const PinImage = styled(({ className, ...props }) => <img className={className} src={pin} alt="pin" {...props} />)`
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
const SearchFooter = styled.div`
  height: 30px;
  width: 400px;
  background-color: ${props => props.theme.colors.greens[1]};
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
  <input
    className={className}
    value={value}
    onChange={onChange}
    placeholder="Busca universidades biotecnología"
    type="text"
  />
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
  ::placeholder {
    color: gray;
    font-size: 1rem;
  }
`

const SearchControlResults = styled(
  ({ className, children = [], onItemSelect }) => (
    <ul className={className}>
      {children.map((item, i) => (
        <li key={i}>
          <div
            onClick={() => onItemSelect(item)}
            onKeyPress={() => onItemSelect(item)}
            role="button"
            tabIndex={i}
          >
            <strong>{item.properties["Institución"]}</strong> -{" "}
            {item.properties["Facultad"]}
          </div>
        </li>
      ))}
    </ul>
  )
)`
  background-color: #fff;
  height: 300px;
  width: 272px;
  font-size: 12px;
  overflow: auto;
  overflow-y: overlay;
  padding: 0.5em;
  margin-left: 4.9em;
  box-shadow: inset -3px -8px 4px 4px rgb(255, 255, 255),
    inset 0 2px 4px 0px rgba(50, 50, 50, 0.75);

  & li div {
    cursor: pointer;
  }

  & li div strong {
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
          <ControlGroup top center>
            <SearchControl
              features={uniData.features}
              onSelect={onSearchItemSelect}
            />
          </ControlGroup>
          <SearchFooter></SearchFooter>
        </SearchContainer>
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          onViewportChange={viewport => {
            setViewport(viewport)
          }}
        >
          {uniData.features.map(university => (
            <Marker
              key={university.properties.id}
              longitude={university.geometry.coordinates[0]}
              latitude={university.geometry.coordinates[1]}
              offsetTop={-16}
              offsetLeft={-8}
            >
              <PinImage onClick={() => setSelectedUni(university)} />
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
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={selectedUni.properties["Web Site"]}
                >
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
