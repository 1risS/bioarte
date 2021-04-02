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
  display: ${props => props.current ? 'flex' : 'none'};
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

const FotoObra = styled(({ className, src, alt }) => (
  <div className={className}>
    <img src={src} alt={alt} />
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
  text-align: left;
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
  margin-bottom: 0.75em;
`

const DescripcionInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Carousel = ({ items }) => {
  const [current, setCurrent] = useState(0)

  const onPreviousClick = () => {
    setCurrent(current => current > 0 ? current - 1 : current)
  }

  const onNextClick = () => {
    setCurrent(current => (current < items.length - 1) ? current + 1 : current)
  }

  const first = current === 0
  const last = current === items.length - 1

  const {
    ciudadPais,
    foto,
    titulo,
    url,
    descripcion
  } = items[current]

  return (<DetalleObraContainer>
    <MargenIzquierdo>
      {!first && (
        <FlechaSlider
          left
          src={flechaSliderIzqNormal}
          onClick={onPreviousClick}
        ></FlechaSlider>
      )}
    </MargenIzquierdo>
    {items.map((item, i) => (
      <DetalleObra key={i} current={current === i}>
        <FotoObra src={item.foto} alt={item.titulo} />
        <DescripcionContainer>
          <ProcedenciaFotosContainer>
            {item.ciudadPais && <CiudadPais>{item.ciudadPais}</CiudadPais>}
            <CantFotos>
              {current + 1}/{items.length}
            </CantFotos>
          </ProcedenciaFotosContainer>
          <DescripcionInnerContainer>
            <TituloWebCont>
              <TituloObra>{titulo}</TituloObra>
              {url && (
                <LinkWeb href={url} target="_blank">
                  Web
                </LinkWeb>
              )}
            </TituloWebCont>
            {descripcion.split("\n\n").map((parrafo, i) => (
              <ParrafoObra key={i}>{parrafo}</ParrafoObra>
            ))}
          </DescripcionInnerContainer>
        </DescripcionContainer>
      </DetalleObra>
    ))}
    <MargenDerecho>
      {!last && (
        <FlechaSlider
          src={flechaSliderDerNormal}
          onClick={onNextClick}
        ></FlechaSlider>
      )}
    </MargenDerecho>
  </DetalleObraContainer>)
}

export default Carousel
