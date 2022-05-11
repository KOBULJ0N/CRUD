import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  .App{
    max-width: 600px;
    margin: 0 auto;
    background-color: #888;
  }

`;
export default GlobalStyle;
