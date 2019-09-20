import React from 'react';

import styled from 'styled-components';

import { breakpoints } from 'Components/layout/layout';

const Wrapper = styled.header`
  z-index: 100;
  background: #000;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1rem;

  a {
    color: #fff;
  }

  .brand {
    font-size: 1.2rem;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: bold;
  }

  .section-links {
    a {
      margin-left: 1rem;
    }
  }

  @media (min-width: ${breakpoints.mobile}) {
    position: fixed;
  }
`;

export const Header = () => (
  <Wrapper>
    <nav>
      <a className="brand" href="/">
        Peter Orum
      </a>
    </nav>
    <nav className="section-links hidden-mobile">
      <button
        type="button"
        className="btn-plain"
        onClick={() => window.fullpage_api.moveTo('nav-photographer')}
      >
        Photographer
      </button>
      <button
        type="button"
        className="btn-plain"
        onClick={() => window.fullpage_api.moveTo('nav-programmer')}
      >
        Programmer
      </button>
      <button
        type="button"
        className="btn-plain"
        onClick={() => window.fullpage_api.moveTo('nav-painter')}
      >
        Painter
      </button>
      <button
        type="button"
        className="btn-plain"
        onClick={() => window.fullpage_api.moveTo('nav-peter')}
      >
        Peter
      </button>
    </nav>
  </Wrapper>
);
