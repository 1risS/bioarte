import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/welcome/WelcomePage_V02.png"

const BienvenidaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  aling-items: center;
  width: 100%;
`

const Presentacion = styled.section`
  display: inherit;
  flex-direction: column;
  height: 40rem;
  justify-content: space-evenly;
`

const HeroImage = styled.img`
  display: inherit;
  width: 100%;
`

const HeroTitle = styled.div`
  display: inherit;
  align-self: center;
  margin: 2rem 2rem 2rem 2rem;
  font-size: 3rem;
  color: white;
`

const Descripcion = styled.section`
  min-height: 100vh;
  width: 60%;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  padding: 0rem;
  color: white;
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 6rem 0rem 6rem;
`

const SectionContent = styled.div`
  display: inherit;
  flex-direction: column;
  justify-content: flex-start;
  text-align: justify;
  margin: 2rem 0rem 2rem 0rem;
  color: white;
`

const SectionTitle = styled.h2`
  font-weight: 400;
  display: inherit;
  text-align: left;
  margin-top: 0rem;
`

const SponsorsSection = styled.section`
  display: inherit;
  justify-content: space-evenly;
  margin: 6rem 3rem 8rem 3rem;
`

const SponsorLogo = styled.img`
  height: 6rem;
`

const Homero = styled.img`
  width: 500px;
  position: absolute;
  left: ${props => (props.right ? "calc(100% - 500px)" : 0)};
  transition-property: left, top;
  transition-delay: 1s;
  transition-duration: 4s;
`

const LinkWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 1rem 0rem 3rem 0rem;
  text-decoration: none;
  color: white;
  font-width: 900;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 900;
`

const IndexPage = () => {
  const [homeroRight, setHomeroRight] = useState(false)

  useEffect(() => {
    setHomeroRight(true)
  }, [])

  return (
    <Layout>
      <SEO title="BioArte" />
      <BienvenidaContainer id="bienvenidaContainer">
        <Descripcion>
          <HeroImage src={logo} />
          <Text>
            <SectionTitle>Párrafo explicando el nombre</SectionTitle>
            <SectionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SectionContent>
            <SectionTitle>
              Párrafo explicando el origen del proyecto
            </SectionTitle>
            <SectionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SectionContent>
            <SectionTitle>Párrafo explicando la experiencia</SectionTitle>
            <SectionContent>
              Landing page a recorrer 4 áreas a explorar, qué hay en cada lugar.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SectionContent>
            <SectionTitle>
              Párrafo explicando cómo navegar el sitio
            </SectionTitle>
            <SectionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </SectionContent>
            <SectionTitle>Call to action - frase de cierre</SectionTitle>
            <SectionContent>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </SectionContent>
          </Text>
          <LinkWrapper>
            <StyledLink to="/pano">IR A LA EXPERIENCIA 360</StyledLink>
          </LinkWrapper>
        </Descripcion>

        {/* <SponsorsSection>
          <SponsorLogo src={logo} />
          <SponsorLogo src={logo} />
          <SponsorLogo src={logo} />
          <SponsorLogo src={logo} />
        </SponsorsSection> */}
      </BienvenidaContainer>
    </Layout>
  )
}

export default IndexPage
