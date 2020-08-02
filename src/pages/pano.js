import React, { useEffect } from "react"
import SEO from "../components/seo"
import { ImagePanorama, Viewer } from "panolens"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
  }
`

const PanoPage = () => {
  useEffect(() => {
    const panorama = new ImagePanorama("images/hall_of_finfish.jpg")
    const viewer = new Viewer()
    viewer.add(panorama)
  })

  return (
    <div>
      <GlobalStyle />
      <SEO title="BioArte" />
    </div>
  )
}

export default PanoPage
