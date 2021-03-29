import React from "react"
import styled from "styled-components"

const BotonCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 6rem 6rem 6rem;
`
const Botonstyled = styled.a`
  display: block;
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: 900;
  font-size: 30px;
  color: white;
  background-color: #508f44;
  border-radius: 5px;
  width: 55% !important;
  padding: 0.5rem;
  text-decoration: none;

  &:hover {
    background-color: #93bb66;
    cursor: pointer;
  }
`

const Boton = ({ label, url }) => {
  return (
    <BotonCont>
      <Botonstyled href={url} target="_blank">
        {" "}
        {label}{" "}
      </Botonstyled>
    </BotonCont>
  )
}

export default Boton
