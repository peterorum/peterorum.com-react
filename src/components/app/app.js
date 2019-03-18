import React from 'react';

import styled from 'styled-components';

import 'sanitize.css';

import { Header } from 'Components/header/header';
import { Photographer } from 'Components/photographer/photographer';
import { Functal } from 'Components/functal/functal';
import { Painter } from 'Components/painter/painter';
import { Links } from 'Components/links/links';
import { Footer } from 'Components/footer/footer';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const App = () => (
  <>
    <Header />
    <Container>
      <Photographer />
    </Container>
    <Container>
      <Functal />
    </Container>
    <Container>
      <Painter />
    </Container>
    <Container>
      <Links />
    </Container>
    <Footer />
  </>
);

export default App;
