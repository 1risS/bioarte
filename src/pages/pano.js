import React, { useEffect } from "react"
import SEO from "../components/seo"
import { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
import { useCookies } from "react-cookie"

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

  const [cookies, setCookie] = useCookies()

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

      // PORTALES A LAS SUBPAGINAS

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

      // OBJETOS E IMAGENES

      // Imagen oculta que se revela al hacer hover
      const infospotE = new Panolens.Infospot(600, "/images/Deer-Little.jpg?2")
      infospotE.position.set(-4533.7, -670.58, 1846.35)
      infospotE.addEventListener("hoverenter", function (event) {
        this.material.opacity = 1
      })
      infospotE.addEventListener("hoverleave", function (event) {
        this.material.opacity = 0.01
      })
      // // hidden always
      infospotE._show = infospotE.show
      infospotE.show = () => {}

      // Imagen mostrada cuando se hace hover sobre otra (infospotG)
      const infospotH = new Panolens.Infospot(600, "/images/Deer-Little.jpg?5")
      infospotH.position.set(-4533.7, 2000, 1846.35)
      infospotH._show = infospotH.show
      infospotH.show = () => {}

      // Imagen que muestra otra (infospotH) al hacer hover y es mostrada al hacer hover en otra (infospotF)
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

      //Imagen que muestra otra (infospotG) al hacerle hover
      const infospotF = new Panolens.Infospot(600, "/images/Deer-Little.jpg?3")
      infospotF.position.set(-4533.7, 226.19, 1846.35)
      infospotF.addEventListener("hoverenter", function (event) {
        infospotG._show()
      })
      infospotF.addEventListener("hoverleave", function (event) {})

      // Objeto 3D cisne mostrado al hacer click sobre una imagen (infospotI)
      let swan

      const infospotI = new Panolens.Infospot(600, "/images/Deer-Little.jpg?6")
      infospotI.position.set(-4533, -1500, 1846.35)
      infospotI.addEventListener("click", function (event) {
        console.log("click")
        swan.children[0].material.opacity = 1
        swan.children[0].material.transparent = false
      })
      infospotI.addEventListener("hoverleave", function (event) {})

      const loader = new GLTFLoader()
      let objectScene

      loader.load("/images/Swan.gltf", gltf => {
        const objectScene = gltf.scene
        swan = objectScene

        objectScene.scale.multiplyScalar(100)
        // position: x (+: left; -: right), y (+:up, -:down), z (+:far, -:close)
        objectScene.position.set(80, 0, 200)
        objectScene.rotation.set(0, 2.7, 0)
        window.swan = swan

        objectScene.children[0].material.transparent = true
        objectScene.children[0].material.opacity = 0.01

        panorama.add(objectScene)
      })

      // objeto 3D fuego con rotación según hover
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

      //Imagen mostrada al obtener cookie de Academia

      // const infospotJ = new Panolens.Infospot()
      // infospotJ.position.set(971.48, -1472.22, 4348.18)
      // infospotJ.addHoverText("Academia (oculta)")

      const infospotJ = new Panolens.Infospot(600, "/images/Deer-Little.jpg?7")
      infospotJ.position.set(5000.0, -465.23, -3196.49)
      infospotJ.addHoverText("AcademiaCookie")

      const panorama = new Panolens.ImagePanorama(
        "/static/images/360/Version_00.png"
      )

      panorama.add(infospot)
      panorama.add(infospotB)
      panorama.add(infospotC)
      panorama.add(infospotD)
      // panorama.add(infospotE)
      // panorama.add(infospotF)
      // panorama.add(infospotG)
      // panorama.add(infospotH)
      // panorama.add(infospotI)
      // if (cookies.AcademiaVisited) {
      //   panorama.add(infospotJ)
      // }

      panorama.add(new Three.PointLight(0xffffff, 0.9))

      viewer.add(panorama)
    }

    run()
  }, [])

  return (
    <Layout>
      <GlobalStyle />
      <SEO title="BioArte" />
    </Layout>
  )
}

export default PanoPage
