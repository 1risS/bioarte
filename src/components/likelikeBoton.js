import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import expNormal from "../../static/images/exhibicion/Btn_LikeLike-Normal.png"
import expHover from "../../static/images/exhibicion/Btn_LikeLike-Hover.png"
import expActive from "../../static/images/exhibicion/Btn_LikeLike-Click.png"

const Exp = styled.div`
  display: block;
  height: 150px;
  width: 150px;
  background-image: url(${expNormal});
  background-size: cover;

  &:hover {
    background-image: url(${expHover});
  }

  &:active {
    background-image: url(${expActive});
  }
`

const LinkWrapper = styled.div``

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 900;
`

const likelikeBoton = () => {
  return (
    <LinkWrapper>
      <StyledLink to="http://likelike.glitch.me/" target="_blank">
        <Exp></Exp>
      </StyledLink>
    </LinkWrapper>
  )
}

export default likelikeBoton
