import React, { useEffect } from "react"
import SEO from "../components/seo"
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
    import("panolens").then(Panolens => {
      const infospot = new Panolens.Infospot()
      infospot.position.set(5000.0, -665.23, -3996.49)
      infospot.addHoverText("Academia")
      infospot.addEventListener("click", irAcademia)

      const infospotB = new Panolens.Infospot()
      infospotB.position.set(1466.45, -665.23, 4668.5)
      infospotB.addHoverText("Biotecnología")
      infospotB.addEventListener("click", irBiotecnologia)

      const infospotC = new Panolens.Infospot()
      infospotC.position.set(-3584.58, -665.23, 3441.91)
      infospotC.addHoverText("Exhibición")
      infospotC.addEventListener("click", irExhibicion)

      const infospotD = new Panolens.Infospot(
        600,
        "https://images-na.ssl-images-amazon.com/images/I/61mtx+420hL._AC_US436_QL65_.jpg"
      )
      infospotD.position.set(-4973.56, -35.64, -477.86)
      infospotD.addHoverText("Historia", 0)
      infospotD.addEventListener("click", irHistoria)
      // infospotD.addEventListener("click", function () {})
      infospotD.addEventListener("hoverenter", function (event) {
        this.material.opacity = 0.6
        this.material.color.set(0x00ff00 * Math.random())
        this.scale.x *= 2
        this.scale.y *= 2
      })
      infospotD.addEventListener("hoverleave", function (event) {
        this.material.opacity = 1
        this.material.color.set(0xffffff)
        this.scale.x /= 2
        this.scale.y /= 2
      })

      const infospotE = new Panolens.Infospot(
        600,
        "https://images-na.ssl-images-amazon.com/images/I/61mtx+420hL._AC_US436_QL65_.jpg?1"
      )
      infospotE.position.set(-4533.7, -970.58, 1846.35)
      infospotE.addEventListener("hoverenter", function (event) {
        this.material.opacity = 1
        this.material.color.set(0x00ff00 * Math.random())
        this.scale.x *= 2
        this.scale.y *= 2
      })
      infospotE.addEventListener("hoverleave", function (event) {
        this.material.opacity = 1
        this.material.color.set(0xffffff)
        this.scale.x /= 2
        this.scale.y /= 2
      })

      const panorama = new Panolens.ImagePanorama("/images/hall_of_finfish.jpg")

      panorama.add(infospot)
      panorama.add(infospotB)
      panorama.add(infospotC)
      panorama.add(infospotD)
      panorama.add(infospotE)

      const viewer = new Panolens.Viewer({ output: "console" })
      viewer.add(panorama)
    })
  }, [])

  return (
    <div>
      <GlobalStyle />
      <SEO title="BioArte" />
    </div>
  )
}

export default PanoPage
