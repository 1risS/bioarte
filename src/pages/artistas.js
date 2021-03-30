import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import fotoAnaLaura from "../images/Exhibicion/01Cantera/01Cantera.png"
import fotoMuru from "../../static/images/artists/muru/01 - Foto de Muru 7.8 foto_SMALL.png"
import fotoOliverio from "../../static/images/artists/oliverioDuhalde/01 - OLIVERIO DUHALDE PHOTO 2021.jpg"
import fotoFargas from "../../static/images/artists/joaquinFargas/01 - Foto Joaquin.jpg"
import fotoMarinaro from "../../static/images/artists/alejandraMarinaro/01 - Foto alejandra.jpg"
import fotoElectrobiota from "../../static/images/artists/electrobiota/02 -  Imagen RizosferaFM_00.jpg"
import fotoAgarart from "../../static/images/artists/agarart/lauraEcharren/02 - Imagen Secundaria - Spring-onella_SMALL.png"
import fotoFerrari from "../../static/images/artists/demianFerrari/01 - Demian Ferrari.png"
import fotoOlmedo from "../../static/images/artists/danielAlvarezOlmedo/01 - Foto Daniel Alvarez Olmedo.jpg"
import fotoModelado from "../../static/images/artists/modeladoMolecular/01 - Foto bloque 1 - pablo_federico.png"
import fotoSacco from "../../static/images/artists/darioSacco/01 - Foto Dario Sacco_SMALL.png"
import fotoLapadula from "../../static/images/artists/pabloLapadula/Pablo_Lapadula_SMALL.png"
import fotoBiomateriales from "../../static/images/artists/biomateriales/01 - Foto Veronica Bergottini - 001_SMALL.png"
import fotoPaoletti from "../../static/images/artists/lucianaPaoletti/Luciana 04_SMALL.png"
import fondoHeader from "../../static/images/carousel/Banner_Exhibition_0.png"
import like from "../../static/images/exhibicion/likelikeRounded.png"
import HomeBoton from "../components/homeBoton"
import Footer from "../components/footer"
import Chat from "../components/chat"
import LikeBoton from "../components/likelikeBoton"

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
  width: 100%;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 100%;
  margin-right: 15em;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 14rem;
  font-weight: bold;
  color: white;
  align-self: center;

  max-height: 750px;
  padding-top: 3%;
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
  opacity: 0;
  &:hover {
    background-color: rgb(255, 125, 0, 0.5);
    opacity: 1;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 180px;
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

  &:hover {
    fill: rebeccapurple;
  }
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

const LikeLikeCont = styled.div`
  margin-left: 10rem;
  align-self: flex-end;
  padding: 2rem;
  margin: 0rem 4rem 0rem 0rem;
  &:hover {
    cursor: pointer;
  }
`

const Subtexto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  font-style: italic;
  font-size: 1.5rem;
  color: white;
  align-self: center;
`

const ArtistLink = ({ to, ...props }) => <Link {...props} to={`${to}#header`} />

const ArtistCard = ({ to, name, src }) => (
  <ArtistLink to={to}>
    <ContainerHoverDiv>
      <Foto src={src} />
      <HoverDiv>{name}</HoverDiv>
    </ContainerHoverDiv>
  </ArtistLink>
)

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
          <LikeLikeCont>
            <LikeBoton />
          </LikeLikeCont>
        </ExhibicionHeaderContainer>

        {/* Matriz */}

        <ArtistasContainer id="CONTAINER">
          <RowContainer>
            <RowPairs>
              {/* col1 */}
              <Column>
                <ArtistCard
                  to="ana-laura-cantera"
                  name="Ana Laura Cantera"
                  src={fotoAnaLaura}
                />
                <ArtistCard
                  to="alejandra-marinaro"
                  name="Alejandra Marinaro"
                  src={fotoMarinaro}
                />
                <ArtistCard
                  to="modelado-molecular"
                  name="Modelado Molecular"
                  src={fotoModelado}
                />
                <ArtistCard
                  to="dario-sacco"
                  name="Darío Sacco"
                  src={fotoSacco}
                />
              </Column>
              {/* col2 */}
              <Column>
                <ArtistCard to="muru" name="Muru" src={fotoMuru} />
                <ArtistCard
                  to="electrobiota"
                  name="Electrobiota"
                  src={fotoElectrobiota}
                />
                <ArtistCard
                  to="pablo-lapadula"
                  name="Pablo La Padula"
                  src={fotoLapadula}
                />
                <ArtistCard
                  to="luciana-paoletti"
                  name="Luciana Paoletti"
                  src={fotoPaoletti}
                />
              </Column>
            </RowPairs>

            <RowPairs>
              {/* col3 */}
              <Column>
                <ArtistCard
                  to="oliverio-duhalde"
                  name="Oliverio Duhalde"
                  src={fotoOliverio}
                />
                <ArtistCard to="agarart" name="Agar Art" src={fotoAgarart} />
                <ArtistCard
                  to="daniel-alvarez-olmedo"
                  name="Daniel Alvarez Olmedo"
                  src={fotoOlmedo}
                />
                <ArtistCard to="ariel-wilner" name="Ariel Wilner" src={like} />
              </Column>
              {/* col4 */}
              <Column>
                <ArtistCard
                  to="joaquin-fargas"
                  name="Joaquín Fargas"
                  src={fotoFargas}
                />
                <ArtistCard
                  to="demian-ferrari"
                  name="Demian Ferrari"
                  src={fotoFerrari}
                />
                <ArtistCard
                  to="biomateriales"
                  name="Biomateriales"
                  src={fotoBiomateriales}
                />
                <ArtistCard
                  to="la-exhibición"
                  name="La Exhibición"
                  src={like}
                />
              </Column>
            </RowPairs>
          </RowContainer>
        </ArtistasContainer>
        <BioContainer />
      </C>
      <Chat />
      <Footer />
    </Layout>
  )
}

export default ArtistasPage
