import { createGlobalStyle } from 'styled-components';

import { breakpoints } from 'Components/layout/layout';

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
    font-size: 1.5rem;

    @media (min-width: ${breakpoints.mobile}) {
      font-size: 2rem;
    }
  }

  .hidden-mobile {
    display: none;
  }

  @media (min-width: ${breakpoints.mobile}) {
    .hidden-mobile {
      display: block;
    }
  }

`;
