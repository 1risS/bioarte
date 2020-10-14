import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import logo from "../../images/logo192.png"
import art01 from "../../images/Exhibicion/01Cantera/01Cantera.png"
import art02 from "../../images/Exhibicion/02Ferrari/01ferrari.png"
import art03 from "../../images/Exhibicion/03Duhalde/01duhalde.png"
import art04 from "../../images/Exhibicion/04Fargas/01fargas.png"
import art05 from "../../images/Exhibicion/05Marinaro/01marinaro.png"
import art06 from "../../images/Exhibicion/06Paoletti/01paoletti.png"
//import art07 from "../../images/Exhibicion/03Duhalde/01duhalde.png"
import art08 from "../../images/Exhibicion/08Olmedo/01olmedo.png"
//import art09 from "../../images/Exhibicion/03Duhalde/01duhalde.png"
import art10 from "../../images/Exhibicion/10Olalde/01olalde.png"
//import art11 from "../../images/Exhibicion/03Duhalde/01duhalde.png"
import art12 from "../../images/Exhibicion/12Valente/01valente.png"
import art13 from "../../images/Exhibicion/13Caterbetti/01catterbetti.png"
//import art14 from "../../images/Exhibicion/03Duhalde/01duhalde.png"
//import art15 from "../../images/Exhibicion/03Duhalde/01duhalde.png"
//import art16 from "../../images/Exhibicion/03Duhalde/01duhalde.png"
import art17 from "../../images/Exhibicion/17Bergottini/01bergottini.png"

import logoFestival from "../../images/Academia/logo libélula.png"
import fondoHeader from "../../images/Exhibicion/colony_header.jpg"
import { Link } from "gatsby"

const C = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.bg1};
`

const ExhibicionContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
`

const ExhibicionHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 32rem;
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
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: -2rem;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 100%;
`

const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: 3rem;
  align-self: center;
`

const Texto = styled.div`
  display: flex;
  font-family: ${props => props.theme.fontFamily};
  font-size: 10vw;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 5rem;
  /*line-height: initial;*/
`

const TextoArt = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 2rem;
  font-weight: bold;
  color: black;
  margin-top: 5rem;
  display: flex;
  margin-right: 34%;
  justify-content: center;
  /*line-height: initial;*/
`

const ArtistasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 43%;
  height: 100%;
  margin: 2rem 2rem 2rem 2rem;
  background-color: ${props => props.theme.colors.bg1};
`

const HoverDiv = styled.div`
  float: left;
  height: 180px;
  width: 180px;
  position: absolute;
  left: 0px;
  top: 0px;
  &:hover {
    background-color: rgba(255, 125, 0, 0.5);
  }
`
const ContainerHoverDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: inherit;
  justify-content: space-around;
  margin-top: 0.4rem;
`

const Foto = styled.img`
  display: inherit;
  align-self: center;
  height: 180px;
  width: 180px;
  order: 3;
  ${Link}:hover & {
    fill: rebeccapurple;
  }
`

const ColContainer = styled.div`
  display: inherit;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  margin: 0.3rem 0rem 0.3rem 0rem;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const ColPairs = styled.div`
  display: inherit;
  flex-direction: column;
  width: 100%;
  margin: 0.3rem 0;
`

const RowContainer = styled.div`
  display: inherit;
  flex-direction: row;
  width: 90%;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`
const RowPairs = styled.div`
  display: inherit;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`
const Column = styled.div`
  display: inherit;
  flex-direction: column;
  margin: 0.3rem;
`

const Placeholder1 = styled.img`
  height: 3rem;
  width: 3rem;
  align-self: center;
  margin-right: 1rem;
`

const ContadoresContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-basis: 150rem;
`

const HorasNavegacion = styled.div`
  max-width: 150px;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #414141;
  font-size: 1rem;
`

const CantidadVisitantes = styled.div`
  max-width: 150px;
  width: 100%;
  border-radius: 8px;
  text-align: center;
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #414141;
  font-size: 1rem;
`

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 54%;
  height: 100%;
  margin: 2rem 2rem 2rem 2rem;
  background-color: ${props => props.theme.colors.bg1};
`

const ExhibicionPage = () => {
  return (
    <Layout>
      <C>
        <SEO title="Excibición" />
        <ExhibicionHeaderContainer>
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
          <Texto>BIOARTE</Texto>
        </ExhibicionHeaderContainer>
        <ArtistasContainer id="CONTAINER">
          <RowContainer>
            <RowPairs>
              <Column>
                <Link to="detalleArtista1">
                  <ContainerHoverDiv>
                    <Foto src={art01}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista2">
                  <ContainerHoverDiv>
                    <Foto src={art02}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art03}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art04}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
              </Column>

              <Column>
                <Link to="detalleArtista1">
                  <ContainerHoverDiv>
                    <Foto src={art05}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista2">
                  <ContainerHoverDiv>
                    <Foto src={art06}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art08}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art10}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
              </Column>
            </RowPairs>

            <RowPairs>
              <Column>
                <Link to="detalleArtista1">
                  <ContainerHoverDiv>
                    <Foto src={art12}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista2">
                  <ContainerHoverDiv>
                    <Foto src={art13}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art17}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art04}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
              </Column>

              <Column>
                <Link to="detalleArtista1">
                  <ContainerHoverDiv>
                    <Foto src={art01}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista2">
                  <ContainerHoverDiv>
                    <Foto src={art02}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art03}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
                <Link to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art04}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </Link>
              </Column>
            </RowPairs>
          </RowContainer>
        </ArtistasContainer>
        <TextoArt>Artistas</TextoArt>
        <BioContainer></BioContainer>
      </C>
    </Layout>
  )
}

export default ExhibicionPage
