import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

// cards

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Cards = ({ children }) => <Wrapper>{children}</Wrapper>;

Cards.propTypes = {
  children: PropTypes.node,
};

// card

const CardWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;

  .title {
    padding: 1rem;
    background-color: rgb(245, 245, 245);

    h3 {
      padding: 0;
      margin: 0;
    }
  }

  .content {
    padding: 1rem;
  }
`;

export const Card = ({ title, content }) => (
  <CardWrapper>
    <div className="title">
      <h3>{title}</h3>
    </div>
    <div className="content">{content}</div>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
};
