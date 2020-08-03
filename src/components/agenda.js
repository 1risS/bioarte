import React, { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import logo from "../images/logo192.png"

const data = [
  [
    { time: "18:00", title: "Artista: Titulo de la actividad 1 Dia 1" },
    { time: "19:00", title: "Artista: Titulo de la actividad 2 Dia 1" },
    { time: "20:00", title: "Artista: Titulo de la actividad 3 Dia 1" },
  ],
  [
    { time: "18:00", title: "Artista: Titulo de la actividad 1 Dia 2" },
    { time: "19:00", title: "Artista: Titulo de la actividad 2 Dia 2" },
  ],
  [
    { time: "18:00", title: "Artista: Titulo de la actividad 1 Dia 3" },
    { time: "19:00", title: "Artista: Titulo de la actividad 2 Dia 3" },
    { time: "20:00", title: "Artista: Titulo de la actividad 3 Dia 3" },
    { time: "21:00", title: "Artista: Titulo de la actividad 4 Dia 3" },
  ],
]

const EntradaContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 3em;
`

const Contenedor = styled.div`
  width: 100%;
  max-width: 800px;
  padding: 15px 0 0 0;
  position: relative;
  /* box-shadow: 0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2); */
  margin: 50px auto;

  &:before {
    content: "";
    position: absolute;
    top: 0px;
    left: calc(13% + 6px);
    bottom: 0px;
    width: 0px;
    border: 2px solid ${props => props.theme.colors.bg2};
  }
`

const Horario = styled.div`
  display: inherit;
  align-items: center;
  align-self: flex-start;
  width: 10%;
  position: relative;
  background-color: ${props => props.theme.colors.yellow1};
  color: ${props => props.theme.colors.bg};
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  border-radius: 30px;
`

const Titulo = styled.div`
  margin-left: 2em;
  font-size: ${props => props.theme.fontSizes.h2};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.bg3};
    // box-shadow: 10px 10px 8px ${props => props.theme.colors.bg1};
  }
`

const DateTab = styled.div`
  color: ${props => props.selected && props.theme.colors.oranges[1]};
  padding: 0.5rem;
  display: inherit;
  cursor: pointer;
`

const DateContainer = styled.div`
  background-color: ${props => props.theme.colors.bg1};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
  margin-left: 30%;
`

const ActividadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`
const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Entrada = ({ horario, titulo, detalle }) => {
  // const [expanded, setExpanded] = useState(false);

  return (
    <EntradaContainer>
      <Horario>{horario}</Horario>
      <ActividadContainer>
        <StyledLink to="first-talk">
          <Titulo>{titulo}</Titulo>
        </StyledLink>
      </ActividadContainer>
    </EntradaContainer>
  )
}

const DateTabs = ({ days, value, onClick }) => (
  <DateContainer>
    {days.map((day, i) => (
      <DateTab key={day} selected={value === i} onClick={() => onClick(i)}>
        {day}
      </DateTab>
    ))}
  </DateContainer>
)

const Agenda = () => {
  const [day, setDay] = useState(0)

  const selectDay = day => {
    setDay(day)
  }

  const events = data[day]

  return (
    <>
      <DateTabs
        days={["08/11", "09/11", "10/11"]}
        value={day}
        onClick={selectDay}
      />
      <Contenedor>
        {events.map(event => (
          <Entrada
            key={event.time}
            horario={event.time}
            titulo={event.title}
            detalle={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            }
          />
        ))}
      </Contenedor>
    </>
  )
}

export default Agenda
