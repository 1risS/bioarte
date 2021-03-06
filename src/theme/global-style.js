import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const theme = {
  colors: {
    fg: "#fffff",
    bg1: "#e7e8e6",
    bg2: "#d6d7d5",
    bg3: "#dbe6d4",
    yellow1: "#FFF2CC",
    oranges: ["#EC6B42", "#DF5016", "#AC3E17"],
    greens: ["#93BB66", "#508F44", "#005A32"],
  },
  fontFamily: "Open Sans",
  fontWeights: {
    light: 300,
    regular: 400,
    semiBold: 600,
    extraBold: 800,
  },
  fontSizes: {
    h1: "1.25rem",
    h2: "1rem",
    h3: "0.875rem",
    h4: "0.75rem",
    h5: "0.625rem",
    h6: "0.5rem",
  },
}

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: ${props => props.theme.fontFamily};
    font-size: 16px;
    color: '#1a202c';
  }

  body {
    line-height: 1.5;
    letter-spacing: 0;
    background-color: '#f7fafc';
  }
`
