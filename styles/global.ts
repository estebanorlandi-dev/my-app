import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --nav-size: 3.5em;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 16px;
        font-family: Arial, Helvetica, sans-serif;
    }

    body {
        min-height: 100vh;
        background: rgb(25, 25, 30);
        color: #fff;
        max-width: 100vw;
        overflow: hidden;
    }

    a, button {
        color: inherit;
    }
`;
