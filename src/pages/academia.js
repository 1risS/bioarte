import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Agenda from "../components/agenda"
import fondoHeader from "../images/Academia/academia_bg.jpg"
import MapboxMap from "../components/MapboxMap"
import Boton from "../components/boton"
import Footer from "../components/footer"
import HomeBoton from "../components/homeBoton"

const AcademiaContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
`

const AcademiaHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 1rem;
  background-image: url(${fondoHeader});
  background-size: 100%;
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
  font-size: 10rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 20vh;
  /*line-height: initial;*/
`

const TextoDark = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 4rem;
  font-weight: bold;
  color: black;
  align-self: center;
  margin-top: 0;
`

const Subtexto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  font-style: italic;
  font-size: 1.5rem;
  color: white;
  align-self: center;
`

const AgendaContainer = styled.div`
  width: 55%;
  margin-top: 4em;
  margin-bottom: 4em;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem 0rem 0rem;
`

const SectionMapa = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0rem 0rem 0rem;
  padding: 0rem 0rem 4rem 0rem;
`

const UniversidadesContainer = styled.div`
  width: 1000px;
  height: 600px;
  margin-top: 4rem;
`

const AcademiaPage = () => {
  // const [cookie, setCookie] = useCookies(["AcademiaVisited"])

  // // ponemos una cookie para saber si le usuarix pasó por acá
  // useEffect(() => {
  //   setCookie("AcademiaVisited", true, { path: "/" })
  // }, [setCookie])

  return (
    <Layout>
      <SEO title="Academia" />
      <AcademiaContainer>
        <AcademiaHeaderContainer>
          <NavBar>
            <LogoContainer>
              <HomeBoton></HomeBoton>
            </LogoContainer>
          </NavBar>
          <Texto>Academia</Texto>
          <Subtexto>Mapa Argentino de Carreras de Biotecnologia</Subtexto>
        </AcademiaHeaderContainer>
        <Section>
          <UniversidadesContainer>
            <TextoDark>Universidades</TextoDark>
            <SectionMapa>
              <MapboxMap />
            </SectionMapa>
          </UniversidadesContainer>
        </Section>
        <Boton label="Descargar más info" url=""></Boton>
        <Section>
          <AgendaContainer>
            <Agenda />
          </AgendaContainer>
        </Section>
        <Boton
          label="Inscripciones"
          url="https://programabios.wixsite.com/proyectobios"
        ></Boton>
        <Footer></Footer>
      </AcademiaContainer>
    </Layout>
  )
}

export default AcademiaPage
