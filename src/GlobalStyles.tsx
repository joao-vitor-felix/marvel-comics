import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #1D1B1A;
    font-family: 'Inter', sans-serif;
    height: 100vh;
    width: 100wh;
}
`;
