import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Loadable from "@loadable/component"
import { useCookies } from "react-cookie"
import Agenda from "../components/agenda"
import fondoHeader from "../images/Academia/academia_bg.jpg"
import logoFestival from "../images/Academia/logo libélula.png"
import bannerHubs from "../images/Academia/Mozilla Hubs.png"
import Placeholder from "../../static/images/Icon-Placeholder-1.png"
import Mapbox from "../components/mapaMapbox"

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
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
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
const ContadoresContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-basis: 150rem;
`

const HorasNavegacion = styled.div`
  width: 150px;
  border-radius: 8px;
  text-align: center;
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #414141;
  font-size: 1rem;
`

const CantidadVisitantes = styled.div`
  width: 150px;
  border-radius: 8px;
  text-align: center;
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #414141;
  font-size: 1rem;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 10rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 25vh;
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
const BannerHubs = styled.img`
  height: 6rem;
  width: 6rem;
  align-self: flex-end;
  margin: 15rem 3rem 2rem 2rem; ;
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

const MapaPlaceholder = styled.img`
  height: 50vh;
`

const InfoContainer = styled.div`
  background-color: green;
  padding: 1em;
  height: 400px;
  width: 340px;
`

const DateTab = styled.span`
  background-color: white;
  color: #fff;
  border-radius: 16px;
  padding: 0.25em 0.5em;
  cursor: pointer;
  width: 8rem;
`

// const inputUniv = styled.input.attrs(props => ({
//   type: "text",
//   size: props.small ? 5 : undefined,
// }))`
//   border-radius: 3px;
//   border: 1px solid palevioletred;
//   display: block;
//   margin: 0 0 1em;
//   padding: ${props => props.padding};

//   ::placeholder {
//     color: palevioletred;
//   }
// `

const inputUniv = styled.input`
  height: 36px;
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  border: 1px solid grey;
  padding-left: 10px;
  line-height: normal;
  font-size: 18px;
  color: black;

  &::placeholder {
    color: grey;
    opacity: 0.4;
  }
`

const inputContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: left;
`

const UniversidadesContainer = styled.div`
  width: 1000px;
  height: 600px;
`

// ponemos una cookie para saber si le usuarix pasó por acá
const AcademiaPage = () => {
  const [cookies, setCookie] = useCookies(["AcademiaVisited"])

  useEffect(() => {
    console.log("visito academia?", cookies.AcademiaVisited)
    setCookie("AcademiaVisited", true, { path: "/" })
  }, [])

  return (
    <Layout>
      <SEO title="Academia" />
      <AcademiaContainer>
        <AcademiaHeaderContainer>
          <NavBar>
            <LogoContainer>
              <Logo src={logoFestival}></Logo>
              <Placeholder1 src={Placeholder}></Placeholder1>
            </LogoContainer>
            <ContadoresContainer>
              <HorasNavegacion>1950</HorasNavegacion>
              <CantidadVisitantes>30000</CantidadVisitantes>
            </ContadoresContainer>
          </NavBar>
          <Texto>Academia</Texto>
          <Subtexto>Acompañanos a conocer</Subtexto>
          <BannerHubs src={bannerHubs}></BannerHubs>
        </AcademiaHeaderContainer>
        <Section>
          <AgendaContainer>
            <Agenda />
          </AgendaContainer>
        </Section>
        <Section>
          <UniversidadesContainer>
            <TextoDark>Universidades</TextoDark>
            <SectionMapa>
              <InfoContainer>
                <DateTab>
                  <input type="text" />
                </DateTab>
              </InfoContainer>
              <Mapbox></Mapbox>
            </SectionMapa>
          </UniversidadesContainer>
        </Section>
      </AcademiaContainer>
    </Layout>
  )
}

export default AcademiaPage
