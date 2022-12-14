import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    body {
        font-family: 'Mitr', sans-serif;
        font-size: 16px;
        position: relative;

        &.scroll-lock {
            overflow: hidden;
        }
    }

    input, select, textarea {
        outline: none;
    }

    a {
        text-decoration: none !important;
        color: inherit;
        cursor: pointer;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
`;
export default GlobalStyles;
