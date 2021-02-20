import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { faDotCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"
import placeholder from "../images/placeholder.png"

const days = ["05/04", "06/04", "07/04", "08/04", "09/04"]
const eventsPerDay = [
  [
    {
      time: "15:00",
      title: "Presentación BIOS",
      speaker: "Equipo BIOS + C3",
      desc:
        "Guadalupe, Laura, Iris, Tomas, Lujan, Susana" +
        "presentan el proyecto BIOS " +
        "",
    },
    {
      time: "16:00",
      title: "ARTE: Biorobótica",
      speaker: "Ana Laura Cantera, Damián Ferrari, Daniel Álvarez Olmedo",
      desc: "??????????",
    },
    {
      time: "17:00",
      title: "BIOTECNOLOGÍA: Casos de Biotecnología",
      speaker: "FAN",
      desc: "?????????????",
    },
    {
      time: "18:00",
      title: "ACADEMIA: 'Biotecnologia roja : Cs. Medicas, Salud, Genetica' ",
      speaker: "UBA+UNAM+UNOBA+UNIMORON",
      desc: "?????????????",
    },
    {
      time: "19:00",
      title: "Inauguración muestra virtual con LikeLike",
      speaker: "Equipo BIOS",
      desc: "?????????????",
    },
  ],
  [
    {
      time: "15:00",
      title: "ACADEMIA: Creación de empresas de base tecnológica",
      speaker: "UNQ + UNL",
      desc: "???????",
    },
    {
      time: "16:00",
      title: "BIOTECNOLOGÍA: Salud humana",
      speaker: "Gemmabiotech, Roche, Bayer, Biosidus",
      desc: "??????????",
    },
    {
      time: "17:00",
      title: "BIOTECNOLOGÍA: Producción insumos industriales: Novozymes",
      speaker: "Gemmabiotech, Roche, Bayer, Biosidus",
      desc: "??????????",
    },
    {
      time: "18:00",
      title: "Taller Claudia Valente en Mozila hub",
      speaker: "Claudia Valente",
      desc: "??????????",
    },
    {
      time: "18:50",
      title: "Filler",
      speaker: "Filler",
      desc: "??????????",
    },
    {
      time: "19:00",
      title: "Lanzamiento Libro Lucia Stubrin",
      speaker: "Lucia Stubrin",
      desc: "??????????",
    },
  ],
  [
    {
      time: "15:00",
      title: "BIOTECNOLOGÍA: una vision al futuro",
      speaker: "BIFE + Kheiron Biotech + myDNAmap ",
      desc: "????????????????",
    },
    {
      time: "16:00",
      title:
        "ACADEMIA: Biotecnologia Industrial (Blanca) Biocombustibles + Enzimas",
      speaker: "UNER + UBA + UNL + UNRN",
      desc: "??????????",
    },
    {
      time: "17:00",
      title: "ARTE: Agar Art y Modelado Molecular",
      speaker:
        "Gabriel Gutkind, Daniela Cejas, Laura Echarren, Federico Coscio, Pablo Power",
      desc: "??????????",
    },
    {
      time: "18:00",
      title: "BIOTECNOLOGÍA: Salud y Reproduccion animal",
      speaker:
        "Biotecnofe - Foro Argentino de Genética Bovina - Biochemiq - Bioinnovo - Biogenesis Bagó",
      desc: "??????????",
    },
    {
      time: "18:50",
      title: "Performance del corazón en el celular",
      speaker: "???????????",
      desc: "??????????",
    },
    {
      time: "19:00",
      title: "ARTE: Historia del BioArte",
      speaker: "Natalia Matewecki",
      desc: "??????????",
    },
  ],
  [
    {
      time: "15:00",
      title: "ARTE: Biomateriales, biosensado y biosonificacion",
      speaker: "Veronica, Ana Paula, Electrobiota, Oliverio",
      desc: "????????????????",
    },
    {
      time: "16:00",
      title: "BIOTECNOLOGÍA: Mejoramiento cultivos y transgenicos",
      speaker: "ArgenBio",
      desc: "??????????",
    },
    {
      time: "17:00",
      title: "ACADEMIA: Biofabricacion de Organos",
      speaker: "UP, CAECE, U Favaloro Video BIotecX - Life SI",
      desc: "??????????",
    },
    {
      time: "18:00",
      title: "ARTE: performance",
      speaker: "micra",
      desc: "??????????",
    },
    {
      time: "18:40",
      title: "YouTube La Hiperactina",
      speaker: "???????",
      desc: "??????????",
    },
    {
      time: "19:00",
      title: "Mesa redonda",
      speaker: "artistas / academia / empresas",
      desc: "??????????",
    },
    {
      time: "15:00",
      title: "ARTE: Biomateriales, biosensado y biosonificacion",
      speaker: "Veronica, Ana Paula, Electrobiota, Oliverio",
      desc: "????????????????",
    },
    {
      time: "16:00",
      title: "BIOTECNOLOGÍA: Mejoramiento cultivos y transgenicos",
      speaker: "ArgenBio",
      desc: "??????????",
    },
    {
      time: "17:00",
      title: "ACADEMIA: Biofabricacion de Organos",
      speaker: "UP, CAECE, U Favaloro Video BIotecX - Life SI",
      desc: "??????????",
    },
    {
      time: "18:00",
      title: "ARTE: performance",
      speaker: "micra",
      desc: "??????????",
    },
    {
      time: "19:00",
      title: "Mesa redonda",
      speaker: "artistas / academia / empresas",
      desc: "??????????",
    },
  ],
  [
    {
      time: "15:00",
      title: "ACADEMIA: Bioeconomía",
      speaker: "Fernando Vilella",
      desc: "????????????????",
    },
    {
      time: "16:00",
      title: "ARTE: Taller Bioarte Joaquin Fargas en Mozilla hub",
      speaker: "Joaquin Fargas",
      desc: "??????????",
    },
    {
      time: "16:40",
      title: "Bioinformática",
      speaker: "UTN",
      desc: "??????????",
    },
    {
      time: "17:00",
      title: "ARTE: mesa de Universidades",
      speaker:
        "Untref Biolab, Lab Latam BioArte UAI, UMSA, Modera Lucia Stubrin",
      desc: "??????????",
    },
    {
      time: "18:00",
      title: "BIOTECNOLOGÍA: startups",
      speaker: "GridX + Beeflow + Algaebio+ + Einsted",
      desc: "??????????",
    },
    {
      time: "18:50",
      title: "Filler",
      speaker: "Filler",
      desc: "??????????",
    },
    {
      time: "19:00",
      title: "Cierre",
      speaker: "Pablo Lapadula",
      desc: "??????????",
    },
  ],
]

const EntryContainer = styled.div`
  background-color: ${props =>
    props.expanded ? props.theme.colors.greens[1] : "#fff"};
  display: flex;
  flex-direction: row;
  padding: 1em;
  margin: 0.75em 0;
  cursor: pointer;
  transition: background-color 300ms;

  & h1,
  & svg {
    color: ${props => props.expanded && "#fff"};
  }
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
  flex-direction: column;
`

const Time = styled.h1`
  color: ${props => props.theme.colors.greens[1]};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 1.25rem;
  align-self: center;
`

const Bullet = styled(({ className }) => (
  <FontAwesomeIcon className={className} icon={faDotCircle} />
))`
  font-size: 1.25rem;
  color: ${props => props.theme.colors.greens[1]};
  margin: 0.25em;
  margin-right: 0.5em;
`

const Speaker = styled.h1`
  color: ${props => props.theme.colors.greens[1]};
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  align-self: center;
  margin-left: 2rem;
`

const Title = styled.h1`
  color: black;
  font-family: ${props => props.theme.fontFamily};
  font-weight: ${props => props.theme.fontWeights.semiBold};
  font-size: 1.65rem;
  cursor: pointer;
  padding: 0.5em 0;
`

const EntryListContainer = styled.div`
  position: relative;
  height: 75vh;
`

const EntryList = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  height: 75vh;
  overflow-y: auto;

  &.entry-list-enter {
    opacity: 0;
  }
  &.entry-list-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }
  &.entry-list-exit {
    opacity: 1;
    transform: translateX(0%);
  }
  &.entry-list-exit-active {
    opacity: 0;
    transform: translateX(20%);
    transition: opacity 500ms ease-in, transform 500ms ease-in;
  }
