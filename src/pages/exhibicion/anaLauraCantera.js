import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Chat from "../../components/chat"
import { useCookies } from "react-cookie"
import logoFestival from "../../images/Academia/logo libélula.png"
import fondoHeader from "../../images/DetalleArtistas/Banner_Exhibition_0.png"
import libelula from "../../images/DetalleArtistas/Dragonfly.png"
import globoDialogo from "../../images/DetalleArtistas/SpeechBalloon_0.png"
import fondoObra from "../../../static/images/artists/anaLauraCantera/obra_nueva.jpg"
import flechaSliderIzqNormal from "../../images/DetalleArtistas/Btn-CiircleArrow_Normal.png"
import flechaSliderDerNormal from "../../images/DetalleArtistas/Btn-CiircleArrow_Normal_DER.png"
import flechaSliderIzqPressed from "../../images/DetalleArtistas/Btn-CiircleArrow_Click.png"
import flechaSliderDerPressed from "../../images/DetalleArtistas/Btn-CiircleArrow_Click.png"
import like from "../../../static/images/exhibicion/likelikeRounded.png"
import cv from "../../images/DetalleArtistas/Btn_Cv-Click.png"
import Carousel, { ParrafoObra } from "../../components/carousel"
import { obras } from "../../content/artistas/analauracantera.json"

const DAContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
`
const DAHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 100vh;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 1rem;
  background-image: url(${fondoHeader});
  background-size: cover;
  background-repeat: no-repeat;
  margin-bottom: 7rem;
`
const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: -2rem;
`
const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 30%;
`
const Logo = styled.img`
  height: 3rem;
  width: 3rem;
  margin-right: 3rem;
  align-self: center;
`
const Placeholder1 = styled.img`
  height: 3rem;
  width: 3rem;
  align-self: center;
`
const TimerNavegacionContainer = styled.div``

const TimerNavegacion = styled.div`
  max-width: 150px;
  width: 100%;

  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #fff;

  display: flex;
`

const TiempoContainer = styled.div`
  margin-left: 1em;
  margin-right: 1em;
`

const Horas = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`
const Min = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`

const Seg = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 0.2em 0 0.2em;
`

const CantidadVisitantesContainer = styled.div`
  max-width: 150px;
  width: 100%;
  text-align: center;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #fff;
  margin-left: 10em;
`

const TextoContadores = styled.div`
  font-weight: lighter;
  font-size: 1em;
`

const CantidadVisitantes = styled.div`
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  font-weight: bold;
`
const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 14rem;
  font-weight: bold;
  color: white;
  align-self: center;
  margin-bottom: -0.2em;
  max-height: 750px;
  padding-top: 25vh;
  /*line-height: initial;*/
`
/*
const Subtexto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  font-style: italic;
  font-size: 1.5rem;
  color: white;
  align-self: center;
`
*/

const BannerHubs = styled.img`
  height: 6rem;
  width: 6rem;
  align-self: flex-end;
`
const DAMain = styled.div`
  display: flex;
  flex-direction: column;
`
const BioArtistaContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
`

const LibelulaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 20% !important;
  margin: 4rem;
`

const Libelulaimg = styled.img`
  height: 270px;
  width: 230px;
`

const GloboDialogo = styled.img``

const BioArtista = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  width: 100%;
  align-self: center;
  margin: 0 20% 0 0;
`

const BioHeader = styled.div`
  background-color: #ec6b42;
  color: #fff;
  font-size: 40pt;
  padding-left: 1em;
`

const BioTexto = styled.div`
  background-color: #fff;
  margin-top: 1em;
  padding: 32.25pt 24pt 32.25pt 24pt;
`
const FotoObraContainer = styled.div`
  background-image: url(${fondoObra});
  background-size: 100%;
  background-repeat: no-repeat;
  margin: 1em 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const NombreObra = styled.div`
  font-size: 2em;
  color: #fff;
  background-color: RGBA(0, 0, 0, 0.5);
  width: 600px;
  height: auto;
  margin: 15em auto 0 auto;
  padding: 1em;
`
const Parrafo = styled.div`
  padding-top: 1em;
  font-size: 16pt;
`
const ParrafoFormacion = styled.div`
  padding-top: 1em;
  font-size: 16pt;
  font-style: italic;
  text-decoration: underline;
`

const Titulo = styled.div`
  margin-top: 13px;
  font-weight: semibold;
  font-size: 25pt;
`

const LikeLikeCont = styled.div`
  margin-left: 10rem;
  align-self: flex-end;
  margin: -2rem 4rem 3rem 0rem;
`

const Like = styled.img``

const CVCont = styled.div`
  margin-left: 10rem;
  align-self: flex-end;
  margin: 0rem 0rem 3rem 0rem;
`

const CV = styled.div`
  width: 49px;
  height: 49px;
  background-color: #508f44;
  border-radius: 50px;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #bed6a3;
  }
`

