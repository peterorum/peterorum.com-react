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
    font-family: 'Julius Sans One';
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
      <a href="#photographer">Photographer</a>
      <a href="#programmer">Programmer</a>
      <a href="#painter">Painter</a>
      <a href="#peter">Peter</a>
    </nav>
  </Wrapper>
);
