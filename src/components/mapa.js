import React, { Component } from "react"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import styled from "styled-components"

const L = require("leaflet")

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
})

const MapCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export default class Mapa extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 13,
  }

  render() {
    const position = [this.state.lat, this.state.lng]

    return (
      // <MapCont>
      <Map center={position} zoom={this.state.zoom} style={{ height: 400 }}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Universidad de Londres. <br />{" "}
            <a href="https://london.ac.uk/" target="blank">
              Ir a la web
            </a>
            .
          </Popup>
        </Marker>
      </Map>
      // </MapCont>
    )
  }
}
