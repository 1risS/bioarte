import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Chat from "../../components/chat"
import { useCookies } from "react-cookie"
import logoFestival from "../../images/Academia/logo libélula.png"
import Placeholder from "../../../static/images/Icon-Placeholder-1.png"
import bannerHubs from "../../images/Academia/Mozilla Hubs.png"
import fondoHeader from "../../images/DetalleArtistas/Banner_Exhibition_0.png"
import libelula from "../../images/DetalleArtistas/Dragonfly.png"
import fondoObra from "../../images/DetalleArtistas/ObraExhibicion_Cantera.png"
import flechaSlider from "../../images/DetalleArtistas/Btn-CiircleArrow_Normal.png"
import fotoObra from "../../images/DetalleArtistas/Displaced_Cantera_1_de-10.png"
import like from "../../../static/images/exhibicion/likelikeRounded.png"
import cv from "../../images/DetalleArtistas/Btn_Cv-Click.png"

const DAContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
`
const DAHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 45rem;
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
  justify-content: space-between;
  padding: 1rem;
`

const LibelulaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20% !important;
  margin: 4rem;
`

const Libelulaimg = styled.img`
  height: 249px;
  width: 208px;
`

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
  font-size: 2em;
  padding-left: 1em;
`

const BioTexto = styled.div`
  background-color: #fff;
  margin-top: 1em;
  padding: 1em 2em;
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
  font-size: 16px;
`
const Titulo = styled.div`
  margin-top: 13px;
  font-weight: bold;
`

const DetalleObraContainer = styled.div`
  display: flex;
  padding: 1em 0;
`

const MargenIzquierdo = styled.div`
  margin-left: auto;
  width: 20%;
`
const MargenDerecho = styled.div`
  margin-right: auto;
  width: 20%;
`
const DetalleObra = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  max-width: 1152px;
  margin: 0 20% 0 20%;
`

const DescripcionContainer = styled.div`
  padding: 1em;
  align-content: flex-start;
  text-align: justify;
`

const FlechaSlider = styled.img`
  height: 80px;
  width: 80px;
`
const FotoObra = styled.img`
  padding: 2rem 0 0 0;
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

const CV = styled.img``

