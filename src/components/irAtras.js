import React from "react"
import styled from "styled-components"
import flechaAtras from "../../static/images/carousel/Btn-CircleArrow_Click_Left.png"

const FlechaAtras = styled(({ className, title, href }) => (
  <a href={href} className={className}>
    <span>{title}</span>
  </a>
))`
  background-image: url(${flechaAtras});
  background-repeat: no-repeat;
  background-size: contain;
  height: 80px;
  width: 80px;
  position: relative;
  display: block;

  &:hover {
    cursor: pointer;
    opacity: 0.95;
  }

  span {
    visibility: hidden;
    position: absolute;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    z-index: 1;
    opacity: 0.7;
    transition: opacity 0.6s;

    top: 20%;
    left: 195%;
    margin-left: -60px;
  }

  &:hover span {
    visibility: visible;
    opacity: 1;
  }
`

export default FlechaAtras
