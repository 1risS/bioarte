import React from "react";
import styled from "styled-components";
import logo from "../../images/logo192.png";

const DetalleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Header = styled.div`
  display: inherit;
  flex-direction: column;
  align-self: center;
  width: 60%;
  margin: 4rem 2rem 4rem 2rem;
`;

const ImgContainer = styled.div`
  border-radius: 50px;
  align-self: center;
  padding: 5em 3em 5em 3em;
`;

const NombreArtista = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: ${(props) => props.theme.fontWeights.semiBold};
  font-size: ${(props) => props.theme.fontSizes.h1};
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.oranges[0]};
  padding: 2em 2em 2em 2em;
`;

const Fecha = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.h2v};
`;

const Tipo = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.h2};
`;

const Inscripcion = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.h2};
`;

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: center;
  width: 60%;
`;

const TituloActividad = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.h1};
`;

const DescripcionActividad = styled.h4`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.h4};
  font-weight: ${(props) => props.theme.fontWeights.light};
`;

const Artista1Dia1 = () => {
  return (
    <DetalleContainer id="detalleContainer">
      <Header id="header">
        <ImgContainer>
          <img src={logo} alt="fotoArtista" />
        </ImgContainer>
        <NombreArtista>NOMBRE ARTISTA</NombreArtista>
        <Info>
          <Fecha>Día y hora de la actividad</Fecha>
          <Tipo>Tipo de actividad</Tipo>
          <Inscripcion> URL Inscripcion </Inscripcion>
        </Info>
      </Header>
      <Contenido>
        <TituloActividad> Título de la actividad</TituloActividad>
        <DescripcionActividad>
          Descripción de la actividad Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </DescripcionActividad>
      </Contenido>
    </DetalleContainer>
  );
};

export default Artista1Dia1;
