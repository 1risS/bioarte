import React, { useState } from "react"
import styled from "styled-components"

const days = ["19/3", "20/3", "21/3", "22/3"]
const eventsPerDay = days.map(() => [
  {
    time: "18:00",
    title: "Los secretos del BioTextil",
    speaker: "Ana Laura Cantera",
    desc:
      "Artista bioelectrónica, investigadora y docente. Magister en " +
      "Artes Electrónicas graduada con honores en la Universidad de " +
      "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
  },
  {
    time: "19:00",
    title: "Los secretos del BioTextil",
    speaker: "Ana Laura Cantera",
    desc:
      "Artista bioelectrónica, investigadora y docente. Magister en " +
      "Artes Electrónicas graduada con honores en la Universidad de " +
      "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
  },
  {
    time: "20:00",
    title: "Los secretos del BioTextil",
    speaker: "Ana Laura Cantera",
    desc:
      "Artista bioelectrónica, investigadora y docente. Magister en " +
      "Artes Electrónicas graduada con honores en la Universidad de " +
      "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
  },
  {
    time: "21:00",
    title: "Los secretos del BioTextil",
    speaker: "Ana Laura Cantera",
    desc:
      "Artista bioelectrónica, investigadora y docente. Magister en " +
      "Artes Electrónicas graduada con honores en la Universidad de " +
      "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
  },
])

const EntryContainer = styled.div`
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
const ActivityContainer = styled.div`
  display: flex;
`

const Time = styled.h1`
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

const Title = styled.h1`
  color: black;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.light};
`

const ActivityType = styled.img`
height = 50px;
width= 50px;
`

const EntryList = styled.div`
  display: flex;
`

const Entry = ({ time, speaker, title }) => {
  // const [expanded, setExpanded] = useState(false);

  return (
    <EntryContainer>
      <InfoContainer>
        <TimeSpeakerContainer>
          <Time>
            <Icono></Icono>
            {time}
          </Time>
          <Speaker>{speaker}</Speaker>
        </TimeSpeakerContainer>
        <ActivityContainer>
          {/* <StyledLink to="first-talk"> */}
          <Title>{title}</Title>
          {/* </StyledLink> */}
        </ActivityContainer>
      </InfoContainer>
      <ActivityType></ActivityType>
    </EntryContainer>
  )
}

const DateTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const DateTab = styled.span`
  background-color: ${props => (props.selected ? "#508f44" : "#000")};
  color: #fff;
  border-radius: 16px;
  padding: 0.25rem;
  cursor: pointer;
  width: 5rem;
  text-align: center;

  &:hover {
    background-color: #5fab51;
  }
`

const DateTabs = ({ days, value, onClick }) => (
  <DateTabsContainer>
    {days.map((day, i) => (
      <DateTab key={day} selected={value === i} onClick={() => onClick(i)}>
        {day}
      </DateTab>
    ))}
  </DateTabsContainer>
)

const Agenda = () => {
  const [day, setDay] = useState(0)

  return (
    <>
      <DateTabs days={days} value={day} onClick={day => setDay(day)} />
      {/* <EntryList>
        {eventsPerDay[day].map((event, i) => (
          <Entry
            key={i}
            time={event.time}
            speaker={event.speaker}
            title={event.title}
            // detail={
            //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            // }
          />
        ))}
      </EntryList> */}
    </>
  )
}

export default Agenda
