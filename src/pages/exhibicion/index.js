import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import logo from "../../images/logo192.png"
import img01 from "../../images/Exhibicion/cantera/cantera.png"
import img02 from "../../images/Exhibicion/fargas/fargas.png"
import img03 from "../../images/Exhibicion/artista03/03.png"
import img04 from "../../images/Exhibicion/artista04/04.png"
import img05 from "../../images/Exhibicion/artista05/05.png"
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
  background-size: 100%;
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
  width: 30%;
`

const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: 3rem;
  align-self: center;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 10rem;
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
  align-self: right;
  margin-top: 5rem;
  margin-left: 22rem;
  /*line-height: initial;*/
`

const ArtistasContainer = styled.div`
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

const RowContainer = styled.div`
  display: inherit;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
  margin: 0.3rem 0rem 0.3rem 0rem;
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
              <Link to="detalleArtista1">
                <ContainerHoverDiv>
                  <Foto src={img02}></Foto>
                  <HoverDiv></HoverDiv>
                </ContainerHoverDiv>
              </Link>
              <Link to="detalleArtista2">
                <ContainerHoverDiv>
                  <Foto src={img03}></Foto>
                  <HoverDiv></HoverDiv>
                </ContainerHoverDiv>
              </Link>
            </RowPairs>
            <RowPairs>
              <ContainerHoverDiv>
                <Link to="detalleArtista3">
                  <Foto src={img01}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
              <ContainerHoverDiv>
                <Link to="detalleArtista4">
                  <Foto src={img04}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
            </RowPairs>
          </RowContainer>
          <RowContainer>
            <RowPairs>
              <ContainerHoverDiv>
                <Link to="detalleArtista4">
                  <Foto src={img05}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
              <ContainerHoverDiv>
                <Link to="detalleArtista5">
                  <Foto src={img02}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
            </RowPairs>
            <RowPairs>
              <ContainerHoverDiv>
                <Link to="detalleArtista6">
                  <Foto src={img03}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
              <ContainerHoverDiv>
                <Link to="detalleArtista6">
                  <Foto src={img01}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
            </RowPairs>
          </RowContainer>
          <RowContainer>
            <RowPairs>
              <ContainerHoverDiv>
                <Link to="detalleArtista4">
                  <Foto src={img04}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
              <ContainerHoverDiv>
                <Link to="detalleArtista5">
                  <Foto src={img05}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
            </RowPairs>
            <RowPairs>
              <ContainerHoverDiv>
                <Link to="detalleArtista6">
                  <Foto src={img02}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
              <ContainerHoverDiv>
                <Link to="detalleArtista6">
                  <Foto src={img03}></Foto>
                  <HoverDiv></HoverDiv>
                </Link>
              </ContainerHoverDiv>
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
