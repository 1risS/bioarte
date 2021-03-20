import React, { useEffect, useState } from "react"
import styled from "styled-components"
import globoDialogo from "../../static/images/carousel/SpeechBalloon_0.png"
import funFacts from "../content/fun_facts.json"

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

const FunFactsBalloon = styled(({ className, duration = 5000 }) => {
  const [facts, setFacts] = useState(funFacts);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    shuffle(funFacts);
    setFacts(funFacts);

    const interval = setInterval(() => {
      console.log("setCurrent", (current + 1) % funFacts.length);
      setCurrent(current => (current + 1) % funFacts.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (<div className={className}>
    <p>
      {facts[current]}
    </p>
  </div>)
})`
  background-image: url(${globoDialogo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 20rem;
  height: 16rem;
`

export default FunFactsBalloon;