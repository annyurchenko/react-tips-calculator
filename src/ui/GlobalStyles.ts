import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import circles from "../assets/circles.svg";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: Sans-Serif;
    font-style: normal;
    font-weight: 400;
    background: no-repeat url(${circles}) ${Color.LightGray};

  }
`;

export { GlobalStyle };
