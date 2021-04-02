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
  text-decoration: none;
  color: white;
  font-weight: 900;
`

const Ingresar = styled.div`
  font-family: ${props => props.theme.fontFamily};
  color: white;
  font-weight: bold;
  font-size: 30px;
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
