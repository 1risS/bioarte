// acá va la implementación de una línea de tiempo

import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Header = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  display: inherit;
`

const Subtitulo = styled.h2``

const LineaDeTiempo = () => {
  return (
    <Container>
      <Header>Hitos principales en el Bioarte</Header>
      <Subtitulo>(Acá hay que implementar una línea de tiempo)</Subtitulo>
    </Container>
  )
}

export default LineaDeTiempo
