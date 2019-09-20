import React from 'react';

import styled from 'styled-components';

import { Container, breakpoints } from 'Components/layout/layout';

import painting from 'Images/Gala-Vale.jpg';
import drawing from 'Images/pjo-paint-3.jpg';

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

export const Painter = () => (
  <Wrapper id="painter">
    <Container>
      <div className="content">
        <div className="painting">
          <img src={painting} alt="painting" />
        </div>
        <div className="drawing">
          <h2>Painter</h2>
          <p>
            <a href="https://www.facebook.com/peterorumart/">
              <h3>
                <i className="fab fa-facebook" /> Facebook
              </h3>
            </a>
          </p>
          <img src={drawing} alt="drawing" />
        </div>
      </div>
    </Container>
  </Wrapper>
);
