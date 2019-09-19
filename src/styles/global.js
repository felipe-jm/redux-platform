import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

 *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #00C2A8;
    -webkit-font-smoothing: antialiased;
    font-family: Roboto, Arial, Helvetica, sans-serif;
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
