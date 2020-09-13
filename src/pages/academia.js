import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Loadable from "@loadable/component"
import { useCookies } from "react-cookie"
import logo from "../images/logo192.png"
import Agenda from "../components/agenda"
import fondoHeader from "../images/Academia/academia_bg.jpg"
import logoFestival from "../images/Academia/logo libélula.png"
import bannerHubs from "../images/Academia/Mozilla Hubs.png"

const LoadableMapa = Loadable(() => import("../components/mapa"))

const AcademiaContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
`

const AcademiaHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 45rem;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 1rem;
  background-image: url(${fondoHeader});
  background-size: 140%;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
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
  justify-content: flex-start;
`

const HorasNavegacion = styled.div`
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: white;
  font-size: 1rem;
  align-self: center;
  // margin-right: 10rem;
  flex-basis: 20rem;
`

const CantidadVisitantes = styled.div`
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: white;
  font-size: 1rem;
  flex-grow: 4;
  align-self: flex-start;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 13rem;
  color: white;
  align-self: center;
  margin-top: 10rem;
  line-height: initial;
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
  margin-top: 3rem;
`
const AgendaContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
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
              <Placeholder1 src={logo}></Placeholder1>
            </LogoContainer>
            <ContadoresContainer>
              <HorasNavegacion>1950</HorasNavegacion>
              <CantidadVisitantes>30000</CantidadVisitantes>
            </ContadoresContainer>
          </NavBar>
          <Texto>ACADEMIA</Texto>
          <Subtexto>Acompañanos a conocer</Subtexto>
          <BannerHubs src={bannerHubs}></BannerHubs>
        </AcademiaHeaderContainer>
        <Agenda />
        <LoadableMapa />
      </AcademiaContainer>
    </Layout>
  )
}

export default AcademiaPage
