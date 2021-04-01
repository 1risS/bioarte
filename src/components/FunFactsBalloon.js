import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import globoDialogo from "../../static/images/carousel/SpeechBalloon_0.png"
import funFacts from "../content/fun_facts.json"

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

const FunFactsBalloon = styled(({ className, duration = 12000 }) => {
  const [facts, setFacts] = useState(funFacts)
  const [current, setCurrent] = useState(0)

  const transitions = useTransition(facts[current], item => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  })

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    shuffle(funFacts)
    setFacts(funFacts)

    const interval = setInterval(() => {
      setCurrent(current => (current + 1) % funFacts.length)
    }, duration)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={className}>
      {transitions.map(({ item, props, key }) => (
        <div key={key}>
          <animated.p style={props}>{item}</animated.p>
        </div>
      ))}
    </div>
  )
})`
  background-image: url(${globoDialogo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20rem;
  height: 16rem;
  position: relative;
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;

  div {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 16rem;
  }

  div p {
    display: flex;
    position: relative;
    font-size: 13px;
    align-self: center;
  }
`

export default FunFactsBalloon
