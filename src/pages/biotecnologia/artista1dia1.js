import React from "react";
import styled from "styled-components";
import logo from "../images/logo192.png";

const DetalleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: inherit;
  flex-direction: column;
`;

const ImgContainer = styled.div`
  border-radius: 50px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Artista1Dia1 = () => {
  return (
    <DetalleContainer>
      <Header>
        <ImgContainer>
          <img src={logo} alt="fotoArtista" />
        </ImgContainer>
        <Info></Info>
      </Header>
    </DetalleContainer>
  );
};

export default Artista1Dia1;
