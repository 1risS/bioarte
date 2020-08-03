import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo512.png"

const BienvenidaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
`

const Presentacion = styled.section`
  display: inherit;
  flex-direction: column;
  height: 40rem;
  justify-content: space-evenly;
`

const HeroImage = styled.img`
  display: inherit;
  width: 20%;
  align-self: center;
`

const HeroTitle = styled.div`
  display: inherit;
  align-self: center;
  margin: 2rem 2rem 2rem 2rem;
  font-size: ${props => props.theme.fontSizes.h1};
`

const Descripcion = styled.section`
  min-height: 100vh;
  width: 60%;
  background-color: ${props => props.theme.colors.bg1};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 2rem 2rem 2rem 2rem;
`

const SectionContent = styled.div`
  display: inherit;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem 2rem 2rem;
`

const SectionTitle = styled.h2`
  font-weight: 400;
  display: inherit;
  align-self: center;
`

const SponsorsSection = styled.section`
  display: inherit;
  justify-content: space-evenly;
  margin: 3rem 3rem 3rem 3rem;
`

const SponsorLogo = styled.img`
  height: 6rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title="BioArte" />
    <BienvenidaContainer id="bienvenidaContainer">
      <Presentacion>
        <HeroImage src={logo} />
        <HeroTitle> FESTIVAL BIOARTE </HeroTitle>
      </Presentacion>

      <Descripcion>
        <SectionTitle>Párrafo explicando el nombre</SectionTitle>
        <SectionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionContent>
        <SectionTitle>Párrafo explicando el origen del proyecto</SectionTitle>
        <SectionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionContent>
        <SectionTitle>
          Párrafo explicando la experiencia <br></br>( landing page a recorrer
          <br />4 áreas a explorar, qué hay en cada lugar)
        </SectionTitle>
        <SectionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionContent>
        <SectionTitle>Párrafo explicando cómo navegar el sitio</SectionTitle>
        <SectionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </SectionContent>
        <SectionTitle>Call to action - frase de cierre</SectionTitle>
        <SectionContent>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </SectionContent>
        <a href="http://localhost:8000/pano">IR A LA EXPERIENCIA 360</a>
      </Descripcion>

      <SponsorsSection>
        <SponsorLogo src={logo} />
        <SponsorLogo src={logo} />
        <SponsorLogo src={logo} />
        <SponsorLogo src={logo} />
      </SponsorsSection>
    </BienvenidaContainer>
  </Layout>
)

export default IndexPage
