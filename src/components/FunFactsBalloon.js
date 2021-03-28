import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { animated, useTransition } from "react-spring"
import globoDialogo from "../../static/images/carousel/SpeechBalloon_0.png"
import funFacts from "../content/fun_facts.json"

const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
}

const FunFactsBalloon = styled(({ className, duration = 5000 }) => {
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
          <animated.p style={props}>
            {item}
          </animated.p>
        </div>
      ))}
    </div>
  )
})`
  background-image: url(${globoDialogo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 18rem;
  height: 14rem;
  position: relative;
  padding: 1em;

  div {
    position: absolute;
    width: 16rem;
  }

  div p {
    position: relative;
    font-size: 14px;
  }
`

export default FunFactsBalloon
