import React from "react"
import Agenda from "../components/agenda"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import bannerBg from "../../static/images/biotecnologia/biotecnologia_banner_bg.png"
import logoFestival from "../images/Academia/logo libélula.png"
import Placeholder from "../../static/images/Icon-Placeholder-1.png"
import carousel from "../../static/images/biotecnologia/empresa.jpg"
import botonAdelante from "../../static/images/biotecnologia/flechita_der.png"
import botonAtras from "../../static/images/biotecnologia/flechita_izq.png"
import logoEmp1 from "../../static/images/biotecnologia/logoEmpresas/arbolito.png"
import logoEmp2 from "../../static/images/biotecnologia/logoEmpresas/argenomics.png"
import logoEmp3 from "../../static/images/biotecnologia/logoEmpresas/bago.png"
import logoEmp4 from "../../static/images/biotecnologia/logoEmpresas/biotenk.png"
import logoEmp5 from "../../static/images/biotecnologia/logoEmpresas/ecofertil.png"
import logoEmp6 from "../../static/images/biotecnologia/logoEmpresas/gema.png"
import logoEmp7 from "../../static/images/biotecnologia/logoEmpresas/nitragin.png"

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
const TimerNavegacionContainer = styled.div``

const TimerNavegacion = styled.div`
  max-width: 150px;
  width: 100%;

  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #fff;

  display: flex;
`

const TiempoContainer = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`

const Horas = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`
const Min = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`

const Seg = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`

const CantidadVisitantesContainer = styled.div`
  max-width: 150px;
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
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
  font-size: 7rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-top: 50vh;
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

const NombreEmpresa = styled.h1`
  font-size: 1.6rem;
  margin: 0.5rem 0rem 2rem 2.5rem;
  width: 100%;
`

const InfoCol2 = styled.p`
  padding-top: 1rem;
  font-size: 1.5rem;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: #9a9b9a;
`

const DetalleEmpresa = styled.div`
  height: 240px;
`

const TextoDetalleEmpresa = styled.p`
  font-family: inherit;
  padding: 1.5em 1.7em;
  font-size: 0.9em;
`

const Footer = styled.section`
  // height: 300px;
  // max-width: 1164px;
  width: 100%;
  margin: 0em auto;
  display: flex;
  justify-content: center;
`

const LogosFooter = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: auto;
  padding-bottom: 1rem;
  background: linear-gradient(
    90deg,
    rgba(231, 232, 230, 1) 0%,
    rgba(231, 232, 230, 1) 75%,
    rgba(196, 215, 219, 1) 100%
  );
`

const LogoEmpresaCont = styled.div`
  margin: auto 0;
  display: flex;
`

const LogoEmpresa = styled.img`
  height: 6.5em;
`

const HoverDiv = styled.div`
  position: absolute;
  height: 6.5em;
  width: 6.5em;
  background-color: rgba(0, 0, 0, 0);
  border-radius: 100px;

  &:hover {
    background-color: rgba(0, 90, 50, 0.5);
  }
`

const BiotecnologiaPage = () => {
  return (
    <Layout>
      <SEO title="Biotecnología" />
      <BiotecnologiaCont>
        <BiotecnologiaHeaderCont>
          <NavBar>
            <LogoContainer>
              <Logo src={logoFestival}></Logo>
              <Placeholder1 src={Placeholder}></Placeholder1>
            </LogoContainer>
            <TimerNavegacion>
              <TiempoContainer>
                <Horas>01</Horas>
                <TextoContadores>Hs.</TextoContadores>
              </TiempoContainer>
              <TiempoContainer>
                <Min>00</Min>
                <TextoContadores>Min.</TextoContadores>
              </TiempoContainer>
              <TiempoContainer>
                <Seg>00</Seg>
                <TextoContadores>Seg.</TextoContadores>
              </TiempoContainer>
            </TimerNavegacion>
            <CantidadVisitantesContainer>
              <CantidadVisitantes>30000</CantidadVisitantes>
              <TextoContadores>Visitantes</TextoContadores>
            </CantidadVisitantesContainer>
          </NavBar>
          <Texto>Biotecnología</Texto>
        </BiotecnologiaHeaderCont>
        <Section>
          <AgendaCont>
            <Agenda />
          </AgendaCont>
        </Section>
        <SectionCarousel>
          <SubSectionCarousel>
            <Title>Empresas</Title>
            <CarouselCont>
              <ImagenEmpresa src={carousel} />
              <EmpresaCont>
                <Botonera>
                  <BotonAtras src={botonAtras}></BotonAtras>
                  <BotonAdelante src={botonAdelante}></BotonAdelante>
                </Botonera>
                <Slidebar></Slidebar>
                <InfoEmpresa>
                  <InfoEmpCol1>
                    <UbicacionEmpresa>Buenos Aires</UbicacionEmpresa>
                    <InfoCol2> 03 - 36 </InfoCol2>
                  </InfoEmpCol1>
                  <InfoEmpCol2>
                    <NombreEmpresa>Biogénesis Bagó</NombreEmpresa>
                  </InfoEmpCol2>
                </InfoEmpresa>
                <DetalleEmpresa>
                  <TextoDetalleEmpresa>
                    Artista bioelectrónica, investigadora y docente. Magister en
                    Artes Electrónicas graduada con honores en la Universidad
                    Nacional de Tres de Febrero, Licenciada y Profesora en Artes
                    Visuales egresada
                  </TextoDetalleEmpresa>
                </DetalleEmpresa>
              </EmpresaCont>
            </CarouselCont>
          </SubSectionCarousel>
        </SectionCarousel>
        <Footer>
          <LogosFooter>
            <LogoEmpresaCont>
              <LogoEmpresa src={logoEmp1}></LogoEmpresa>
              <HoverDiv></HoverDiv>
            </LogoEmpresaCont>
            <LogoEmpresaCont>
              <LogoEmpresa src={logoEmp2}></LogoEmpresa>
              <HoverDiv></HoverDiv>
            </LogoEmpresaCont>
            <LogoEmpresaCont>
              <LogoEmpresa src={logoEmp3}></LogoEmpresa>
              <HoverDiv></HoverDiv>
            </LogoEmpresaCont>
            <LogoEmpresaCont>
              <LogoEmpresa src={logoEmp4}></LogoEmpresa>
              <HoverDiv></HoverDiv>
            </LogoEmpresaCont>
            <LogoEmpresaCont>
              <LogoEmpresa src={logoEmp5}></LogoEmpresa>
              <HoverDiv></HoverDiv>
            </LogoEmpresaCont>
            <LogoEmpresaCont>
              <LogoEmpresa src={logoEmp6}></LogoEmpresa>
              <HoverDiv></HoverDiv>
            </LogoEmpresaCont>
            <LogoEmpresaCont>
              <LogoEmpresa src={logoEmp7}></LogoEmpresa>
              <HoverDiv></HoverDiv>
            </LogoEmpresaCont>
          </LogosFooter>
        </Footer>
      </BiotecnologiaCont>
    </Layout>
  )
}

export default BiotecnologiaPage
