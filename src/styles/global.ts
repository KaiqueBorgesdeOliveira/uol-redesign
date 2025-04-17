import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --uol-orange: #FF6600;
    --uol-dark: #333333;
    --uol-light-gray: #F5F5F5;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Segoe UI', sans-serif;
    background-color: var(--uol-light-gray);
  }
`