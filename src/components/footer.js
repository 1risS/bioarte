import React from "react"
import styled from "styled-components"
import logo1 from "../../static/images/BIOSlogo.png"

const FooterCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  background-color: #272d28;
`

const Logo = styled.img`
  margin: 4rem;
`

const Footer = () => {
  return (
    <FooterCont>
      <Logo src={logo1}></Logo>
      <Logo src={logo1}></Logo>
      <Logo src={logo1}></Logo>
      <Logo src={logo1}></Logo>
    </FooterCont>
  )
}

export default Footer
