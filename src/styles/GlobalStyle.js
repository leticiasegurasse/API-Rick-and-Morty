import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-image: url("https://media.giphy.com/media/pvyS73YWLMR9zDXuLs/giphy.gif");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #ffff;
  }

  * {
    box-sizing: border-box;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
