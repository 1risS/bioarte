import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/welcome/WelcomePage_V02.png"
// import TagManager from "react-gtm-module"

const BienvenidaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-image: url(${logo});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`
const LinkWrapper = styled.div``

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 900;
`

const ContenidoIzqContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const ContDerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const DivDer = styled.div`
  margin: 0rem 1rem 4rem 23rem;
  opacity: 0.1;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
`

const DivDerEmpty = styled.div`
  height: 33%;
`

const DivIzq = styled.div`
  margin: 1rem 25rem 3rem 1rem;
  opacity: 0.1;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
`

const DivIzqEmpty = styled.div`
  height: 25%;
`

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-weight: bold;
`

const Desc = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
`

// const tagManagerArgs = {
//   gtmId: "GTM-5W8X7HR",
// }

// TagManager.initialize(tagManagerArgs)

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="BioArte" />
      <BienvenidaContainer id="bienvenidaContainer">
        <ContenidoIzqContainer>
          <DivIzqEmpty></DivIzqEmpty>
          <DivIzq>
            <Title>PRESENTACIÓN</Title>
            <Desc>
              PROYECTO BIOS cruza arte, ciencia y tecnología. Bios es el
              concepto elegido en la antigua grecia para designar la vida física
              y en la polis. El término muta, se re-configura y evoluciona,
              crece se cuela en los intersticios de la filosofía, la ciencia, la
              tecnologia, la política, el arte, indaga, se cuestiona, construye
              y dialoga.
            </Desc>
          </DivIzq>
          <DivIzq>
            <Title>ORGANIZACIÓN</Title>
            <Desc>
              Proyecto Bios contiene cinco áreas:<br></br>
              Exhibición de Bioarte - panorama nacional y obras inéditas
              <br></br>
              Academia – mapa universidades de biotecnología. Agenda de
              actividades<br></br>
              Biotecnología - introducción al campo de investigación y
              desarrollo local. Agenda de actividades<br></br>
              Acerca del BioArte: Timeline. Diferentes aproximaciones al bioarte
            </Desc>
          </DivIzq>
        </ContenidoIzqContainer>
        <ContDerContainer>
          <DivDerEmpty></DivDerEmpty>
          <DivDer>
            <Title>QUIÉN LO HACE</Title>
            <Desc>
              Producción y coordinación general: Objeto a <br></br>
              Experiencia web: Iris Saladino (programacion) y Laura Palavecino
              (arte e interactividad)<br></br>
              Área Academia: Guillermo Winnicki<br></br>
              Área Acerca del Bioarte: Natalia Mataweki, Lucia Stubrin y Objeto
              a<br></br>
              Dream Room: Marie Claire Flanagan
            </Desc>
          </DivDer>

          <DivDer>
            <Title>CÓMO NAVEGAR</Title>
            <Desc>
              Al ingresar a la web se encontrarán con una recreación en modelo
              3D del laboratorio original del C3 que podrán recorrer, e
              interactuar con algunos de sus habitantes y objetos utilizando el
              mouse (INDICAR MODOS DE INTERACCION). En la mesa principal de
              trabajo verán destacados cinco elementos que al ser cliqueados los
              llevarán a las distintas áreas de Proyecto Bios. ¡Les invitamos a
              disfrutar de la experiencia Proyecto Bios!
            </Desc>
          </DivDer>
          <DivDer>
            <Title>Call to action - frase de cierre</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>
            <LinkWrapper>
              <StyledLink to="/pano">IR A LA EXPERIENCIA 360</StyledLink>
            </LinkWrapper>
          </DivDer>
        </ContDerContainer>
      </BienvenidaContainer>
    </Layout>
  )
}

export default IndexPage