const TituloBio = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`
// ponemos una cookie para saber si le usuarix pasó por acá

const DetalleArtista1 = () => {
  return (
    <Layout>
      <SEO title="Artista" />
      <DAContainer>
        <DAHeaderContainer>
          <NavBar>
            <LogoContainer>
              <Logo src={logoFestival}></Logo>
              <Placeholder1 src={Placeholder}></Placeholder1>
            </LogoContainer>
            <TimerNavegacion>
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
            </TimerNavegacion>
            <CantidadVisitantesContainer>
              <CantidadVisitantes>30000</CantidadVisitantes>
              <TextoContadores>Visitantes</TextoContadores>
            </CantidadVisitantesContainer>
          </NavBar>
          <Texto>Bioarte</Texto>
          <LikeLikeCont>
            <Like src={like} />
          </LikeLikeCont>
          {/* <BannerHubs src={bannerHubs}></BannerHubs> */}
        </DAHeaderContainer>
        <DAMain>
          <BioArtistaContainer>
            <LibelulaContainer>
              <Libelulaimg src={libelula}></Libelulaimg>
            </LibelulaContainer>
            <BioArtista>
              <BioHeader>Ana Laura Cantera</BioHeader>
              <BioTexto>
                <TituloBio>
                  <Titulo>Biografía</Titulo>
                  <CVCont>
                    <CV src={cv} />
                  </CVCont>
                </TituloBio>
                <Parrafo>
                  Artista bioelectrónica, investigadora y docente. Magister en
                  Artes Electrónicas graduada con honores en la Universidad
                  Nacional de Tres de Febrero, Licenciada y Profesora en Artes
                  Visuales egresada de la Universidad Nacional de las Artes
                  (UNA). En sus producciones artísticas trabaja con los
                  conceptos de naturaleza y territorio como interfaz mediante
                  electrónica y organismos no-humanos. Obtuvo recientemente la
                  beca Global Community Bio Fellows, desarrollada en el MIT y la
                  ELAP Emerging Leaders in the Americas Program (Concordia
                  University-Montreal). Es co-fundadora de Mycocrea -
                  Laboratorio de biomateriales y del colectivo de arte y
                  biorobótica Robotícula, junto a Demián Ferrari.
                </Parrafo>
                <Parrafo>
                  Ha exhibido sus obras en Argentina, Brasil, Venezuela, Canadá,
                  México, Irán, Israel, Mongolia, Francia, España, entre otros.
                  Se desempeña como docente y coordinadora de la Maestría en
                  Tecnología y Estética de las Artes Electrónicas de la UNTREF.
                </Parrafo>
                <Parrafo>
                  Artista bioelectrónica, investigadora y docente. Magister en
                  Artes Electrónicas graduada con honores en la Universidad
                  Nacional de Tres de Febrero, Licenciada y Profesora en Artes
                  Visuales egresada de la Universidad Nacional de las Artes
                  (UNA). En sus producciones artísticas trabaja con los
                  conceptos de naturaleza y territorio como interfaz mediante
                  electrónica y organismos no-humanos. Obtuvo recientemente la
                  beca Global Community Bio Fellows, desarrollada en el MIT y la
                  ELAP Emerging Leaders in the Americas Program (Concordia
                  University-Montreal). Es co-fundadora de Mycocrea -
                  Laboratorio de biomateriales y del colectivo de arte y
                  biorobótica Robotícula, junto a Demián Ferrari.
                </Parrafo>
                <Parrafo>
                  Ha exhibido sus obras en Argentina, Brasil, Venezuela, Canadá,
                  México, Irán, Israel, Mongolia, Francia, España, entre otros.
                  Se desempeña como docente y coordinadora de la Maestría en
                  Tecnología y Estética de las Artes Electrónicas de la UNTREF.
                </Parrafo>
              </BioTexto>
            </BioArtista>
          </BioArtistaContainer>
          <FotoObraContainer>
            <NombreObra>
              NOMBRE DE LA MUESTRA CON UN MAXIMO DE 50 CARACTERES
            </NombreObra>
          </FotoObraContainer>

          <DetalleObraContainer>
            <MargenIzquierdo>
              {/* <FlechaSlider src={flechaSlider}></FlechaSlider> */}
            </MargenIzquierdo>
            <DetalleObra>
              <FotoObra src={fotoObra} height="50%"></FotoObra>
              <DescripcionContainer>
                <Parrafo>
                  Displaced, es una instalación robótica sobre los
                  desplazamientos vinculados a los desastres climáticos, a las
                  migraciones forzadas, los destinos inciertos y la
                  incertidumbre. Desde 2009, se estima que una persona por
                  segundo es obligada a abandonar su hábitat por fenómenos
                  naturales causados por el cambio climático: inundaciones,
                  sequías, terremotos, tsunamis, desmontes, minería y
                  contaminación de recursos hídricos.
                </Parrafo>
                ​
                <Parrafo>
                  El proyecto fue realizado mediante la construcción de una
                  estructura de piezas impresas en 3d en PLA, servomotores,
                  arduino, componentes electrónicos,etc. Fue revestido en
                  bioplásticos realizados con yerba mate, remolacha, porotos y
                  pelo humano.
                </Parrafo>
                <Parrafo>
                  El proyecto fue realizado mediante la construcción de una
                  estructura de piezas impresas en 3d en PLA...
                </Parrafo>
              </DescripcionContainer>
            </DetalleObra>
            <MargenDerecho>
              {/* <FlechaSlider src={flechaSlider}></FlechaSlider> */}
            </MargenDerecho>
          </DetalleObraContainer>
        </DAMain>
      </DAContainer>
      <Chat />
    </Layout>
  )
}

export default DetalleArtista1
