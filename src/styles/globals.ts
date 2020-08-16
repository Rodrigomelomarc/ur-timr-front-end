import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  * {
    border: 0;
    padding: 0;
    margin:0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html {
    font-size: 62.5%;
  }

  body, html, #root {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
  }

  body, button, input {
    font-family: Poppins, sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: Poppins, sans-serif;
    font-weight: 500;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
