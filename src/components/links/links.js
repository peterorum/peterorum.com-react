import React from 'react';

import styled from 'styled-components';

import { colors } from 'Styles/colors';

import { Container } from 'Components/layout/layout';

const Wrapper = styled.section`
  background-color: black;
  text-align: center;
  padding: 2rem;

  a {
    color: ${colors.primary};
  }
`;

export const Links = () => (
  <Wrapper id="peter">
    <Container>
      <h2>
        <a href="https://github.com/peterorum">
          <i className="fab fa-github" /> Github
        </a>
      </h2>
      <h2>
        <a href="https://au.linkedin.com/in/peterorum">
          <i className="fab fa-linkedin" /> LinkedIn
        </a>
      </h2>
      <h2>
        <a href="https://twitter.com/peterorum">
          <i className="fab fa-twitter" /> Twitter
        </a>
      </h2>
    </Container>
  </Wrapper>
);
