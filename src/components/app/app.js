import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { config } from 'Config/config';

import 'sanitize.css';

import { Header } from 'Components/header/header';
import { Photographer } from 'Components/photographer/photographer';
import { Programmer } from 'Components/programmer/programmer';
import { Functal } from 'Components/functal/functal';
import { Painter } from 'Components/painter/painter';
import { Links } from 'Components/links/links';
import { Footer } from 'Components/footer/footer';

import { GlobalStyle } from 'Styles/global-styles';

const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <ReactFullpage
      licenseKey={config.fullPageKey}
      render={() => (
        <ReactFullpage.Wrapper>
          <div className="section">
            <Photographer />
          </div>
          <div className="section">
            <Programmer />
          </div>
          <div className="section">
            <Functal />
          </div>
          <div className="section">
            <Painter />
          </div>
          <div className="section">
            <Links />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
    <Footer />
  </>
);

export default App;
