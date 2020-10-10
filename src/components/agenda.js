import React from "react"
//import { Link } from "gatsby"
import styled from "styled-components"
// import logo from "../images/logo192.png"

const data = [
  [
    {
      time: "18:00",
      title: "Titulo de la actividad 1 Dia 1",
      speaker: "Speaker 1",
    },
    {
      time: "19:00",
      title: "Titulo de la actividad 2 Dia 1",
      speaker: "Speaker 2",
    },
    {
      time: "20:00",
      title: "Titulo de la actividad 3 Dia 1",
      speaker: "Speaker 3",
    },
  ],
  [
    {
      time: "18:00",
      title: "Titulo de la actividad 1 Dia 2",
      speaker: "Speaker 4",
    },
    {
      time: "19:00",
      title: "Titulo de la actividad 2 Dia 2",
      speaker: "Speaker 5",
    },
  ],
  [
    {
      time: "18:00",
      title: "Titulo de la actividad 1 Dia 3",
      speaker: "Speaker 6",
    },
    {
      time: "19:00",
      title: "Titulo de la actividad 2 Dia 3",
      speaker: "Speaker 7",
    },
    {
      time: "20:00",
      title: "Titulo de la actividad 3 Dia 3",
      speaker: "Speaker 8",
    },
    {
      time: "21:00",
      title: "Titulo de la actividad 4 Dia 3",
      speaker: "Speaker 9",
    },
  ],
]

const EntradaContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const TimeSpeakerContainer = styled.div`
  display: flex;
  flex-direction: row;
`
const ActividadContainer = styled.div`
  display: flex;
`

const Horario = styled.h1`
  color: black;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
  font-size: 1.5rem;
  color: white;
  align-self: center;
`

const Icono = styled.img`
height = 50px;
width= 50px;
`

const Speaker = styled.h1`
  color: black;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
`

const Titulo = styled.h1`
  color: black;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
`

const ActivityType = styled.img`
height = 50px;
width= 50px;
`

const Contenedor = styled.div`
  display: flex;
`

const Entrada = ({ time, speaker, title }) => {
  // const [expanded, setExpanded] = useState(false);

  return (
    <EntradaContainer>
      <InfoContainer>
        <TimeSpeakerContainer>
          <Horario>
            <Icono></Icono>
            {time}
          </Horario>
          <Speaker>{speaker}</Speaker>
        </TimeSpeakerContainer>
        <ActividadContainer>
          {/* <StyledLink to="first-talk"> */}
          <Titulo>{title}</Titulo>
          {/* </StyledLink> */}
        </ActividadContainer>
      </InfoContainer>
      <ActivityType></ActivityType>
    </EntradaContainer>
  )
}

// const DateTabs = ({ days, value, onClick }) => (
//   <DateContainer>
//     {days.map((day, i) => (
//       <DateTab key={day} selected={value === i} onClick={() => onClick(i)}>
//         {day}
//       </DateTab>
//     ))}
//   </DateContainer>
// )

const Agenda = () => {
  // const [day, setDay] = useState(0)

  // const selectDay = day => {
  //   setDay(day)
  // }

  let events = data.flat()

  return (
    <>
      {/* <DateTabs
        days={["08/11", "09/11", "10/11"]}
        value={day}
        onClick={selectDay}
      /> */}
      <Contenedor>
        {events.map((event, i) => (
          <Entrada
            key={i}
            time={event.time}
            speaker={event.speaker}
            title={event.title}
            // detail={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            // }
          />
        ))}
      </Contenedor>
    </>
  )
}

export default Agenda
