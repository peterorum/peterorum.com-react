import React from 'react';

import styled from 'styled-components';

import { Container, breakpoints } from 'Components/layout/layout';

import { Cards, Card } from 'Components/cards/cards';

const Wrapper = styled.section`
  .programmer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;

let cards = [
  {
    title: 'Daily Functal',
    content: (
      <div>
        <p>
          <strong>Digital Fractal Art</strong>
        </p>
        <p>Fractal creation</p>
        <p>Captions from Microsoft Cognitive Vision API</p>
        <p>
          Node server & fractal generation{' '}
          <a href="https://github.com/peterorum/functal">github</a>
        </p>
        <p>
          Twitter & Tumbl bots{' '}
          <a href="https://github.com/peterorum/functalbook">github</a>
        </p>
      </div>
    ),
  },
];

if (window.matchMedia(`(min-width: ${breakpoints.mobile})`).matches) {
  cards = [
    ...cards,
    {
      title: 'Daily Jzx',
      content: (
        <div>
          <p>
            <strong>Short, valuable Scrabble words</strong>
          </p>
          <p>Twitter bot</p>
          <p>
            <a href="https://twitter.com/dailyjzx" target="_blank">
              @dailyjzx
            </a>
          </p>
          <p>
            Node{' '}
            <a href="https://github.com/peterorum/random/tree/master/jzx">
              github
            </a>
          </p>
        </div>
      ),
    },
  ];
}

cards = [
  ...cards,
  {
    title: 'www.peterorum.com',
    content: (
      <div>
        <p>
          <strong>React hooks, styled components</strong>
        </p>
        <p>
          <a href="https://github.com/peterorum/peterorum.com-react">github</a>
        </p>
      </div>
    ),
  },
];

export const Programmer = () => (
  <Wrapper id="programmer">
    <div className="content">
      <Container>
        <div className="programmer">
          <div>
            <h2>Programmer</h2>
          </div>
          <Cards>
            {cards.map(card => (
              <Card
                key={card.title}
                title={card.title}
                content={card.content}
              />
            ))}
          </Cards>
        </div>
      </Container>
    </div>
  </Wrapper>
);
