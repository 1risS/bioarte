import React from "react";
import Agenda2 from "../../components/Agenda2";
import styled from "styled-components";

const BiotecnologiaHeader = styled.div`
  height: 10em;
  width: 100%;
`;

const Biotecnologia = () => {
  return (
    <>
      <BiotecnologiaHeader> ACTIVIDADES BIOTECNOLOGIA </BiotecnologiaHeader>
      <Agenda2 />
    </>
  );
};

export default Biotecnologia;
