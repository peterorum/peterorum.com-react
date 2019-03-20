import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

`;

export default GlobalStyle;
