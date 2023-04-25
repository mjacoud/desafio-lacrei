import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

/* VARIABLES */
:root{
--primary-color:#018762;
--secondary-color:#FFFFF7;
}
/* CSS RESET */
*
{
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-size: 1rem;
  line-height: 1;
}
img,
picture {
  max-width: 100%;
  display: block;
}

a{
  color: inherit;
  text-decoration: inherit;
}

@font-face {
  font-family: "Nunito-regular";
  src: local('Nunito-Regular'),
  url('Nunito-Regular.tff') format('ttf');
}

@font-face {
  font-family: "Nunito-bold";
  src: local('Nunito-Bold'),
  url('Nunito-Bold.tff') format('ttf');
}
`
