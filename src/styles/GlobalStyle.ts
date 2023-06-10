import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scrollbar-width: thin;
    scrollbar-color: #bfc9d3 #EFF1F4;
  }

  *::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  *::-webkit-scrollbar-track {
    background: #EFF1F4;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #bfc9d3;
    border: 3px solid #EFF1F4;
    border-radius: 10px;
  }

  body {
    color: #2b2c48;
    font-family: "Jost", sans-serif;
    background-image: url(/profile/img/main-bg.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    position: relative;

    &:before {
      content: '';
      background-color: rgba(5, 19, 74, 0.5);
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  a {
    color: #31479e;

    &:hover {
      text-decoration: none;
    }
  }
`
