import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Chat from "../components/chat"
import logoFestival from "../images/Academia/logo libélula.png"
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
const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: 3rem;
  align-self: center;
`
const Placeholder1 = styled.img`
  height: 3rem;
  width: 3rem;
  align-self: center;
`
const TimerNavegacionContainer = styled.div``

const TimerNavegacion = styled.div`
  max-width: 150px;
  width: 100%;

  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #fff;

  display: flex;
`

const TiempoContainer = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`

const Horas = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`
const Min = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`

const Seg = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`

const CantidadVisitantesContainer = styled.div`
  max-width: 150px;
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #fff;
  margin-left: 10em;
`

const TextoContadores = styled.div`
  font-weight: lighter;
  font-size: 1em;
`

const CantidadVisitantes = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
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

const NombreObra = styled.div`
  font-size: 2em;
  text-align: center;
  color: #fff;
  background-color: RGBA(0, 0, 0, 0.5);
  width: 600px;
  height: auto;
  margin: 15em auto 0 auto;
  padding: 1em;
  border-radius: 15px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`
const Parrafo = styled.div`
  padding-top: 1em;
  font-size: 16pt;
`
const ParrafoFormacion = styled.div`
  padding-top: 1em;
  font-size: 16pt;
  font-style: italic;
  text-decoration: underline;
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

const CVCont = styled.div`
  margin-left: 10rem;
  align-self: flex-end;
  margin: 0rem 0rem 3rem 0rem;
  &:hover {
    cursor: pointer;
  }
`

const CV = styled.div`
  width: 49px;
  height: 49px;
  background-color: #508f44;
  border-radius: 50px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #bed6a3;
  }
`

const CVText = styled.div`
  color: #fff;
  font-size: 1.5em;
  padding-top: 0.25em;
`

const TituloBio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 200;
`

// ponemos una cookie para saber si le usuarix pasó por acá

const ArtistPageTemplate = ({ pageContext }) => {
  const { nombre, descripcion, secciones } = pageContext

  const [seccion, setSeccion] = useState(0)

  const onPreviousClick = () => {
    setSeccion(seccion => seccion > 0 ? seccion - 1 : seccion);
  }

  const onNextClick = () => {
    setSeccion(seccion => seccion < secciones.length - 1 ? seccion + 1 : seccion)
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
          <Texto>Bioarte</Texto>
          <LikeLikeCont>
            <Like src={like} />
          </LikeLikeCont>
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

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         nombre
//         formacion
//         bio
//       }
//     }
//   }
// `

export default ArtistPageTemplate
