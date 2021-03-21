import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import fotoAnaLaura from "../images/Exhibicion/01Cantera/01Cantera.png"
import art03 from "../images/Exhibicion/03Duhalde/01duhalde.png"
import art04 from "../images/Exhibicion/04Fargas/01fargas.png"
import fotoMuru from "../../static/images/artists/muru/01 - Foto de Muru 7.8 foto.png"
import art06 from "../images/Exhibicion/06Paoletti/01Paoletti.png"
import art08 from "../images/Exhibicion/08Olmedo/01olmedo.png"
import art10 from "../images/Exhibicion/10Olalde/01olalde.png"
import art12 from "../images/Exhibicion/12Valente/01Valente.png"
import art13 from "../images/Exhibicion/13Caterbetti/01catterbetti.png"
import art17 from "../images/Exhibicion/17Bergottini/01Bergottini.png"
import fondoHeader from "../../static/images/carousel/Banner_Exhibition_0.png"
import like from "../../static/images/exhibicion/likelikeRounded.png"
import HomeBoton from "../components/homeBoton"
import Footer from "../components/footer"

const C = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.bg1};
`

const ExhibicionHeaderContainer = styled.div`
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
  width: 100vw;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 100%;
  margin-right: 15em;
`

const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: 3rem;
  align-self: center;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 14rem;
  font-weight: bold;
  color: white;
  align-self: center;

  max-height: 750px;
  padding-top: 25vh;
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
  margin: 3rem 2rem 5rem 2rem;
  background-color: ${props => props.theme.colors.bg1};
`

const HoverDiv = styled.div`
  float: left;
  height: 180px;
  width: 180px;
  position: absolute;
  left: 1rem;
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
  margin: 1rem;
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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0.3rem;
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

const LikeLikeCont = styled.a`
  margin-left: 10rem;
  align-self: flex-end;
  margin: 0rem 4rem 0rem 0rem;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

const Like = styled.img``

const Subtexto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  font-style: italic;
  font-size: 1.5rem;
  color: white;
  align-self: center;
`

const ArtistLink = ({ to, ...props }) => <Link {...props} to={`${to}#header`} />

const ArtistasPage = () => {
  return (
    <Layout>
      <C>
        <SEO title="Excibición" />
        <ExhibicionHeaderContainer>
          <NavBar>
            <LogoContainer>
              <HomeBoton></HomeBoton>
            </LogoContainer>
          </NavBar>
          <Texto>Bioarte</Texto>
          <Subtexto>Exhibición virtual</Subtexto>
          <LikeLikeCont src="http://likelike.glitch.me/">
            <Like src={like} />
          </LikeLikeCont>
        </ExhibicionHeaderContainer>

        {/* Matriz */}

        <ArtistasContainer id="CONTAINER">
          <RowContainer>
            <RowPairs>
              <Column>
                <ArtistLink to="ana-laura-cantera">
                  <ContainerHoverDiv>
                    <Foto src={fotoAnaLaura}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalle de artista 2">
                  <ContainerHoverDiv>
                    <Foto src={like}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art03}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art04}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
              </Column>

              <Column>
                <ArtistLink to="muru">
                  <ContainerHoverDiv>
                    <Foto src={fotoMuru}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista2">
                  <ContainerHoverDiv>
                    <Foto src={art06}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art08}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art10}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
              </Column>
            </RowPairs>

            <RowPairs>
              <Column>
                <ArtistLink to="detalleArtista1">
                  <ContainerHoverDiv>
                    <Foto src={like}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista2">
                  <ContainerHoverDiv>
                    <Foto src={art13}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art17}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art04}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
              </Column>

              <Column>
                <ArtistLink to="muru">
                  <ContainerHoverDiv>
                    <Foto src={fotoAnaLaura}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista2">
                  <ContainerHoverDiv>
                    <Foto src={fotoMuru}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista3">
                  <ContainerHoverDiv>
                    <Foto src={art03}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
                <ArtistLink to="detalleArtista4">
                  <ContainerHoverDiv>
                    <Foto src={art04}></Foto>
                    <HoverDiv></HoverDiv>
                  </ContainerHoverDiv>
                </ArtistLink>
              </Column>
            </RowPairs>
          </RowContainer>
        </ArtistasContainer>

        <BioContainer></BioContainer>
      </C>
      <Footer></Footer>
    </Layout>
  )
}

export default ArtistasPage
