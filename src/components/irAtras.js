import React from "react"
import styled from "styled-components"
import flechaAtras from "../../static/images/carousel/Btn-CircleArrow_Click_Left.png"

const FlechaAtras = styled.div`
  background-image: ${flechaAtras};
  &:hover {
    cursor: pointer;
  }
`

const Atras = () => {
  return <FlechaAtras></FlechaAtras>
}

export default Atras
