import React from "react"
import styled from "styled-components"
import logo from "../images/logo192.png"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const DetalleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Header = styled.div`
  display: inherit;
  flex-direction: column;
  align-self: center;
  width: 60%;
  margin: 4rem 2rem 4rem 2rem;
`

const ImgContainer = styled.div`
  border-radius: 50px;
  align-self: center;
  padding: 5em 3em 5em 3em;
`

const NombreArtista = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: ${props => props.theme.fontSizes.h1};
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.oranges[0]};
  padding: 2em 2em 2em 2em;
`

const Fecha = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.h2v};
`

const Tipo = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.h2};
`

const Inscripcion = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.h2};
`

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  width: 60%;
`

const TituloActividad = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.h1};
`

const DescripcionActividad = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.h4};
  font-weight: ${props => props.theme.fontWeights.light};

  strong {
    font-weight: ${props => props.theme.fontWeights.semiBold};
  }
  em {
    font-style: italic;
  }
`

const Talk = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark
  const {
    title,
    artistName,
    artistPhotoUrl,
    datetime,
    type,
    inscriptionUrl,
  } = frontmatter

  return (
    <Layout>
      <DetalleContainer id="detalleContainer">
        <Header id="header">
          <ImgContainer>
            <img src={artistPhotoUrl || logo} alt="fotoArtista" />
          </ImgContainer>
          <NombreArtista>{artistName}</NombreArtista>
          <Info>
            <Fecha>{datetime}</Fecha>
            <Tipo>{type}</Tipo>
            <Inscripcion>{inscriptionUrl}</Inscripcion>
          </Info>
        </Header>
        <Contenido>
          <TituloActividad>{title}</TituloActividad>
          <DescripcionActividad dangerouslySetInnerHTML={{ __html: html }} />
        </Contenido>
      </DetalleContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        artistName
        artistPhotoUrl
        type
        inscriptionUrl
        datetime
      }
    }
  }
`

export default Talk
