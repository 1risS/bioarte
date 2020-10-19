import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../../static/images/welcome/WelcomePage_V02.png"

const BienvenidaContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background-color: black;
  background-image: url(${logo});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
`
const LinkWrapper = styled.div``

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 900;
`

const ContenidoIzqContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const ContDerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`

const DivDer = styled.div`
  margin: 0rem 1rem 4rem 23rem;
  opacity: 0.1;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
`

const DivDerEmpty = styled.div`
  height: 33%;
`

const DivIzq = styled.div`
  margin: 1rem 25rem 3rem 1rem;
  opacity: 0.1;
  transition: 1s;
  &:hover {
    opacity: 1;
  }
`

const DivIzqEmpty = styled.div`
  height: 25%;
`

const Title = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
`

const Desc = styled.p`
  font-family: ${props => props.theme.fontFamily};
  color: white;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="BioArte" />
      <BienvenidaContainer id="bienvenidaContainer">
        <ContenidoIzqContainer>
          <DivIzqEmpty></DivIzqEmpty>
          <DivIzq>
            <Title>Párrafo explicando el origen del proyecto</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Desc>
          </DivIzq>
          <DivIzq>
            <Title>Párrafo explicando la estructura del sitio</Title>
            <Desc>
              Landing a recorrer, 4 áreas a explorar, qué hay en cada lugar.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>
          </DivIzq>
        </ContenidoIzqContainer>
        <ContDerContainer>
          <DivDerEmpty></DivDerEmpty>
          <DivDer>
            <Title>Párrafo explicando el nombre</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Desc>
          </DivDer>

          <DivDer>
            <Title>Párrafo explicando cómo navegar</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </Desc>
          </DivDer>
          <DivDer>
            <Title>Call to action - frase de cierre</Title>
            <Desc>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Desc>
            <LinkWrapper>
              <StyledLink to="/pano">IR A LA EXPERIENCIA 360</StyledLink>
            </LinkWrapper>
          </DivDer>
        </ContDerContainer>
      </BienvenidaContainer>
    </Layout>
  )
}

export default IndexPage
