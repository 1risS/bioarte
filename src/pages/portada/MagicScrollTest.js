// @flow
import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import logo from "../../images/logo512.png";
import { Title } from "../../components/Title";

const SectionWipesStyled = styled.div`
    overflow: hidden;
    #pinContainer {
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    #pinContainer .panel {
        height: 100vh;
        width: 100vw;
        position: absolute;
        text-align: center;
    }
    .panel {
        height: 100vh;
        width: 100vw;
        text-align: center;
    }
    .panel span {
        position: relative;
        display: block;
        overflow: visible;
        top: 50%;
        font-size: 80px;
    }
    .panel.one {
        background-color: #3883d8;
        display: flexbox;
        justify-content: center;
        align-items: center;
    }
    .elementsContainer{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        height: 70%;
    }
    .fest_logo {
        display: inherit;
        align-self: center;
    }
    .name{
        pading-bottom:100px;
        align-self: center;
        font-size: 80px;
    }
    .panel.two {
        display: flexbox;
        background-color: #38ced7;
        justify-content: center;
        align-items: center;
        flex-direction: column;

    }
    .textContainer{
        flex-direction: column;
        width: 70%
    }
    .panel.three {
        background-color: #22d659;
        margin-bottom: 800px;
        display: flexbox;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .panel.four {
        background-color: #953543;
        display: flexbox;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    .textContainerFour{
        width: 70%;
        height: 80%
        justify-content: space-around;
        align-items: center;
    }
    .sponsorsContainer {
        display: flexbox;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .go360{
        margin: 50px 50px 50px 50px;
    }
`;

const SectionWipes = () => (
  <SectionWipesStyled>
    <Controller globalSceneOptions={{ triggerHook: "onLeave" }}>
      <Scene pin>
        <div className="panel one">
          <div className="elementsContainer">
            <img alt="logo" className="fest_logo" src={logo} />
            <Title>FESTIVAL BIOARTE</Title>
          </div>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel two">
          <div className="textContainer">
            <h1>Párrafo explicando el nombre</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
            <h1>Párrafo explicando el origen del proyecto</h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
          </div>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel three">
          <div className="textContainer">
            <h1>
              Párrafo explicando la experiencia - ( landing page a recorrer y 4
              áreas a explorar, qué hay en cada lugar){" "}
            </h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
          </div>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel four">
          <div className="textContainer">
            <h1>Párrafo explicando cómo navegar el sitio </h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
          </div>
        </div>
      </Scene>
      <Scene pin>
        <div className="panel four">
          <div className="textContainerFour">
            <h1>Call to actión - fráse de cierre </h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h2>
            <a className="go360" href="http://localhost:8081/index.html">
              IR A LA EXPERIENCIA 360
            </a>
            <div className="sponsorsContainer">
              <img alt="logo" className="fest_logo" src={logo} />
              <img alt="logo" className="fest_logo" src={logo} />
              <img alt="logo" className="fest_logo" src={logo} />
              <img alt="logo" className="fest_logo" src={logo} />
            </div>
          </div>
        </div>
      </Scene>
      {/* <Scene
        triggerHook="onLeave"
        duration="300%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><span>Panel</span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>Panel</span></section>
          </Tween>
        </Timeline>
      </Scene> */}
    </Controller>
  </SectionWipesStyled>
);

export default SectionWipes;