`

const Detail = styled.p`
  display: flex;
  flex-direction: row;
  margin-bottom: ${props => (props.expanded ? "1.5em" : 0)};
  height: ${props => (props.expanded ? "100%" : 0)};
  opacity: ${props => (props.expanded ? 1 : 0)};
  overflow: hidden;
  transition: opacity 300ms;

  & > p {
    color: #fff;
    font-size: 0.875rem;
    flex-grow: 1;
    padding: 0 4em 0 1em;
  }
  & > img {
    height: 110px;
    width: 150px;
  }
`

const Entry = ({ time, speaker, title, detail }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <EntryContainer expanded={expanded} onClick={() => setExpanded(!expanded)}>
      <Bullet />
      <InfoContainer>
        <TimeSpeakerContainer>
          <Time>{time.slice(0, 2)}hs</Time>
          <Speaker>{speaker}</Speaker>
        </TimeSpeakerContainer>
        <ActivityContainer>
          <Title>{title}</Title>
          <Detail expanded={expanded}>
            <img src={placeholder} />
            <p>{detail}</p>
          </Detail>
        </ActivityContainer>
      </InfoContainer>
    </EntryContainer>
  )
}

const DateTabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const DateTab = styled.span`
  background-color: ${props =>
    props.selected ? props.theme.colors.greens[1] : "#000"};
  color: #fff;
  border-radius: 50px;
  padding: 0 0.5em;
  cursor: pointer;
  width: 9rem;
  text-align: center;
  font-weight: bold;
  transition: 300ms;
  font-style: italic;
  font-size: 1.5em;

  &:hover {
    background-color: ${props => props.theme.colors.greens[0]};
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

  const currentEvents = eventsPerDay[day]

  return (
    <>
      <DateTabs days={days} value={day} onClick={day => setDay(day)} />
      <EntryListContainer>
        <TransitionGroup>
          <CSSTransition key={day} timeout={500} classNames="entry-list">
            <EntryList>
              {currentEvents.map((event, i) => (
                <Entry
                  key={`${day}-${i}`}
                  time={event.time}
                  speaker={event.speaker}
                  title={event.title}
                  detail={event.desc}
                />
              ))}
            </EntryList>
          </CSSTransition>
        </TransitionGroup>
      </EntryListContainer>
    </>
  )
}

export default Agenda
