import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useCookies } from "react-cookie"
import logoFestival from "../../images/Academia/logo libélula.png"
import Placeholder from "../../../static/images/Icon-Placeholder-1.png"
import bannerHubs from "../../images/Academia/Mozilla Hubs.png"
import fondoHeader from "../../images/DetalleArtistas/Banner_Exhibition_0.png"
import libelula from "../../images/DetalleArtistas/Dragonfly.png"
import fondoObra from "../../images/DetalleArtistas/ObraExhibicion_Cantera.png"
import flechaSlider from "../../images/DetalleArtistas/Btn-CiircleArrow_Normal.png"
import fotoObra from "../../images/DetalleArtistas/Displaced_Cantera_1_de-10.png"

const DAContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
`
const DAHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 750px;
  flex-direction: column;
  padding-left: 3rem;
  padding-right: 1rem;
  background-image: url(${fondoHeader});
  background-size: 100%;
  background-repeat: no-repeat;
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
const ContadoresContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-basis: 150rem;
`
const HorasNavegacion = styled.div`
  width: 150px;
  border-radius: 8px;
  text-align: center;
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #414141;
  font-size: 1rem;
`

const CantidadVisitantes = styled.div`
  width: 150px;
  border-radius: 8px;
  text-align: center;
  background-color: #dbe6d3;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  color: #414141;
  font-size: 1rem;
`

const Texto = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 14rem;
  font-weight: bold;
  color: white;
  align-self: center;

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
  justify-content: space-around;
  margin-top: 1em;
  margin-bottom: 1em;
`

const LibelulaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 20%;
`

const Libelulaimg = styled.img`
  height: 269px;
  width: 228px;
  margin-left: 2em;
  margin-bottom: 2em;
`

const BioArtista = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1152px;
  width: 100%;
  align-self: center;
`

const ColumnaCV = styled.div`
  width: 20%;
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
`
const Titulo = styled.div`
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
  max-width: 1152px;
`

const DescripcionContainer = styled.div`
  padding: 1em;
  text-align: justify;
`

const FlechaSlider = styled.img`
  height: 80px;
  width: 80px;
`
const FotoObra = styled.img``

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
            <ContadoresContainer>
              <HorasNavegacion>1950</HorasNavegacion>
              <CantidadVisitantes>30000</CantidadVisitantes>
            </ContadoresContainer>
          </NavBar>
          <Texto>Bioarte</Texto>
          <BannerHubs src={bannerHubs}></BannerHubs>
        </DAHeaderContainer>
        <DAMain>
          <BioArtistaContainer>
            <LibelulaContainer>
              <Libelulaimg src={libelula}></Libelulaimg>
            </LibelulaContainer>
            <BioArtista>
              <BioHeader>Ana Laura Cantera</BioHeader>
              <BioTexto>
                <Titulo>Biografía:</Titulo>
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
            <ColumnaCV>CV</ColumnaCV>
          </BioArtistaContainer>
          <FotoObraContainer>
            <NombreObra>
              NOMBRE DE LA MUESTRA CON UN MAXIMO DE 50 CARACTERES
            </NombreObra>
          </FotoObraContainer>

          <DetalleObraContainer>
            <MargenIzquierdo>
              <FlechaSlider src={flechaSlider}></FlechaSlider>
            </MargenIzquierdo>
            <DetalleObra>
              <FotoObra src={fotoObra}></FotoObra>
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
                <Parrafo>
                  La obra, es un robot bípedo con morfología y comportamiento
                  inspirado en un pájaro, realizado con piel de biomateriales.
                  Su caminar es forzado, difícil, pero constante. Se desplaza en
                  territorios nuevos conociéndolos y absorbiendo sus
                  características, dejando atrás su historia y rutina y
                  debiéndose adaptar a los nuevos cambios para sobrevivir. El
                  organismo evita amenazas, y por lo tanto en su caminar se
                  distancia de los humanos que lo llevaron a la
                  reterritorialización.
                </Parrafo>
                ​
                <Parrafo>
                  El proyecto fue realizado mediante la construcción de una
                  estructura de piezas impresas en 3d en PLA, servomotores,
                  arduino, componentes electrónicos,etc. Fue revestido en
                  bioplásticos realizados con yerba mate, remolacha, porotos y
                  pelo humano.
                </Parrafo>
              </DescripcionContainer>
            </DetalleObra>
            <MargenDerecho>
              <FlechaSlider src={flechaSlider}></FlechaSlider>
            </MargenDerecho>
          </DetalleObraContainer>
        </DAMain>
      </DAContainer>
    </Layout>
  )
}

export default DetalleArtista1
