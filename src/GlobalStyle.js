import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Work Sans", sans-serif;
  }
  body{
    background: radial-gradient(100% 33.06% at 100% 0%,rgba(248,227,45,0.2) 9.45%,rgba(255,153,0,0) 100%),linear-gradient(180deg,#8BD6BF 0%,#C1E9DD 15.1%,#F8F8F8 53.12%,#E6DBF4 71.14%,#D7CAE9 100%);
    background-repeat: no-repeat;
    height: fit-content;
    
  }
h1,h2,h3,h4 {
   font-family: "Krona One", sans-serif;
}
h1 {
    color: ${({ theme }) => theme.colors.heading};
    font-size: 45px;
    font-weight: 700;
  }
   h2 {
     color: ${({ theme }) => theme.colors.heading};
     font-size: 4.4rem;
     font-weight: 300;
     white-space: normal;
    
    }
  h3 {
    font-size: 1.8rem;
    font-weight: 400;
  }

  p, button {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight:400;
  }
  a{
    text-decoration: none;
  }
  li{
    list-style: none;
  }

  {/* $$$$  resuable code section $$$$$$$$$$$ */}

  .container {
    max-width: 120rem;
    margin: 0 auto;
  }
  .grid {
    display: grid;
    
  }
  .gridTwoColumn {
    grid-template-columns: repeat(2, 1fr);
  }
  .gridThreeColumn {
    grid-template-columns: repeat(3, 1fr);
  }
  .gridFourColumn{    
    grid-template-columns: auto auto auto auto;
    row-gap: 15px;
    margin-bottom: -200px;
    padding: 200px;
 }
 .gridFiveColumn{
   grid-template-columns: repeat(5, 1fr);
 }

 
`;

