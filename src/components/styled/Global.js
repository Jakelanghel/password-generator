import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box
    }

    body {
        font-family: 'Rubik', sans-serif;
        margin: 0;
        padding: 0;
        font-size: 18px;
        color: ${({ theme }) => theme.darkTheme.white};
        background-color: ${({ theme }) => theme.darkTheme.bg2};

    }
    
    h1,
    h2,
    p {
        margin: 0;
        padding: 0;
    }

`;
