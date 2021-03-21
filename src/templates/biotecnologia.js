import React, { useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Chat from "../components/chat"
import fondoHeader from "../../static/images/carousel/Banner_Exhibition_0.png"
import libelula from "../../static/images/carousel/Dragonfly.png"
import fondoObra from "../../static/images/artists/anaLauraCantera/obra_nueva.jpg"
import like from "../../static/images/exhibicion/likelikeRounded.png"
import Carousel, { ParrafoObra } from "../components/carousel"
import FunFactsBalloon from "../components/FunFactsBalloon"
import HomeBoton from "../components/homeBoton"
import Footer from "../components/footer"

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
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 14rem;
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
  width: 16.5% !important;
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
  background-image: url(${fondoObra});
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 1em 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
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

const LikeLikeCont = styled.div`
  margin-left: 10rem;
  align-self: flex-end;
  margin: -2rem 4rem 3rem 0rem;
  &:hover {
    opacity: 0.8;
  }
`

const Like = styled.img``

const TituloBio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const BiotecnologiaPageTemplate = ({ pageContext }) => {
  const { nombre, descripcion, secciones } = pageContext

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
      <SEO title="Biotecnología" />
      <DAContainer>
        <DAHeaderContainer>
          <NavBar>
            <LogoContainer>
              <HomeBoton></HomeBoton>
            </LogoContainer>
          </NavBar>
          <Texto>Biotecnología</Texto>
        </DAHeaderContainer>
        <DAMain>
          <BioArtistaContainer>
            <LibelulaContainer>
              <FunFactsBalloon />
              <Libelulaimg src={libelula}></Libelulaimg>
            </LibelulaContainer>
            <BioArtista>
              <BioHeader id="header">{nombre}</BioHeader>
              <BioTexto>
                <TituloBio>
                  <Titulo>Descripción</Titulo>
                </TituloBio>
                {descripcion.split("\n\n").map(paragraph => (
                  <Parrafo>{paragraph}</Parrafo>
                ))}
              </BioTexto>
            </BioArtista>
          </BioArtistaContainer>
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
            {datosSeccion.descripcion.split("\n\n").map(parrafo => (
              <ParrafoObra>{parrafo}</ParrafoObra>
            ))}
          </Carousel>
        </DAMain>
      </DAContainer>
      <Footer></Footer>
      <Chat />
    </Layout>
  )
}

export default BiotecnologiaPageTemplate
