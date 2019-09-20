import React from 'react';

import styled from 'styled-components';

import { Container } from 'Components/layout/layout';

import { Cards, Card } from 'Components/cards/cards';

const Wrapper = styled.section`

  .programmer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
  }
`;

const cards = [
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
          Twitter, Facebook & Tumbl bots{' '}
          <a href="https://github.com/peterorum/functalbook">github</a>
        </p>
      </div>
    ),
  },
  {
    title: 'Daily Jzx',
    content: (
      <div>
        <p>
          <strong>Short, valuable Scrabble words</strong>
        </p>
        <p>Twitter & Facebook bot</p>
        <p>
          <a href="https://twitter.com/dailyjzx" target="_blank">
            @dailyjzx
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/pages/Daily-Jzx/848455901888299">
            facebook
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
  {
    title: 'peterorum.com',
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
