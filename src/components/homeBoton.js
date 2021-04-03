import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import expNormal from "../../static/images/welcome/BtnWelcome_Lab-Normal.png"
import expHover from "../../static/images/welcome/BtnWelcome_Lab-Hover.png"
import expActive from "../../static/images/welcome/BtnWelcome_Lab-Click.png"

const Exp = styled.div`
  display: block;
  height: 150px;
  width: 150px;
  background-image: url(${expNormal});
  transition: 0.35s;

  &:hover {
    background-image: url(${expHover});
  }

  &:active {
    background-image: url(${expActive});
  }
`

const StyledLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
`

const Ingresar = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-weight: 500;
  font-size: 20px;
`

const HomeBoton = ({ showText = false }) => {
  return (
    <StyledLink href="/pano">
      <Exp />
      {showText && <Ingresar>INGRESAR</Ingresar>}
    </StyledLink>
  )
}

export default HomeBoton
