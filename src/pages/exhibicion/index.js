import React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Logo from "../../images/logo192.png"
import { Link } from "gatsby"

const C = styled.div`
  display: flex;
  flex-direction: column;
`

const ExhibicionHeader = styled.div`
  height: 10em;
  width: 100%;
`

const ArtistasContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  width: 60%;
  height: 100%
  margin: 2rem 2rem 2rem 2rem;
  background-color: ${props => props.theme.colors.bg1};
`
const Foto = styled.img`
  display: inherit;
  align-self: center;
  order: 3;
`
const RowContainer = styled.div`
  display: inherit;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin: 3rem 0rem 3rem 0rem;
`

const ExhibicionPage = () => {
  return (
    <Layout>
      <C>
        <SEO title="Excibición" />
        <ExhibicionHeader>EXHIBICION</ExhibicionHeader>
        <ArtistasContainer id="CONTAINER">
          <RowContainer>
            <Link to="detalleArtista1">
              <Foto src={Logo}></Foto>
            </Link>
            <Link to="detalleArtista2">
              <Foto src={Logo}></Foto>
            </Link>
            <Link to="detalleArtista3">
              <Foto src={Logo}></Foto>
            </Link>
          </RowContainer>
          <RowContainer>
            <Link to="detalleArtista4">
              <Foto src={Logo}></Foto>
            </Link>
            <Link to="detalleArtista5">
              <Foto src={Logo}></Foto>
            </Link>
            <Link to="detalleArtista6">
              <Foto src={Logo}></Foto>
            </Link>
          </RowContainer>
        </ArtistasContainer>
      </C>
    </Layout>
  )
}

export default ExhibicionPage
