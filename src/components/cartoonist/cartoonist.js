import React from 'react';

import styled from 'styled-components';

import { Container, breakpoints } from 'Components/layout/layout';

import cartoon1 from 'Images/Leopard-crossing.png';
import cartoon2 from 'Images/Monkey-siri.png';

const Wrapper = styled.section`
  padding: 2rem;
  padding-top: 4rem;

  img {
    max-width: 100%;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    .drawing {
      order: -1;
      margin-bottom: 1rem;
    }

    h2 {
      padding-top: 0;
      margin-top: 0;
    }

    > div {
      width: 100%;

      @media (min-width: ${breakpoints.mobile}) {
        width: 49%;
      }
    }

    @media (min-width: ${breakpoints.mobile}) {
      flex-direction: row;

      .drawing {
        order: 2;
      }
    }
  }
`;

export const Cartoonist = () => (
  <Wrapper id="painter">
    <Container>
      <div className="content">
        <div className="painting">
          <img src={cartoon1} alt="cartoon" />
        </div>
        <div className="drawing">
          <h2>Cartoonist</h2>
          <p>
            <a href="https://www.instagram.com/orumcartoons/">
              <h3>
                <i className="fab fa-instagram" /> Instagram
              </h3>
            </a>
          </p>
          <p>
            <a href="https://www.facebook.com/orumcartoons/">
              <h3>
                <i className="fab fa-facebook" /> Facebook
              </h3>
            </a>
          </p>
          <p>
            <a href="https://www.twitter.com/orumcartoons/">
              <h3>
                <i className="fab fa-twitter" /> Twitter
              </h3>
            </a>
          </p>
          <img src={cartoon2} alt="cartoon" />
        </div>
      </div>
    </Container>
  </Wrapper>
);
