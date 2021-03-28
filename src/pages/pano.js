import React, { useEffect } from "react"
import SEO from "../components/seo"
import { createGlobalStyle } from "styled-components"
import Layout from "../components/layout"
import styled from "styled-components"
import TWEEN from "@tweenjs/tween.js"
// import { useCookies } from "react-cookie"

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: #000;
  }
`

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #000;
  transition: opacity 1s ease;
`

const LoadingBox = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  transition: all 1s ease-out;
`

const LoadingMessage = styled.div`
  color: #ffffff;
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-top: -75px;
  margin-bottom: 2rem;
  // text-transform: uppercase;
`

const ProgressBar = styled.div`
  position: relative;
  left: 40%;
  text-align: center;
  background: transparent;
  //border: 4px solid rgba(255, 255, 255, 1);
  width: 20%;
  height: 50px;
  margin-left: -5px;
`

const Bar = styled.div`
  background: rgba(255, 255, 255, 1);
  width: 0%;
  height: 30px;
  margin: 5px;
  transition: width 0.1s ease;
`

const PanoPage = () => {
  const irAcademia = () => {
    window.location.href = "/academia"
  }

  const irBiotecnologia = () => {
    window.location.href = "/biotecnologia"
  }

  const irArtistas = () => {
    window.location.href = "/artistas"
  }

  const irHistoria = () => {
    window.location.href = "/historia"
  }

  const irBiozen = () => {
    window.location.href = "https://marieflanagan.com/"
  }

  // const [cookies, setCookie] = useCookies()

  useEffect(() => {
    console.log("initial load")

    let viewer
    let zoomRequestId

    // Setup the animation loop.
    const animate = time => {
      requestAnimationFrame(animate)
      TWEEN.update(time)
    }
    zoomRequestId = requestAnimationFrame(animate)

    const zoom = (viewer, duration, easing) => {
      const camera = viewer.getCamera()
      // const zoomCamera = () => {
      //   zoomRequestId = requestAnimationFrame(zoomCamera)
      //   camera.fov -= 0.1
      //   camera.updateProjectionMatrix()
      // }
      // zoomCamera()
      const zoom = { value: camera.zoom }
      const zoomEnd = { value: camera.zoom + 2 }
      const tween = new TWEEN.Tween(zoom)
        .to(zoomEnd, duration)
        .easing(easing)
        .onUpdate(() => {
          camera.zoom = zoom.value
          camera.updateProjectionMatrix()
        })
      tween.start()
    }

    const run = async () => {
      console.log("run")

      const Panolens = await import("panolens")
      const Three = await import("three")

      const { GLTFLoader } = await import(
        "three/examples/jsm/loaders/GLTFLoader"
      )

      viewer = new Panolens.Viewer({
        output: "console",
        autoHideInfospot: false,
        cameraFov: 55,
      })

      viewer.OrbitControls.noZoom = true
      viewer.camera.position.set(Math.PI, -0.1, 0.05)

      const [cx, cy] = [5, 5]

      // Crea infospot para las subpáginas
      const createInfoSpot = (hoverText, position, onClick, image) => {
        const infospot = new Panolens.Infospot(600, image)
        const linkDuration = 500
        const linkEasing = TWEEN.Easing.Quadratic.InOut
        infospot.position.set(...position)
        infospot.addHoverText(hoverText, 130)
        infospot.element.style.fontSize = "2.5rem"
        infospot.addEventListener("click", () => {
          console.log("click")
          zoom(viewer, 2 * linkDuration, linkEasing)
          infospot.focus(1000, linkEasing)
          setTimeout(() => onClick(), linkDuration)
        })
        infospot.addEventListener("hover", function (event) {
          // console.log(event.mouseEvent)
          if (this.cursorEl) {
            this.cursorEl.style.top = `${event.mouseEvent.y + cy}px`
            this.cursorEl.style.left = `${event.mouseEvent.x + cx}px`
          }
        })
        // infospot.addEventListener("hoverenter", function (event) {
        //   if (!this.cursorEl) {
        //     this.cursorEl = document.createElement("img")
        //     this.container.appendChild(this.cursorEl)
        //     console.log("created")

        //     this.cursorEl.src = "/images/BIOSlogo.png"
        //     this.cursorEl.style.position = "absolute"
        //     this.cursorEl.style.top = `${event.mouseEvent.y + cy}px`
        //     this.cursorEl.style.left = `${event.mouseEvent.x + cx}px`
        //     this.cursorEl.style.zIndex = 1000
        //   }
        // })
        infospot.addEventListener("hoverleave", function (event) {
          if (this.cursorEl) {
            this.container.removeChild(this.cursorEl)
            this.cursorEl = null
            console.log("removed")
          }
        })
        //infospot.setCursorHoverStyle("none")

        return infospot
      }

      // PORTALES A LAS SUBPAGINAS

      const infospot = createInfoSpot(
        "Academia",
        [-801.62, -160.88, -4927.75],
        irAcademia,
        "images/vr/Icon_Academia.jpg"
      )

      const infospotB = createInfoSpot(
        "Biotecnología",
        [1793.37, 1620.32, 4368.52],
        irBiotecnologia,
        "images/vr/Icon_Biotecnologia.jpg"
      )

      const infospotC = createInfoSpot(
        "Exhibición",
        [4698.54, 550.8, -1597.67],
        irArtistas,
        "images/vr/Icon_Exhibicion.jpg"
      )

      const infospotD = createInfoSpot(
        "Acerca del Bioarte",
        [-4804.24, 301.82, 1217.13],
        irHistoria,
        "images/vr/Icon_Historia.jpg"
      )

      const infospotK = createInfoSpot(
        "Biozen",
        [-2651.67, 1420.32, 4368.5],
        irBiozen,
        "images/vr/Icon_Biozen.jpg"
      )

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

            //console.log("estoy sobre el swan")
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

        //panorama.add(objectScene)
      })

      //Imagen mostrada al obtener cookie de Academia

      // const infospotJ = new Panolens.Infospot()
      // infospotJ.position.set(971.48, -1472.22, 4348.18)
      // infospotJ.addHoverText("Academia (oculta)")

      const infospotJ = new Panolens.Infospot(600, "/images/Deer-Little.jpg?7")
      infospotJ.position.set(5000.0, -465.23, -3196.49)
      infospotJ.addHoverText("AcademiaCookie")

      // barra de progreso al cargar la vista 360

      const progressElement = document.getElementById("progress")
      const loadingContainerElement = document.getElementById(
        "loadingContainer"
      )

      function onEnter(event) {
        console.log("onEnter")
        progressElement.style.width = 0
        progressElement.style.opacity = 1
      }

      function onProgress(event) {
        console.log("onProgress")
        const progress = (event.progress.loaded / event.progress.total) * 100
        console.log("progress:", progress)
        if (progress === 100) {
          console.log("finished!")
          progressElement.style.width = "100%"
          setTimeout(() => {
            loadingContainerElement.style.opacity = 0
          }, 500)
          setTimeout(() => {
            loadingContainerElement.style.display = "none"
          }, 1500)
        } else {
          progressElement.style.width = progress + "%"
        }
      }

      const panorama = new Panolens.ImagePanorama(
        "/images/vr/24Marzo_Optimizada-01.jpg"
      )
      panorama.addEventListener("progress", onProgress)
      panorama.addEventListener("enter", onEnter)

      panorama.add(infospot)
      panorama.add(infospotB)
      panorama.add(infospotC)
      panorama.add(infospotD)
      panorama.add(infospotK)
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

    return function cleanup() {
      if (zoomRequestId) cancelAnimationFrame(zoomRequestId)
      // if (viewer) viewer.dispose();
    }
  }, [])

  return (
    <Layout>
      <GlobalStyle />
      <SEO title="BioArte" />
      {/* <Progress id="progress"> </Progress> */}
      <LoadingContainer id="loadingContainer">
        <LoadingBox id="loadingBox">
          <LoadingMessage id="message">
            Estamos preparando tu experiencia...
          </LoadingMessage>
          <ProgressBar id="progressbar">
            <Bar id="progress"></Bar>
          </ProgressBar>
        </LoadingBox>
      </LoadingContainer>
    </Layout>
  )
}

export default PanoPage
