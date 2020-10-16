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
  margin-top: 50vh;
  /*line-height: initial;*/
`

const AgendaCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 10rem 0rem 4rem 0rem;
  max-width: 1164px;
  width: 100%;
`

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 2rem 2rem 2rem;
  background-color: ${props => props.theme.colors.bg1};
`

const SectionCarousel = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg1};
`
const SubSectionCarousel = styled.div`
  max-width: 1164px;
  width: 100%;
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

const ImagenEmpresa = styled.img``

const EmpresaCont = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 576px;
  width: 100%;
`
const Botonera = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.0875rem;
`

const BotonAtras = styled.img`
  margin-right: 3rem;
`

const BotonAdelante = styled.img``

const Slidebar = styled.div`
  height: 0.25rem;
  margin: 2rem;
  background-color: #005a32;
`

const InfoEmpresa = styled.div`
  width: 100%;
  height: 179px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: ;
`

const InfoEmpCol1 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2.125rem;
  justify-content: center;
`

const InfoEmpCol2 = styled.div`
  display: flex;
  justify-content: flex-end;
  max-width: 217px;
  width: 100%;
`

const UbicacionEmpresa = styled.p`
  padding: 0.5rem 1.5rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: solid #005a32 0.15rem;
  border-radius: 5rem;
  align-self: start;
`

const NombreEmpresa = styled.h1`
  font-size: 2em;
`

const InfoCol2 = styled.p`
  padding-top: 1.5rem;
  font-size: 2rem;
  font-weight: bold;
  color: #9a9b9a;
`

const DetalleEmpresa = styled.div`
  height: 240px;
`

const TextoDetalleEmpresa = styled.p`
  font-family: inherit;
  padding: 30px 40px;
  font-size: 1.35em;
`

const Footer = styled.section`
  height: 300px;
  max-width: 1164px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`

const LogosFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 3rem;
`

const LogoEmpresaCont = styled.img`
  margin: auto 0;
  display: flex;
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
            <ContadoresContainer>
              <HorasNavegacion>1950</HorasNavegacion>
              <CantidadVisitantes>30000</CantidadVisitantes>
            </ContadoresContainer>
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
                    <NombreEmpresa>Biogénesis Bagó</NombreEmpresa>
                  </InfoEmpCol1>
                  <InfoEmpCol2>
                    <InfoCol2> 03 - 36 </InfoCol2>
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
            <LogoEmpresaCont src={logoEmp1}></LogoEmpresaCont>
            <LogoEmpresaCont src={logoEmp2}></LogoEmpresaCont>
            <LogoEmpresaCont src={logoEmp3}></LogoEmpresaCont>
            <LogoEmpresaCont src={logoEmp4}></LogoEmpresaCont>
            <LogoEmpresaCont src={logoEmp5}></LogoEmpresaCont>
            <LogoEmpresaCont src={logoEmp6}></LogoEmpresaCont>
            <LogoEmpresaCont src={logoEmp7}></LogoEmpresaCont>
          </LogosFooter>
        </Footer>
      </BiotecnologiaCont>
    </Layout>
  )
}

export default BiotecnologiaPage
