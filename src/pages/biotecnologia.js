import React from "react"
import Agenda from "../components/agenda"
import Carousel, { ParrafoObra } from "../components/carousel"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerBg from "../../static/images/biotecnologia/biotecnologia_banner_bg.png"
import logoFestival from "../../static/images/BIOSlogo.png"
import fotoObra from "../../static/images/carousel/Displaced_Cantera_1_de-10.png"
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
  font-size: 7rem;
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
const SubSectionCarousel = styled.div`
  max-width: 1164px;
  width: auto;
`

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 3rem;
  font-weight: bold;
  color: black;
  margin: 1.5rem 0;
`

const CarouselCont = styled.div`
  display: flex;
  flex-direction: row;
`

const ImagenEmpresa = styled.img`
  width: 50%;
  height: 49%;
`

const EmpresaCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 576px;
  width: auto;
`
const Botonera = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.0875rem;
`

const BotonAtras = styled.img`
  margin-right: 3rem;
  height: 5em;

  &:hover {
    background-color: #005a32;
    border-radius: 100px;
  }
`

const BotonAdelante = styled.img`
  height: 5em;
  &:hover {
    background-color: #005a32;
    border-radius: 100px;
  }
`

const Slidebar = styled.div`
  height: 0.25rem;
  margin: 1rem;
  background-color: #005a32;
`

const InfoEmpresa = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0rem 0rem 0rem;
`

const InfoEmpCol1 = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 2.125rem;
  justify-content: space-between;
  align-items: flex-start;
`

const InfoEmpCol2 = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

const UbicacionEmpresa = styled.p`
  padding: 0.3rem 1rem 0.3rem 1rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: solid #005a32 0.15rem;
  border-radius: 5rem;
  align-self: start;
  font-size: 0.9rem;
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

const Icono = src => {
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
            <Icono src={logoFestival}></Icono>
            <Icono src={logoFestival}></Icono>
            <Icono src={logoFestival}></Icono>
            <Icono src={logoFestival}></Icono>
            <Icono src={logoFestival}></Icono>
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
