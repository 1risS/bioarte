import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useCookies } from "react-cookie"
import logoFestival from "../../images/Academia/logo libélula.png"
import Placeholder from "../../../static/images/Icon-Placeholder-1.png"
import bannerHubs from "../../images/Academia/Mozilla Hubs.png"
import fondoHeader from "../../images/DetalleArtistas/Banner_Exhibition_0.png"
import libelula from "../../images/DetalleArtistas/Dragonfly.png"

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
  background-size: 100%;
  background-repeat: no-repeat;
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
/*
const Subtexto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  font-style: italic;
  font-size: 1.5rem;
  color: white;
  align-self: center;
`
*/

const BannerHubs = styled.img`
  height: 6rem;
  width: 6rem;
  align-self: flex-end;
  margin: 6rem 0rem 2rem 2rem; ;
`
const DAMain = styled.div`
  display: flex;
`

const Libelulaimg = styled.img`
  height: 6rem;
  width: 6rem;
  align-self: flex-start;
`

// ponemos una cookie para saber si le usuarix pasó por acá

const DetalleArtista1 = () => {
  return (
    <Layout>
      <SEO title="Artista" />
      <DAContainer>
        <DAHeaderContainer>
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
          <Texto>Bioarte</Texto>
          <BannerHubs src={bannerHubs}></BannerHubs>
          <Libelulaimg src={libelula}></Libelulaimg>
          <DAMain></DAMain>
        </DAHeaderContainer>
      </DAContainer>
    </Layout>
  )
}

export default DetalleArtista1
