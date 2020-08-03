import React, { useEffect } from "react"
import SEO from "../components/seo"
import { ImagePanorama, Viewer, Infospot } from "panolens"

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
  const irAcademia = () => {
    window.location.href = "/academia"
  }

  const irBiotecnologia = () => {
    window.location.href = "/biotecnologia"
  }

  const irExhibicion = () => {
    window.location.href = "/exhibicion"
  }

  const irHistoria = () => {
    window.location.href = "/historia"
  }

  useEffect(() => {
    const infospot = new Infospot()
    infospot.position.set(5000.0, -665.23, -3996.49)
    infospot.addHoverText("Academia")
    infospot.addEventListener("click", irAcademia)

    const infospotB = new Infospot()
    infospotB.position.set(1466.45, -665.23, 4668.5)
    infospotB.addHoverText("Biotecnología")
    infospotB.addEventListener("click", irBiotecnologia)

    const infospotC = new Infospot()
    infospotC.position.set(-3584.58, -665.23, 3441.91)
    infospotC.addHoverText("Exhibición")
    infospotC.addEventListener("click", irExhibicion)

    const infospotD = new Infospot(
      600,
      "https://images-na.ssl-images-amazon.com/images/I/61mtx+420hL._AC_US436_QL65_.jpg"
    )
    infospotD.position.set(-4973.56, -35.64, -477.86)
    infospotD.addHoverText("Historia", 0)
    infospotD.addEventListener("click", irHistoria)

    const panorama = new ImagePanorama("images/hall_of_finfish.jpg")

    panorama.add(infospot)
    panorama.add(infospotB)
    panorama.add(infospotC)
    panorama.add(infospotD)
    const viewer = new Viewer({ output: "console" })
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
