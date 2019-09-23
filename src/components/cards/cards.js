import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

import { breakpoints } from 'Components/layout/layout';

// cards

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Cards = ({ children }) => <Wrapper>{children}</Wrapper>;

Cards.propTypes = {
  children: PropTypes.node,
};

// card

const CardWrapper = styled.div`
  border: 1px solid rgb(221, 221, 221);
  border-radius: 4px;
  width: 100%;
  margin: 0 1rem 1rem 1rem;
  background-color: white;

  @media (min-width: ${breakpoints.mobile}) {
    width: 30%;
  }

  .title {
    padding: 1rem;
    background-color: rgb(245, 245, 245);
    font-weight: bold;
    font-size: 120%;
  }

  .content {
    padding: 1rem;
  }
`;

export const Card = ({ title, content }) => (
  <CardWrapper>
    <div className="title">{title}</div>
    <div className="content">{content}</div>
  </CardWrapper>
);

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
};
