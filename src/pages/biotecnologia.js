import React from "react"
import { Link } from "gatsby"
import Agenda from "../components/agenda"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerBg from "../../static/images/biotecnologia/biotecnologia_banner_bg.png"
import HomeBoton from "../components/homeBoton"
import Boton from "../components/boton"

const BiotecnologiaCont = styled.div`
  background-color: ${props => props.theme.colors.bg1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
`

const BiotecnologiaHeaderCont = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 1rem;
  background-image: url(${bannerBg});
  background-repeat: no-repeat;
  background-size: 100%;
`

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  // justify-content: space-around;
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
  font-size: 11rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 30vh;
  /*line-height: initial;*/
`

const AgendaCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5rem 0rem 4rem 0rem;
  max-width: 1164px;
  width: 100%;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  margin: 2rem 2rem 2rem 2rem;
  width: 60%;
  background-color: ${props => props.theme.colors.bg1};
`

const SectionCarousel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 60%;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg1};
  padding-top: 4rem;
`
const IconsCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 90vw;
  justify-content: space-around;
  margin: 6rem;
`
const I = styled.img`
  height: 15rem;
  width: 15rem;
`

const Icono = ({ src }) => {
  return <I src={src}></I>
}

const BiotecnologiaPage = () => {
  return (
    <Layout>
      <SEO title="Biotecnología" />
      <BiotecnologiaCont>
        <BiotecnologiaHeaderCont>
          <NavBar>
            <LogoContainer>
              <HomeBoton></HomeBoton>
            </LogoContainer>
          </NavBar>
          <Texto>Biotecnología</Texto>
        </BiotecnologiaHeaderCont>
        <SectionCarousel>
          <IconsCont>
            <Link to="que-es">
              <Icono src={bannerBg}></Icono>
            </Link>
            <Link to="colores">
              <Icono src={bannerBg}></Icono>
            </Link>
            <Link to="argentina-en-el-mundo">
              <Icono src={bannerBg}></Icono>
            </Link>
            <Link to="mapa-de-argentina">
              <Icono src={bannerBg}></Icono>
            </Link>
          </IconsCont>
        </SectionCarousel>
        <Section>
          <AgendaCont>
            <Agenda />
          </AgendaCont>
        </Section>
        <Boton
          label="Inscripción"
          url="https://programabios.wixsite.com/proyectobios"
        ></Boton>
      </BiotecnologiaCont>
    </Layout>
  )
}

export default BiotecnologiaPage
