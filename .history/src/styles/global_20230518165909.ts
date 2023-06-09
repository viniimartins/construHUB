import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2x ${(props) => props.theme["green-500"]};
    }


    body {
        background-color: ${(props) => props.theme[""]};
        color: ${(props) => props.theme["gray-300"]};
        -webkit-font-smoothing: antsialiased;
    }


    body, input-security, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`;
