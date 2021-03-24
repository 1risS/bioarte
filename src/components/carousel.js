import React, { useState } from "react"
import styled from "styled-components"
import flechaSliderIzqNormal from "../../static/images/carousel/Btn-CiircleArrow_Normal.png"
import flechaSliderDerNormal from "../../static/images/carousel/Btn-CiircleArrow_Normal_DER.png"
import flechaSliderIzqPressed from "../../static/images/carousel/Btn-CircleArrow_Click_Left.png"
import flechaSliderDerPressed from "../../static/images/carousel/Btn-CiircleArrow_Click.png"

const DetalleObraContainer = styled.div`
  display: flex;
  padding: 1em 0;
  margin-bottom: 3rem;
`

const MargenIzquierdo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  width: 20%;
`
const MargenDerecho = styled.div`
  margin-right: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 20%;
`
const DetalleObra = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
  max-width: 60%;
  margin: 0;
  background-color: white;
  min-height: 880px;
`

const DescripcionContainer = styled.div`
  padding: 2rem;
  align-content: flex-start;
  text-align: justify;
  width: 600px;
`

const FlechaSlider = styled.div`
  background: url(${props =>
    props.left ? flechaSliderIzqNormal : flechaSliderDerNormal})
    no-repeat;
  height: 80px;
  width: 80px;
  margin: 2rem;
  cursor: pointer;
  &:hover {
    background: url(${props =>
    props.left ? flechaSliderIzqPressed : flechaSliderDerPressed})
      no-repeat;
  }
`

const FotoObra = styled(({ className, ...props }) => (
  <div className={className}>
    <img {...props} />
  </div>
))`
  position: relative;
  height: 880px;
  width: 576px;

  img {
    max-height: 100%;
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
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
const ProcedenciaFotosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const TituloWebCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 1rem 0rem 1rem 0rem;
`

const TituloObra = styled.div`
  font-size: 24pt;
  font-style: italic;
`

const LinkWeb = styled.a`
  font-size: 12pt;
  color: #ec6b42;
`

const CiudadPais = styled.div`
  font-size: 14pt;
  font-family: ${props => props.theme.fontFamily};
  border: 2px solid #ec6b42;
  border-radius: 23px;
  text-align: center;
  padding: 10px;
  width: 290px;
`
const CantFotos = styled.div`
  font-size: 14pt;
  text-decoration: underline;
  color: #ec6b42;
`
const ParrafoObra = styled.div`
  font-size: 12pt;
`

const Carousel = ({
  children,
  onPreviousClick,
  onNextClick,
  count,
  value,
  ciudadPais,
  fotoObra,
  tituloObra,
  obraURL,
}) => {
  const first = value === 0;
  const last = value === count - 1;

  return (
    <>
      <DetalleObraContainer>
        <MargenIzquierdo>
          {!first && <FlechaSlider
            left
            src={flechaSliderIzqNormal}
            onClick={onPreviousClick}
          ></FlechaSlider>}
        </MargenIzquierdo>
        <DetalleObra>
          <FotoObra src={fotoObra} />
          <DescripcionContainer>
            <ProcedenciaFotosContainer>
              {ciudadPais && <CiudadPais>{ciudadPais}</CiudadPais>}
              <CantFotos>
                {value + 1}/{count}
              </CantFotos>
            </ProcedenciaFotosContainer>
            <TituloWebCont>
              <TituloObra>{tituloObra}</TituloObra>
              {obraURL && (
                <LinkWeb href={obraURL} target="_blank">
                  Web
                </LinkWeb>
              )}
            </TituloWebCont>
            {children}
          </DescripcionContainer>
        </DetalleObra>
        <MargenDerecho>
          {!last && <FlechaSlider
            src={flechaSliderDerNormal}
            onClick={onNextClick}
          ></FlechaSlider>}
        </MargenDerecho>
      </DetalleObraContainer>
    </>
  )
}

export default Carousel
export { Carousel, ParrafoObra }
