import React from "react"
import styled from "styled-components"
import logoMinCiencia from "../../static/images/footer/00_Logo_Ministerio_ECCyT.png"
import logoC3 from "../../static/images/footer/logo C3.jpg"
import logoObjetoA from "../../static/images/footer/logoobjetoanegro.png"
import logoMecenazgo from "../../static/images/footer/Logo-Mecenazgo-2019-1.jpg"
import logoCanada from "../../static/images/footer/1 Canada_Wordmark-col.jpg"
import logoUTN from "../../static/images/footer/2 - utn fr ba.png"
import logoArgenbio from "../../static/images/footer/3- Argenbio 002.png"
import logoFfyb from "../../static/images/footer/4- logo-ffyb.png"
import logoAmega from "../../static/images/footer/5 - Logo AMEGA sin lema.jpg"
import logoNZ from "../../static/images/footer/6 - NZ_BioAg_Purple_RGB.png"

const LogosCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-height: 10rem;
  // background-color: #272d28;
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
  margin-top: 1rem;
`

const Logo = styled.img`
  margin: 2rem;
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
`

const Logo2 = styled.img`
  max-width: 80px;
  max-height: 80px;
  width: auto;
  height: auto;
  margin: 2rem;
  padding-bottom: 1rem;
`

const Footer = () => {
  return (
    <LogosCont>
      <FirstRow>
        <Logo src={logoMinCiencia}></Logo>
        <Logo src={logoC3}></Logo>
        <Logo src={logoObjetoA}></Logo>
        <Logo src={logoMecenazgo}></Logo>
      </FirstRow>
      <SecRow>
        <Logo2 src={logoFfyb}></Logo2>
        <Logo2 src={logoCanada}></Logo2>
        <Logo2 src={logoUTN}></Logo2>
        <Logo2 src={logoArgenbio}></Logo2>
        <Logo2 src={logoAmega}></Logo2>
        <Logo2 src={logoNZ}></Logo2>
      </SecRow>
    </LogosCont>
  )
}

export default Footer
