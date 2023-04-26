import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  font-size: 62.5%;

  --gray: #bec1ca;

  --dark-blue: #141C2F;
  --medium-blue: #1f2a48;
  --light-blue: #0079fe;

  --dark-white:#E4E4E4;
  --medium-white:#F2F4F3;
  --light-white:#F2F2F2;
}
 
 *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style:none;
    color: #f8f8f8;

    transition: .2s;
  }
  

  .grayText{
    color:#bec1ca ;
  }

  /*================ Backgrounds ======================= */
  .darkBlueBg{
    background-color: var(--dark-blue);
  }

  .mediumBlueBg{
    background-color: var(--medium-blue);
  }


  .lightBlueBg{
    background-color: var(--light-blue);
  }

  .darkWhiteBg{
    background-color: var(--dark-white);
  }


  .mediumWhiteBg{
    background-color: var(--medium-white);
  }

  .lightWhiteBg{
    background-color: var(--light-white);
  }

/*================ Texts ======================= */

.darkBlueTxt{
   color: var(--dark-blue);
  }

  .mediumBlueTxt{
    color: var(--medium-blue);
  }


  .lightBlueTxt{
    color: var(--light-blue);
  }

  .darkWhiteTxt{
    color: var(--dark-white);
  }


  .mediumWhiteTxt{
    color: var(--medium-white);
  }

  .lightWhiteTxt{
    color: var(--light-white);
  }


`;


export const colors = {
  darkBlue: '#141C2F',
  mediumBlue: '#1f2a48',
  lightBlue: '#0079fe',
  hoverBlue: '#1e8bff',
  gray: "#bec1ca",
}
