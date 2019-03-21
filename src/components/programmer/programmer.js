import React from 'react';

import styled from 'styled-components';

import { Container } from 'Components/layout/layout';

import { Cards, Card } from 'Components/cards/cards';

const Wrapper = styled.section``;

const cards = [
  {
    title: 'Daily Functal',
    content: (
      <div>
        <p>Digital Fractal Art</p>
        <p>Fractal creation</p>
        <p>Captions form Microsoft Vision API</p>
      </div>
    ),
  },
  {
    title: 'Daily Jzx',
    content: (
      <div>
        <p>Short, valuable Scrablle words</p>
        <p>Twitter bot</p>
      </div>
    ),
  },
];

export const Programmer = () => (
  <Wrapper>
    <div className="content">
      <Container>
        <div>
          <h2>Programmer</h2>
        </div>
        <Cards>
          {cards.map(card => (
            <Card
              key={card.title}
              heading={card.title}
              content={card.content}
            />
          ))}
        </Cards>
      </Container>
    </div>
  </Wrapper>
);
