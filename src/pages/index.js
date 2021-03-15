import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/welcome/BG_WelcomePage.png"
import isoLogo from "../../static/images/welcome/IsoLogo.png"
import expNormal from "../../static/images/welcome/BtnWelcome_Lab-Normal.png"
import expHover from "../../static/images/welcome/BtnWelcome_Lab-Hover.png"
import expActive from "../../static/images/welcome/BtnWelcome_Lab-Click.png"
// import TagManager from "react-gtm-module"

const BienvenidaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: black;
  background-image: url(${logo});
  background-size: 87%;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
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
  margin-left: 4rem;
`

const ContDerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const DivDer = styled.div`
  margin: 0rem 4rem 4rem 20rem;
`

const DivDerEmpty = styled.img`
  height: 33%;
  margin-left: 33%;
  margin-top: 4rem;
  margin-bottom: 2rem;
`

const DivIzq = styled.div`
  margin: 1rem 25rem 3rem 1rem;
`

const DivIzqEmpty = styled.div`
  height: 20%;
`

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-weight: bold;
`

const Desc = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-size: 14px;
  font-weight: 100;
`

// const tagManagerArgs = {
//   gtmId: "GTM-5W8X7HR",
// }

// TagManager.initialize(tagManagerArgs)

const Bold = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-weight: bold;
`

const Exp = styled.div`
  display: block;
  height: 150px;
  width: 150px;
  background-image: url(${expNormal});

  &:hover {
    background-image: url(${expHover});
  }

  &active {
    background-image: url(${expActive});
  }
`

const DivDer360 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`

const Block = styled.div`
  opacity: 0.1;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="BioArte" />
      <BienvenidaContainer id="bienvenidaContainer">
        <ContenidoIzqContainer>
          <DivIzqEmpty></DivIzqEmpty>
          <DivIzq>
            <Block>
              <Title>¿Quienes lo integran?</Title>
              <Desc>
                <br></br> Producción y coordinación general: Objeto a <br></br>
                Diseño: Valeria Scalise <br></br>
                Experiencia web: Iris Saladino (Programación) y Laura Palavecino
                (Arte) <br></br>
                Área Academia: Guillermo Winnicki <br></br>
                Área Bioarte: Natalia Matewecki, Lucia Stubrin, Objeto a
                <br></br>
                Experiencia xxx: Marie Claire Flanagan
              </Desc>
            </Block>
          </DivIzq>
          <DivIzq>
            <Block>
              <Title>¿Cómo se conforma?</Title>
              <Desc>
                <br></br>
                Proyecto Bios se estructura de la siguiente forma:<br></br>
                <Bold>a) Site web con cinco áreas:</Bold>
                Exhibición de BioArte- Panorama nacional y obras inéditas{" "}
                <br></br>
                Academia -Mapa Nacional de Universidades y sus
                especializaciones.
                <br></br>
                Biotecnología -Áreas de actividad, investigación y desarrollo
                local.<br></br>
                Acerca del BioArte - Hitos destacados , investigaciones y
                aproximación al bioarte<br></br>
                Espacio Biozen - un espacio de introspección y exploración
                sensorial <br></br>
                <Bold>b) Agenda de Actividades:</Bold>
                Conversatorios, talleres, performances y master classes<br></br>
                Acerca del BioArte: Timeline. Diferentes aproximaciones al
                bioarte
              </Desc>
            </Block>
          </DivIzq>
        </ContenidoIzqContainer>
        <ContDerContainer>
          <DivDerEmpty
            src="images/welcome/IsoLogo.png"
            height="130px"
            width="410px"
          ></DivDerEmpty>
          <DivDer>
            <Block>
              <Title>¿Qué es Proyecto Bios?</Title>
              <Desc>
                <br></br>
                Proyecto Bios pretende conformar un círculo virtuoso entre Arte,
                Academia y Ciencia para acompañar, difundir y divulgar los
                avances de la Biotecnología en el país, visibilizar y potenciar
                los trabajos de artistas de BioArte y brindar información de la
                propuesta de la Academia en las distintas especialidades de la
                Biotecnología. Proyecto Bios brinda la posibilidad de producir
                cruces que den lugar a grupos de trabajos interdisciplinarios
                aunando la creatividad y libertad del arte, el conocimiento
                académico y la tecnología de la ciencia, para abordar los
                interrogantes que el futuro presentará.
              </Desc>
            </Block>
          </DivDer>

          <DivDer>
            <Block>
              <Title>¿Cómo recorrer la experiencia?</Title>
              <Desc>
                <br></br>
                Al ingresar al sitio web encontrarán una recreación artística en
                modelo 3D (realización L.Palavecino) del laboratorio original
                del C3. Recorriendo el espacio con el mouse identificarán
                objetos que representan las distintas áreas de Proyecto Bios.
                Para ingresar a cada una de ellas, deberán cliquear en el objeto
                correspondiente.
                <br></br>
                <br></br>
                Durante los cinco días del evento habrá una agenda de charlas y
                actividades que se transmitirán vía Zoom y por streaming del
                Youtube del C3; habrá también talleres en Mozilla.Hubs y una
                inauguración virtual de la exhibición en likelike. Para
                participar deben inscribirse y recibirán las instrucciones y
                respectivos links.<br></br> <br></br>¡Los invitamos a disfrutar
                de la experiencia Proyecto Bios!
              </Desc>
            </Block>
            <DivDer360>
              <LinkWrapper>
                <StyledLink to="/pano">
                  <Exp src="images/welcome/BtnWelcome_Lab-Normal.png"></Exp>
                </StyledLink>
              </LinkWrapper>
            </DivDer360>
          </DivDer>
        </ContDerContainer>
      </BienvenidaContainer>
    </Layout>
  )
}

export default IndexPage
