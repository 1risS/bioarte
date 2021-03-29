import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Chat from "../components/chat"
import fondoHeader from "../../static/images/carousel/Banner_Exhibition_0.png"
import libelula from "../../static/images/LibelulaUltima_00.png"
import Carousel, { ParrafoObra } from "../components/carousel"
import FunFactsBalloon from "../components/FunFactsBalloon"
import HomeBoton from "../components/homeBoton"
import Footer from "../components/footer"
import Atras from "../components/irAtras"

const DAContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
`

const DAHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 1rem;
  background-image: url(${fondoHeader});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 7rem;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 3rem;
  margin-bottom: -2rem;
  width: 100%;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 10rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-bottom: -0.2em;
  max-height: 750px;
  padding-top: 25vh;
  /*line-height: initial;*/
`

const DAMain = styled.div`
  display: flex;
  flex-direction: column;
`

const BioArtistaContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`

const LibelulaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 20% !important;
  margin: 4rem;
`

const Libelulaimg = styled.img`
  height: 270px;
  width: 230px;
`

const BioArtista = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  width: 100%;
  align-self: center;
  margin: 0 20% 0 0;
`

const BioHeader = styled.div`
  background-color: #ec6b42;
  color: #fff;
  font-size: 40pt;
  padding-left: 1em;
`

const BioTexto = styled.div`
  background-color: #fff;
  margin-top: 1em;
  padding: 32.25pt 24pt 32.25pt 24pt;
`

const FotoObraContainer = styled.div`
  background-image: url("${props => props.foto}");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 1em 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Parrafo = styled.div`
  padding-top: 1em;
  font-size: 16pt;
`

const Titulo = styled.div`
  margin-top: 13px;
  font-weight: semibold;
  font-size: 25pt;
`

const TituloBio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const AtrasCont = styled.div`
  display: flex;
  height: 20%;
  align-items: flex-start;
`

const BiotecnologiaPageTemplate = ({ pageContext }) => {
  const { nombre, descripcion, foto, secciones } = pageContext

  const [seccion, setSeccion] = useState(0)

  const onPreviousClick = () => {
    setSeccion(seccion => (seccion > 0 ? seccion - 1 : seccion))
  }

  const onNextClick = () => {
    setSeccion(seccion =>
      seccion < secciones.length - 1 ? seccion + 1 : seccion
    )
  }

  const datosSeccion = secciones[seccion]

  return (
    <Layout>
      <SEO title={nombre} />
      <DAContainer>
        <DAHeaderContainer>
          <NavBar>
            <LogoContainer>
              <HomeBoton />
            </LogoContainer>
          </NavBar>
          <Texto>Biotecnología</Texto>
        </DAHeaderContainer>
        <DAMain>
          <BioArtistaContainer>
            <LibelulaContainer>
              <AtrasCont>
                <Atras title="Volver a Biotecnología" href="/biotecnologia/" />
              </AtrasCont>
              <FunFactsBalloon />
              <Libelulaimg src={libelula}></Libelulaimg>
            </LibelulaContainer>
            <BioArtista>
              <BioHeader id="header">{nombre}</BioHeader>
              <BioTexto>
                <TituloBio>
                  <Titulo>Descripción</Titulo>
                </TituloBio>
                {descripcion.split("\n\n").map((paragraph, i) => (
                  <Parrafo key={i}>{paragraph}</Parrafo>
                ))}
              </BioTexto>
            </BioArtista>
          </BioArtistaContainer>
          <FotoObraContainer foto={foto} />
          {datosSeccion && (
            <Carousel
              ciudadPais={datosSeccion.ciudadPais}
              fotoObra={datosSeccion.foto}
              tituloObra={datosSeccion.titulo}
              obraURL={datosSeccion.url}
              onPreviousClick={onPreviousClick}
              onNextClick={onNextClick}
              count={secciones.length}
              value={seccion}
            >
              {datosSeccion.descripcion.split("\n\n").map((parrafo, i) => (
                <ParrafoObra key={i}>{parrafo}</ParrafoObra>
              ))}
            </Carousel>
          )}
        </DAMain>
      </DAContainer>
      <Footer></Footer>
      <Chat />
    </Layout>
  )
}

export default BiotecnologiaPageTemplate