const CVText = styled.div`
  color: #fff;
  font-size: 1.5em;
  padding-top: 0.25em;
`

const TituloBio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`

const Footer = styled.div`
  height: 12rem;
  background-color: #272d28;
`

// ponemos una cookie para saber si le usuarix pasó por acá

const DetalleArtista1 = () => {
  const [obra, setObra] = useState(0)

  const onPreviousClick = () => {
    if (obra > 0) {
      setObra(obra - 1)
    }
  }

  const onNextClick = () => {
    if (obra < obras.length - 1) {
      setObra(obra + 1)
    }
  }

  const datosObra = obras[obra]

  return (
    <Layout>
      <SEO title="Artista" />
      <DAContainer>
        <DAHeaderContainer>
          <NavBar>
            <LogoContainer>
              <Logo src={logoFestival}></Logo>
              {/* <Placeholder1 src={Placeholder}></Placeholder1> */}
            </LogoContainer>
            {/* <TimerNavegacion>
              <TiempoContainer>
                <Horas>01</Horas>
                <TextoContadores>Hs.</TextoContadores>
              </TiempoContainer>
              <TiempoContainer>
                <Min>00</Min>
                <TextoContadores>Min.</TextoContadores>
              </TiempoContainer>
              <TiempoContainer>
                <Seg>00</Seg>
                <TextoContadores>Seg.</TextoContadores>
              </TiempoContainer>
            </TimerNavegacion> */}
            <CantidadVisitantesContainer>
              <CantidadVisitantes>30000</CantidadVisitantes>
              <TextoContadores>Visitantes</TextoContadores>
            </CantidadVisitantesContainer>
          </NavBar>
          <Texto>Bioarte</Texto>
          <LikeLikeCont>
            <Like src={like} />
          </LikeLikeCont>
        </DAHeaderContainer>
        <DAMain>
          <BioArtistaContainer>
            <LibelulaContainer>
              <GloboDialogo src={globoDialogo}></GloboDialogo>
              <Libelulaimg src={libelula}></Libelulaimg>
            </LibelulaContainer>
            <BioArtista>
              <BioHeader>Ana Laura Cantera</BioHeader>
              <BioTexto>
                <TituloBio>
                  <Titulo>Biografía</Titulo>
                  <CVCont>
                    <CV>
                      <CVText>CV</CVText>
                    </CV>
                  </CVCont>
                </TituloBio>
                <ParrafoFormacion>
                  Artista bioelectrónica, investigadora y docente. Magister en
                  Artes Electrónicas graduada con honores en la Universidad
                  Nacional de Tres de Febrero, Licenciada y Profesora en Artes
                  Visuales egresada de la Universidad Nacional de las Artes
                  (UNA).
                </ParrafoFormacion>
                <Parrafo>
                  Ha exhibido sus obras en Argentina, Brasil, Venezuela, Canadá,
                  EEUU, México, Irán, Israel, Mongolia, Francia, España, Perú,
                  Bangladesh, entre otros.
                </Parrafo>
                <Parrafo>
                  Obtuvo la beca Global Community Bio Fellows, desarrollada en
                  el MIT, la Emerging Leaders in the Americas Programm en
                  Concordia University, Montreal, y ha sido parte de numerosas
                  residencias internacionales, como la LAM 360° Land Art
                  Mongolia Biennial. Recientemente ganó el Primer Premio
                  categoría Arte y Robótica del Premio Itaú a las Artes Visuales
                  y la beca de investigación CAPES – PRINT, en la Universidade
                  Federal de Rio de Janeiro. Por su desarrollo de biocueros de
                  yerba mate, ha sido parte del 3D Fashion Week Latinoamérica
                  desarrollado en Perú.
                </Parrafo>
                <Parrafo>
                  Es co-fundadora de Mycocrea - Laboratorio de biomateriales,
                  del colectivo de arte y biorobótica Robotícula, del colectivo
                  Ecoestéticas y del Laboratorio de Geopoéticas Subalternas. Se
                  desempeña como docente, investigadora y coordinadora de la
                  Maestría en Tecnología y Estética de las Artes Electrónicas de
                  la UNTREF.
                </Parrafo>
              </BioTexto>
            </BioArtista>
          </BioArtistaContainer>
          <FotoObraContainer>
            <NombreObra>INHALACIONES TERRITORIALES</NombreObra>
          </FotoObraContainer>

          <Carousel
            ciudadPais={datosObra.ciudadPais}
            fotoObra={datosObra.fotoObra}
            tituloObra={datosObra.tituloObra}
            obraURL={datosObra.obraURL}
            onPreviousClick={onPreviousClick}
            onNextClick={onNextClick}
            count={obras.length}
            value={obra}
          >
            {datosObra.parrafos.map(parrafo => (
              <ParrafoObra>{parrafo}</ParrafoObra>
            ))}
          </Carousel>
        </DAMain>
      </DAContainer>
      <Footer></Footer>
      <Chat />
    </Layout>
  )
}

export default DetalleArtista1
