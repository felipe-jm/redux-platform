import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #00C2A8;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 14px Roboto, sans-serif;
  }

  html, body, #root{
    width: 100%;
    height: 100%;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
