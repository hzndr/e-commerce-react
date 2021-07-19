import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
body{
    font-family: 'Open Sans';
    padding: 1.25rem 3.75rem;

    @media screen and (max-width: 800px){
        padding: 10px;
    }
  }
  
  a {
    text-decoration: none;
    color: black
  }
  
  *{
    box-sizing: border-box;
  }
  
`