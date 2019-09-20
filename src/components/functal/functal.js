import React from 'react';

import styled from 'styled-components';

import { Container } from 'Components/layout/layout';

import { Cards, Card } from 'Components/cards/cards';

const Wrapper = styled.section`
  padding: 2rem;

  svg {
    min-width: 2rem;
  }
`;

const cards = [
  {
    title: 'Follow Daily Functal',
    content: (
      <div>
        <p>
          <a href="https://www.facebook.com/dailyfunctal">
            <i className="fab fa-facebook" /> facebook
          </a>
        </p>
        <p>
          <a href="https://twitter.com/dailyfunctal">
            <i className="fab fa-twitter" /> twitter
          </a>
        </p>
        <p>
          <a href="http://functal.tumblr.com">
            <i className="fab fa-tumblr" /> tumblr
          </a>
        </p>
      </div>
    ),
  },
];

export const Functal = () => (
  <Wrapper>
    <div className="content" id="functal">
      <Container>
        <Cards>
          {cards.map(card => (
            <Card key={card.title} title={card.title} content={card.content} />
          ))}
        </Cards>
      </Container>
    </div>
  </Wrapper>
);
