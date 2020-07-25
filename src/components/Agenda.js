import React, { useState } from "react";
import styled from "styled-components";

const TimelineList = styled.ul`
  position: relative;
  max-width: 95%;
  list-style: none;
  &:before {
    background-color: ${(props) => props.theme.colors.oranges[0]};
    content: "";
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 2em;
    width: 2px;
    height: 100%;
  }
`;

const TimelineContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: 1em;
  font-weight: 300;
  line-height: 1.5;
  letter-spacing: 0.05em;
  margin-top: 3rem;
  * {
    box-sizing: border-box;

    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  p {
    font-family: ${(props) => props.theme.fontFamily};
  }
`;

const EventIcon = styled.label`
  transform: rotate(45deg);
  background-color: ${(props) => props.theme.colors.oranges[0]};
  outline: 10px solid white;
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
`;

const EventBody = styled.div`
  padding: 2em 2em 0 2em;
  position: relative;
  top: -1.875em;
  left: 2em;
  width: 95%;
  h3 {
    font-size: ${(props) => props.theme.fontSizes.h2};
    font-weight: ${(props) => props.theme.fontWeights.extraBold};
  }
  h4 {
    font-size: ${(props) => props.theme.fontSizes.h2};
    font-weight: ${(props) => props.theme.fontWeights.semiBold};
    margin-bottom: 1.2em;
  }
`;

const Date = styled.p`
  color: white;
  background-color: ${(props) => props.theme.colors.oranges[2]};
  box-shadow: inset 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
`;

const Description = styled.p`
  strong {
    font-weight: 700;
  }
  p {
    padding-bottom: 1.2em;
  }
`;

const EventListItem = styled.li`
  position: relative;
`;

const DateContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bg1};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 30%;
  margin-left: 2em;
`;

const DateTab = styled.div`
  color: ${(props) => props.selected && props.theme.colors.oranges[1]};
  padding: 0.5rem;
  display: inherit;
  cursor: pointer;
`;
const Timeline = ({ children }) => (
  <TimelineContainer>
    <TimelineList>{children}</TimelineList>
  </TimelineContainer>
);

const Event = ({ title, subtitle, interval, children }) => (
  <EventListItem>
    <EventIcon />
    <EventBody>
      <Date>{interval}</Date>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <Description>{children}</Description>
    </EventBody>
  </EventListItem>
);

const DateTabs = ({ days, value, onClick }) => (
  <DateContainer>
    {days.map((day, i) => (
      <DateTab key={day} selected={value === i} onClick={() => onClick(i)}>
        {day}
      </DateTab>
    ))}
  </DateContainer>
);

const Agenda = () => {
  const [day, setDay] = useState(0);

  const selectDay = (day) => {
    console.log("click", day);
    setDay(day);
  };

  return (
    <div>
      <DateTabs
        days={["08/11", "09/11", "10/11"]}
        value={day}
        onClick={selectDay}
      />
      <Timeline>
        <Event
          interval={"9am - 10am"}
          title={"Nombre de Artista: nombre Actividad"}
          subtitle={"Ipsum"}
        >
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Event>
        <Event
          interval={"10am – 11am"}
          title={"Nombre de Artista: nombre Actividad"}
          subtitle={"Ipsum"}
        >
          dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Event>
      </Timeline>
    </div>
  );
};

export default Agenda;
