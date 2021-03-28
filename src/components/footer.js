import React from "react"
import styled from "styled-components"
import logo1 from "../../static/images/BIOSlogo.png"

const LogosCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 20rem;
  background-color: #272d28;
`

const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
`

const SecRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  width: 100vw;
  height: 3rem;
  margin-bottom: 1rem;
  margin-top: 3rem;
`

const Logo = styled.img`
  margin: 3rem;
`

const Logo2 = styled.img`
  height: 50px;
  width: 50px;
  margin: 2rem;
`

const Footer = () => {
  return (
    <LogosCont>
      <FirstRow>
        <Logo src={logo1}></Logo>
        <Logo src={logo1}></Logo>
        <Logo src={logo1}></Logo>
        <Logo src={logo1}></Logo>
      </FirstRow>
      <SecRow>
        <Logo2 src={logo1}></Logo2>
        <Logo2 src={logo1}></Logo2>
        <Logo2 src={logo1}></Logo2>
        <Logo2 src={logo1}></Logo2>
        <Logo2 src={logo1}></Logo2>
        <Logo2 src={logo1}></Logo2>
      </SecRow>
    </LogosCont>
  )
}

export default Footer
