import React from "react"
import styled from "styled-components"

const BotonCont = styled.div`
  display: flexbox;
  justify-content: center;
  align-items: center;
  margin: 4rem;
`
const Botonstyled = styled.div`
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 900;
  font-size: 30px;
  color: white;
  background-color: #508f44;
  border-radius: 5px;
  width: 40%;

  &:hover {
    background-color: #93bb66;
  }
`

const Boton = ({ label, url }) => {
  const onClick = () => {
    window.location.href = url
  }

  return (
    <BotonCont>
      <Botonstyled onClick={onClick}> {label} </Botonstyled>
    </BotonCont>
  )
}

export default Boton
