import React from "react";
import styled from "styled-components";
import { Title as HeroTitle } from "../../components/Title";
import logo from "../../images/logo512.png";
// import MagicScrollTest from "./MagicScrollTest";
// import FramerMotionTest from './FramerMotionTest'
// import './index.css';

const HeroImage = styled.img``;

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.bg1};
`;

const SectionTitle = styled.h2`
  font-weight: 400;
`;

const SectionContent = styled.div``;

const SponsorsSection = styled(Section)``;

const SponsorLogo = styled.img`
  height: 6rem;
`;

const Portada = () => (
  <div>
    <Section>
      <HeroImage src={logo} />
      <HeroTitle>FESTIVAL BIOARTE</HeroTitle>
    </Section>

    <Section>
      <SectionTitle>Párrafo explicando el nombre</SectionTitle>
      <SectionContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </SectionContent>
    </Section>

    <Section>
      <SectionTitle>Párrafo explicando el origen del proyecto</SectionTitle>
      <SectionContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </SectionContent>
    </Section>

    <Section>
      <SectionTitle>
        Párrafo explicando la experiencia - ( landing page a recorrer y 4 áreas
        a explorar, qué hay en cada lugar)
      </SectionTitle>
      <SectionContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </SectionContent>
    </Section>

    <Section>
      <SectionTitle>Párrafo explicando cómo navegar el sitio</SectionTitle>
      <SectionContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </SectionContent>
    </Section>

    <Section>
      <SectionTitle>Call to actión - fráse de cierre</SectionTitle>
      <SectionContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a className="go360" href="http://localhost:8081/index.html">
          IR A LA EXPERIENCIA 360
        </a>
      </SectionContent>
    </Section>

    <SponsorsSection>
      <SponsorLogo src={logo} />
      <SponsorLogo src={logo} />
      <SponsorLogo src={logo} />
      <SponsorLogo src={logo} />
    </SponsorsSection>
  </div>
);

export default Portada;
