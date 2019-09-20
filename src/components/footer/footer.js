import React from 'react';

import styled from 'styled-components';
import { colors } from 'Styles/colors';

const Wrapper = styled.footer`
  text-align: right;
  padding: 1rem;
  font-size: 75%;
  color: ${colors.primary};
`;

export const Footer = () => <Wrapper>&copy; 2019 Peter Orum</Wrapper>;
