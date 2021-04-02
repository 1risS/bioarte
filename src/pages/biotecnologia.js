import React from "react"
import { Link } from "gatsby"
import Agenda from "../components/agenda"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerBg from "../../static/images/biotecnologia/biotecnologia_banner_bg.png"
import HomeBoton from "../components/homeBoton"
import Boton from "../components/boton"
import iconQueES from "../../static/images/biotecnologia/iconos/box_que_es.png"
import iconColores from "../../static/images/biotecnologia/iconos/box_los_colores.png"
import iconArgMundo from "../../static/images/biotecnologia/iconos/box_argentina_mundo.png"
import iconStartUps from "../../static/images/biotecnologia/iconos/box_start_ups.png"
import Footer from "../components/footer"

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
  width: 100%;
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
  margin-top: 15%;
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
  margin: 6rem 2rem;
`
const I = styled.img`
  height: 15rem;
  width: 15rem;
  border-radius: 15px;
`

const BotonBiotecArgCont = styled.div`
  margin-top: 2rem;
  width: 100%;
`

const BiotecDetalleCont = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem 0rem 2rem 0rem;
  background-color: ${props => props.theme.colors.bg2};
  padding: 1rem 0rem 1rem 0rem;
  border-radius: 15px;
`

const Icono = ({ src }) => {
  return <I src={src}></I>
}

const BioLink = ({ to, ...props }) => <Link {...props} to={`${to}#header`} />

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
          <BiotecDetalleCont>
            <IconsCont>
              <BioLink to="que-es">
                <Icono src={iconQueES}></Icono>
              </BioLink>
              <BioLink to="colores">
                <Icono src={iconColores}></Icono>
              </BioLink>
              <BioLink to="argentina-en-el-mundo">
                <Icono src={iconArgMundo}></Icono>
              </BioLink>
              <BioLink to="start-ups">
                <Icono src={iconStartUps}></Icono>
              </BioLink>
            </IconsCont>
            <BotonBiotecArgCont>
              <Boton
                label="Más info sobre Biotecnología en Argentina"
                url="/Catalogo Bios Final - Abril 2, 2021.pdf"
              ></Boton>
            </BotonBiotecArgCont>
          </BiotecDetalleCont>
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
        <Footer></Footer>
      </BiotecnologiaCont>
    </Layout>
  )
}

export default BiotecnologiaPage
