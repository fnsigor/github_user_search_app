import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  font-size: 62.5%;
}
 
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style:none;
    color: #f8f8f8;
  }

  body{
    background-color:#141C2F;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

`;


export const colors = {
  darkBlue: '#141C2F',
  mediumBlue: '#1f2a48',
  lightBlue: '#0079fe',
  hoverBlue: '#1e8bff',
  textColor: '#f8f8f8',
  gray: "#bec1ca",
}
