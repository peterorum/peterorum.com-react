import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  h2 {
    font-family: 'Julius Sans One';
  }
`;
