import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        font-family: 'Open Sans', sans-serif;
        font-size: 1rem;
        line-height: 1.75rem;
    }
    h1 {
        font-family: "Raleway", sans-serif;
        font-weight: 700;
        font-size: 3rem;
        line-height: 3.75rem;
    }
    h2 {

        font-weight: 500;
        font-size: 2.4rem;
        line-height: 3.4rem;
    }
    h3 {
        font-weight: 500;
        font-size: 2rem;
        line-height: 3.5rem;
    }
    h4 {

        font-weight: 500;
        font-size: 1.5rem;
        line-height: 3rem;
    }

    h5 {
        font-weight: 400;
        font-size: 1.35rem;
    }

    h6 {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 2rem;
    }

    ul {
        list-style-position: inside;
        text-indent:-20px;
    }

    li {
        margin-left: 20px;
        margin-right: 20px;
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        cursor: pointer;
        transition: opacity 0.2s ease-in-out;
 
        &:hover,
        &:focus {
          outline: 0;
          opacity: 0.5;
        }
    }
    code {
        font-size: 1.125rem;
        background-color: #edf2f7;
        padding: 0 .5rem;
    }
    
    button {
        padding: 1em 2em;
        border-radius: 2em;
        background-color: #ff7382;
        color: #fff;
        font-size: 0.875rem;
        text-decoration: none;
        cursor: pointer;
        outline: transparent;
        border: transparent;
    }
`;

export default GlobalStyle;
