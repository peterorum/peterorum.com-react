import { createGlobalStyle } from 'styled-components';

import { breakpoints } from 'Components/layout/layout';

export const GlobalStyle = createGlobalStyle`

  body {
    color:rgb(51, 51, 51);
    font-family: Roboto, sans-serif;
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

  .large-link {
    font-weight: bold;
    font-size: 120%;
  }

  @media (min-width: ${breakpoints.mobile}) {
    .hidden-mobile {
      display: block;
    }
  }

  .bg-gray {
    background-color: #fff;
    background-image: url('/images/code.png');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg-black {
    background-color: #000;
  }

  .bg-functal {
    background-color: #fff;
    background-image: url('/images/functal-20161106063441235.jpg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .btn-plain {
    border: 0;
    background: transparent;
    padding: 0;
    color: white;
    margin-left: 2rem;

  }
`;
