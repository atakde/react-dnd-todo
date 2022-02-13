import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    margin: auto;
    background: #000000;
    font-family: system-ui;
    box-sizing: border-box;
    height: 100vh;
    width: 100vw;
  }

  #root {
    height: 100%;
  }
`;

export default GlobalStyle;
