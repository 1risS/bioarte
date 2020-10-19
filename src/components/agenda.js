import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { faDotCircle, faCheckCircle } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"
import placeholder from "../images/placeholder.png"

const days = ["19/3", "20/3", "21/3", "22/3"]
const eventsPerDay = [
  [
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
  ],
  [
    {
      time: "18:00",
      title: "Los secretos del BioTextil (día 2)",
      speaker: "Ana Laura Cantera",
      desc:
        "Artista bioelectrónica, investigadora y docente. Magister en " +
        "Artes Electrónicas graduada con honores en la Universidad de " +
        "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
    },
    {
      time: "19:00",
      title: "Los secretos del BioTextil (día 2)",
      speaker: "Ana Laura Cantera",
      desc:
        "Artista bioelectrónica, investigadora y docente. Magister en " +
        "Artes Electrónicas graduada con honores en la Universidad de " +
        "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
    },
  ],
  [
    {
      time: "18:00",
      title: "Los secretos del BioTextil (día 3)",
      speaker: "Ana Laura Cantera",
      desc:
        "Artista bioelectrónica, investigadora y docente. Magister en " +
        "Artes Electrónicas graduada con honores en la Universidad de " +
        "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
    },
    {
      time: "19:00",
      title: "Los secretos del BioTextil (día 3)",
      speaker: "Ana Laura Cantera",
      desc:
        "Artista bioelectrónica, investigadora y docente. Magister en " +
        "Artes Electrónicas graduada con honores en la Universidad de " +
        "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
    },
  ],
  [
    {
      time: "18:00",
      title: "Los secretos del BioTextil (día 4)",
      speaker: "Ana Laura Cantera",
      desc:
        "Artista bioelectrónica, investigadora y docente. Magister en " +
        "Artes Electrónicas graduada con honores en la Universidad de " +
        "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
    },
    {
      time: "19:00",
      title: "Los secretos del BioTextil (día 4)",
      speaker: "Ana Laura Cantera",
      desc:
        "Artista bioelectrónica, investigadora y docente. Magister en " +
        "Artes Electrónicas graduada con honores en la Universidad de " +
        "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
    },
    {
      time: "20:00",
      title: "Los secretos del BioTextil (día 4)",
      speaker: "Ana Laura Cantera",
      desc:
        "Artista bioelectrónica, investigadora y docente. Magister en " +
        "Artes Electrónicas graduada con honores en la Universidad de " +
        "Tres de Febrero, Licenciada y Profesora en Artes Visuales egresada.",
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
  height: 28rem;
`

const EntryList = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  flex-direction: column;
  height: 28rem;
  overflow: scroll;

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
  border-radius: 16px;
  padding: 0.25em 0.5em;
  cursor: pointer;
  width: 8rem;
  text-align: center;
  font-weight: bold;
  transition: 300ms;

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
