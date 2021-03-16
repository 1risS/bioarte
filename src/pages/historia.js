// acá va la implementación de una línea de tiempo

import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Loadable from "@loadable/component"
import { useCookies } from "react-cookie"
import fondoHeader from "../images/Academia/academia_bg.jpg"
import logoFestival from "../images/Academia/logo libélula.png"
import HomeBoton from "../components/homeBoton"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg1};
`

const TimelineCont = styled.div`
  width: 100%;
  margin-top: 10rem;
`
const HistoriaHeaderContainer = styled.div`
  display: flex;
  width: 100vw;
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
  margin-top: 4rem;
  margin-bottom: -2rem;
  width: 100vw;
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
const CantidadVisitantesContainer = styled.div`
  max-width: 150px;
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  font-weight: lighter;
  color: #fff;
  margin-left: 10em;
`

const TextoContadores = styled.div`
  font-weight: lighter;
  font-size: 1em;
`

const CantidadVisitantes = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 8rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 25vh;
  /*line-height: initial;*/
`
const Subtexto = styled.div`
  font-style: italic;
  font-size: 1.5rem;
  color: white;
  align-self: center;
`

const LineaDeTiempo = () => {
  return (
    <Layout>
      <SEO title="Histora" />
      <Container>
        <HistoriaHeaderContainer>
          <NavBar>
            <LogoContainer>
              <HomeBoton></HomeBoton>
            </LogoContainer>
          </NavBar>
          <Texto>Acerca del Bioarte</Texto>
          <Subtexto>Hitos históricos y reflexiones</Subtexto>
        </HistoriaHeaderContainer>

        <TimelineCont>
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1rs7WEGSPGYaGZ3zqiFY5bPqKAbPwRJEWYa3c81mSLzk&font=Default&lang=es&initial_zoom=2&height=650"
            width="100%"
            height="650"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
            frameborder="0"
          ></iframe>
        </TimelineCont>
      </Container>
    </Layout>
  )
}

export default LineaDeTiempo
