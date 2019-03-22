import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.header`
  position: fixed;
  z-index: 100;
  background: #f6f6f6;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1rem;

  a {
    color: #666;
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
`;

export const Header = () => (
  <Wrapper>
    <nav>
      <a className="brand" href="/">
        Peter Orum
      </a>
    </nav>
    <nav className="section-links">
      <a href="#photographer">Photographer</a>
      <a href="#programmer">Programmer</a>
      <a href="#painter">Painter</a>
      <a href="#peter">Peter</a>
    </nav>
  </Wrapper>
);
