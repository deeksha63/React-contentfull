import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Articulat CF', Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Articulat CF', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #000000;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Articulat CF', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
