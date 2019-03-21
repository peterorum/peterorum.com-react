import React from 'react';

import 'sanitize.css';

import { Header } from 'Components/header/header';
import { Photographer } from 'Components/photographer/photographer';
import { Functal } from 'Components/functal/functal';
import { Painter } from 'Components/painter/painter';
import { Links } from 'Components/links/links';
import { Footer } from 'Components/footer/footer';

import { GlobalStyle } from 'Styles/global-styles';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Photographer />
    <Functal />
    <Painter />
    <Links />
    <Footer />
  </>
);

export default App;
