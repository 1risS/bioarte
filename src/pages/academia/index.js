import React from "react";
import Agenda2 from "../../components/Agenda2";
import styled from "styled-components";

const AcademiaHeader = styled.div`
  height: 10em;
  width: 100%;
`;

const Academia = () => {
  return (
    <>
      <AcademiaHeader> ACTIVIDADES ACADEMIA </AcademiaHeader>
      <Agenda2 />
    </>
  );
};

export default Academia;
