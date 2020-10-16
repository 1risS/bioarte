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
  width: 55%;
  margin: 10rem 0rem 4rem 0rem;
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
  width: 70%;
  justify-content: center;
  background-color: ${props => props.theme.colors.bg1};
`

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily};
  font-size: 3rem;
  font-weight: bold;
  color: black;
`

const CarouselCont = styled.div`
  display: flex;
  flex-direction: row;
  margin 3rem;
`

const ImagenEmpresa = styled.img``

const EmpresaCont = styled.div`
  display: flex;
  flex-direction: column;
`
const Botonera = styled.div`
  display: flex;
  flex-direction: row;
`

const BotonAtras = styled.img``

const BotonAdelante = styled.img``

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
          <Title>Empresas</Title>
          <CarouselCont>
            <ImagenEmpresa src={carousel} />
            <EmpresaCont>
              <Botonera>
                <BotonAtras src={botonAtras}></BotonAtras>
                <BotonAdelante src={botonAdelante}></BotonAdelante>
              </Botonera>
            </EmpresaCont>
          </CarouselCont>
        </SectionCarousel>
      </BiotecnologiaCont>
    </Layout>
  )
}

export default BiotecnologiaPage
