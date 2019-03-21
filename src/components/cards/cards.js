import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Cards = ({ children }) => <Wrapper>{children}</Wrapper>;

Cards.propTypes = {
  children: PropTypes.node,
};

export const Card = ({ title, content }) => (
  <div>
    <div>{title}</div>
    <div>{content}</div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.element,
};
