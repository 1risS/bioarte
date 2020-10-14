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

const TimelineCont = styled.div`
  width: 100%;
`

const LineaDeTiempo = () => {
  return (
    <Container>
      <Header>Hitos principales en el Bioarte</Header>
      <TimelineCont>
        <iframe
          src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1rs7WEGSPGYaGZ3zqiFY5bPqKAbPwRJEWYa3c81mSLzk&font=Default&lang=es&initial_zoom=2&height=650"
          width="100%"
          height="650"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
          frameborder="0"
        ></iframe>
      </TimelineCont>
    </Container>
  )
}

export default LineaDeTiempo
