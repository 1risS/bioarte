import React, { useEffect } from "react"
import SEO from "../components/seo"
import { createGlobalStyle } from "styled-components"
import { object } from "prop-types"

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
    const run = async () => {
      const Panolens = await import("panolens")
      const Three = await import("three")
      const { GLTFLoader } = await import(
        "three/examples/jsm/loaders/GLTFLoader"
      )

      const viewer = new Panolens.Viewer({
        output: "console",
        autoHideInfospot: false,
      })

      // const rotationRadius = 400
      // const audioSphere = new Three.Mesh(
      //   new Three.SphereGeometry(50, 16, 16),
      //   new Three.MeshStandardMaterial({
      //     shading: Three.FlatShading,
      //   })
      // )

      const infospot = new Panolens.Infospot()
      infospot.position.set(5000.0, -665.23, -3996.49)
      infospot.addHoverText("Academia")
      infospot.addEventListener("click", irAcademia)

      const infospotB = new Panolens.Infospot()
      infospotB.position.set(2500, -665.23, -3996.49)
      infospotB.addHoverText("Biotecnología")
      infospotB.addEventListener("click", irBiotecnologia)

      const infospotC = new Panolens.Infospot()
      infospotC.position.set(-2500, -665.23, -3996.49)
      infospotC.addHoverText("Exhibición")
      infospotC.addEventListener("click", irExhibicion)

      const infospotD = new Panolens.Infospot()
      infospotD.position.set(-5000, -665.23, -3996.49)
      infospotD.addHoverText("Historia")
      infospotD.addEventListener("click", irHistoria)
      // infospotD.addEventListener("click", function () {})

      const infospotE = new Panolens.Infospot(600, "/images/Deer-Little.jpg?2")
      infospotE.position.set(-4533.7, -970.58, 1846.35)
      infospotE.addEventListener("hoverenter", function (event) {
        this.material.opacity = 1
      })
      infospotE.addEventListener("hoverleave", function (event) {
        this.material.opacity = 0.01
      })
      // hidden always
      infospotE._show = infospotE.show
      infospotE.show = () => {}

      const infospotH = new Panolens.Infospot(600, "/images/Deer-Little.jpg?5")
      infospotH.position.set(-4533.7, 2000, 1846.35)
      infospotH._show = infospotH.show
      infospotH.show = () => {}

      const infospotG = new Panolens.Infospot(600, "/images/Deer-Little.jpg?4")
      infospotG.position.set(-4533.7, 1148.77, 1846.35)
      infospotG._show = infospotG.show
      infospotG.show = () => {}
      infospotG.addEventListener("hoverenter", function (event) {
        infospotH._show()
      })
      infospotG.addEventListener("hoverleave", function (event) {
        infospotH.hide()
      })

      const infospotF = new Panolens.Infospot(600, "/images/Deer-Little.jpg?3")
      infospotF.position.set(-4533.7, 226.19, 1846.35)
      infospotF.addEventListener("hoverenter", function (event) {
        infospotG._show()
      })
      infospotF.addEventListener("hoverleave", function (event) {})

      const infospotI = new Panolens.Infospot(600, "/images/Deer-Little.jpg?6")
      infospotI.position.set(-4533, 1583.49, 1846.35)
      infospotI.addEventListener("hoverenter", function (event) {
        swan._show()
      })
      infospotI.addEventListener("hoverleave", function (event) {})

      const loader = new GLTFLoader()
      let objectScene

      let swan
      loader.load("/images/Swan.gltf", gltf => {
        const objectScene = gltf.scene
        swan = objectScene

        objectScene.scale.multiplyScalar(100)
        // position: x (+: left; -: right), y (+:up, -:down), z (+:far, -:close)
        objectScene.position.set(80, 0, 200)
        objectScene.rotation.set(0, 2.7, 0)
        window.swan = swan

        panorama.add(objectScene)
      })

      loader.load("/images/fuego.gltf", gltf => {
        const objectScene = gltf.scene

        objectScene.scale.multiplyScalar(100)
        // position: x (+: left; -: right), y (+:up, -:down), z (+:far, -:close)
        objectScene.position.set(-20, 0, 600)
        objectScene.rotation.set(Math.PI / 2, 2, -2)

        // rotacion
        const raycaster = new Three.Raycaster()
        const mouse = new Three.Vector2()
        let lastMPos = {}
        const originalRotation = {
          x: objectScene.rotation.x,
          y: objectScene.rotation.y,
          z: objectScene.rotation.z,
        }
        let resetTimer

        document.addEventListener(`mousemove`, function (event) {
          if (!objectScene) return

          mouse.x = (event.clientX / window.innerWidth) * 2 - 1
          mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

          raycaster.setFromCamera(mouse, viewer.camera)
          const intersects = raycaster.intersectObject(objectScene, true)

          if (intersects.length > 0) {
            if (resetTimer) clearTimeout(resetTimer)

            console.log("estoy sobre el swan")
            //you can only calculate the distance if therer already was a mouse event

            if (typeof lastMPos.x != "undefined") {
              //calculate how far the mouse has moved
              var deltaX = lastMPos.x - event.clientX
              var deltaY = lastMPos.y - event.clientY

              //rotate your object accordingly
              objectScene.rotation.z += deltaX * 0.05
              objectScene.rotation.y += deltaY * 0.05
            }

            //save current mouse Position for next time
            lastMPos = {
              x: event.clientX,
              y: event.clientY,
            }
          } else {
            resetTimer = setTimeout(() => {
              objectScene.rotation.x = originalRotation.x
              objectScene.rotation.y = originalRotation.y
              objectScene.rotation.z = originalRotation.z
            }, 1500)
          }
        })

        panorama.add(objectScene)
      })

      const panorama = new Panolens.ImagePanorama("/images/hall_of_finfish.jpg")

      panorama.add(infospot)
      panorama.add(infospotB)
      panorama.add(infospotC)
      panorama.add(infospotD)
      panorama.add(infospotE)
      panorama.add(infospotF)
      panorama.add(infospotG)
      panorama.add(infospotH)

      panorama.add(new Three.PointLight(0xffffff, 0.9))

      viewer.add(panorama)

      // viewer.addUpdateCallback(function () {
      //   audioSphere.position.set(
      //     rotationRadius * Math.cos(Date.now() * 0.0005),
      //     0,
      //     rotationRadius * Math.sin(Date.now() * 0.0005)
      //   )
      // })
    }

    run()
  }, [])

  return (
    <div>
      <GlobalStyle />
      <SEO title="BioArte" />
    </div>
  )
}

export default PanoPage
