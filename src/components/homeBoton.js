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

  &:hover {
    background-image: url(${expHover});
  }

  &active {
    background-image: url(${expActive});
  }
`

const LinkWrapper = styled.div``

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 900;
`

const HomeBoton = () => {
  return (
    <LinkWrapper>
      <StyledLink to="/pano">
        <Exp></Exp>
      </StyledLink>
    </LinkWrapper>
  )
}

export default HomeBoton
