import { func } from "prop-types"
import React, { useState, useEffect } from "react"
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import * as uniData from "../data/organizaciones.json"
import pin from "../images/pin.png"
import styled from "styled-components"

let REACT_APP_MAPBOX_TOKEN =
  "pk.eyJ1IjoiY2F0YWhhY2hlIiwiYSI6ImNrZ3BsNnoxYTA3dHYyenIzOXBjNnE2M20ifQ.8jOX6CUIDqlnBoMjkxtH1A"

const MarkerBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: -34.5829196,
    longitude: -58.4294226,
    width: "650px",
    height: "400px",
    zoom: 10,
  })
  const [selectedUni, setSelectedUni] = useState(null)

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
    <div>
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
            key={university.properties.institucion_id}
            latitude={university.geometry.coordinates[0]}
            longitude={university.geometry.coordinates[1]}
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
            latitude={selectedUni.geometry.coordinates[0]}
            longitude={selectedUni.geometry.coordinates[1]}
            onClose={() => {
              setSelectedUni(null)
            }}
          >
            <div>
              <h2>{selectedUni.properties.nombre}</h2>
              <p>{selectedUni.properties.dpt_descripcion}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  )
}
