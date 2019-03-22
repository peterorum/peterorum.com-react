import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  body {
    color:rgb(51, 51, 51);
  }

  a {
    color: rgb(174, 49, 55);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-family: 'Julius Sans One';
  }
`;
