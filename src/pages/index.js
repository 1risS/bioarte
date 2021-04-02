import React from "react"
import styled from "styled-components"
import { animated, Keyframes } from "react-spring/renderprops"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/welcome/BG_WelcomePage.png"
import HomeBoton from "../components/homeBoton"
import { createGlobalStyle } from "styled-components"
// import TagManager from "react-gtm-module"

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: #050708;
  }
`
const BienvenidaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-color: #050708;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
`

const ContenidoIzqContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 2.5%;
  padding-top: 2%;
`

const ContDerContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-left: 16%;
  padding-top: 2%;
`

const DivDer = styled.div`
  position: relative;
  margin: 1rem 4rem 0rem 0rem;
`

const DivDerEmpty = styled.img`
  height: 219px;
  width: 400px;
`

const DivIzq = styled.div`
  position: relative;
  margin: 0.5rem 25rem 1.5rem 0.5rem;
`

const DivIzqEmpty = styled.div`
  height: 13%;
`

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-weight: 600;
`

const Desc = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-size: 15px;
  font-weight: 50;
  letter-spacing: 0px;
  align-text: justify;
`

// const tagManagerArgs = {
//   gtmId: "GTM-5W8X7HR",
// }

// TagManager.initialize(tagManagerArgs)

const Bold = styled.span`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-weight: bold;
`

const DivDer360 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`

const FadeInOutLoop = Keyframes.Spring(async next => {
  while (true) {
    await next({ from: { opacity: 0 }, opacity: 1, config: { duration: 1000 } })
    await next({ from: { opacity: 1 }, opacity: 0, config: { duration: 1000 } })
  }
})

const FasterFadeInOutLoop = Keyframes.Spring(async next => {
  while (true) {
    await next({ from: { opacity: 0 }, opacity: 1, config: { duration: 800 } })
    await next({ from: { opacity: 1 }, opacity: 0, config: { duration: 800 } })
  }
})

const LightGuide = styled(({ debug, flipX, flipY, className }) => {
  let groupTransform = flipX ? "" : "scale(-1 1) translate(-100 0)"
  if (flipY) groupTransform += " translate(100 0) rotate(90)"

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform={groupTransform} transformorigin="center">
        {debug && (
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            stroke="#ff00ff"
            strokeWidth="1"
            fill="transparent"
          />
        )}
        <FadeInOutLoop native>
          {style => (
            <animated.circle
              style={style}
              className="begin-big"
              cx="10"
              cy="50"
              r="5"
              fill="transparent"
              stroke="#ffffff"
              strokeWidth="0.8"
            />
          )}
        </FadeInOutLoop>
        <FasterFadeInOutLoop native>
          {style => (
            <animated.circle
              style={style}
              className="begin-small"
              cx="10"
              cy="50"
              r="3"
              fill="transparent"
              stroke="#888888"
              strokeWidth="0.8"
            />
          )}
        </FasterFadeInOutLoop>
        <path d="M 15 50 H 55" stroke="#888888" strokeWidth="0.8" />
        <circle
          className="end"
          cx="58"
          cy="50"
          r="3"
          fill="transparent"
          stroke="#cccccc"
          strokeWidth="0.8"
        />
      </g>
    </svg>
  )
})`
  position: absolute;
  top: ${props => props.top};
  right: ${props => props.right};
  left: ${props => props.left};
  width: 10rem;
`

const Block = styled.div`
  opacity: 0.5;
  transition: 0.35s;
  &:hover {
    opacity: 1;
  }
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="BioArte" />
      <GlobalStyle />
      <BienvenidaContainer id="bienvenidaContainer">
        <ContenidoIzqContainer>
          <DivIzqEmpty />
          <DivIzq>
            <Block>
              <LightGuide top="40px" right="-120px" />
              <Title>¿Qué es Proyecto Bios</Title>
              <Desc>
                <br></br>
                Proyecto Bios pretende conformar un círculo virtuoso entre Arte,
                Academia y Ciencia para acompañar, difundir y divulgar los
                avances de la Biotecnología en el país, visibilizar y potenciar
                los trabajos de artistas de BioArte y brindar información de la
                Academia en las distintas especialidades de la Biotecnología.
                Brinda la posibilidad de producir cruces que den lugar a grupos
                de trabajos interdisciplinarios aunando la creatividad y
                libertad del arte, el conocimiento académico y la tecnología de
                la ciencia, para abordar los interrogantes que el futuro
                presentará.
              </Desc>
            </Block>
          </DivIzq>
          <DivIzq>
            <Block>
              <LightGuide top="20px" right="-160px" />
              <Title>¿Cómo se conforma?</Title>
              <Desc>
                <br></br>
                <Bold> Sitio web con cinco áreas: </Bold>
                <br></br>
                <br></br>
                Exhibición de BioArte - Panorama nacional y obras inéditas{" "}
                <br></br>
                Academia - Mapa Nacional de Universidades y sus
                especializaciones
                <br></br>
                Biotecnología - Áreas de actividad, investigación y desarrollo
                local<br></br>
                Acerca del BioArte - Hitos destacados , investigaciones y
                aproximación al bioarte<br></br>
                Soft Sanctuary - un espacio de introspección y exploración
                sensorial
                <br></br>
                <Bold>Agenda de Actividades: </Bold> Conversatorios, talleres,
                performances y master classes<br></br>
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
              <LightGuide flipY top="-90px" left="205px" />
              <Title>¿Quiénes lo integran?</Title>
              <Desc>
                <br></br>
                <Bold>Producción y coordinación general: </Bold> Objeto a
                <br></br>
                <Bold>Diseño:</Bold> Valeria Scalise
                <br></br>
                <Bold>Experiencia web:</Bold> Iris Saladino (Programación) y
                Laura Palavecino (Arte)
                <br></br>
                <Bold>Área Academia:</Bold> Guillermo Winnicki
                <br></br>
                <Bold>Área Bioarte: </Bold> Natalia Matewecki, Lucia Stubrin,
                Objeto a<br></br>
                <Bold>Soft Sanctuary: </Bold>Marie Claire Flanagan <br></br>
                <Bold>Galería en LikeLike:</Bold> Leandro Godón y Laura
                Palavecino
              </Desc>
            </Block>
          </DivDer>

          <DivDer>
            <Block>
              <LightGuide flipX top="-60px" left="-130px" />
              <Title>¿Cómo recorrer la experiencia?</Title>
              <Desc>
                <br></br>
                Al ingresar a la web encontrarán una recreación artística 360 en
                modelo 3D del laboratorio original del C3. Recorriendo el
                espacio identificarán objetos que representan las distintas
                áreas de Proyecto Bios, que podrán clickear para ingresar. El
                evento contempla una agenda virtual de charlas y actividades
                durante cinco días. Para participar deben inscribirse dentro de
                las secciones de Academia y Biotecnología.
              </Desc>
            </Block>
            <DivDer360>
              <HomeBoton showText={true} />
            </DivDer360>
          </DivDer>
        </ContDerContainer>
      </BienvenidaContainer>
    </Layout>
  )
}

export default IndexPage
