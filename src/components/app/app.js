import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { config } from 'Config/config';

import 'sanitize.css';

import { Header } from 'Components/header/header';
import { Photographer } from 'Components/photographer/photographer';
import { Programmer } from 'Components/programmer/programmer';
import { Functal } from 'Components/functal/functal';
import { Painter } from 'Components/painter/painter';
import { Cartoonist } from 'Components/cartoonist/cartoonist';
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
          <div className="section" data-anchor="nav-photographer">
            <Photographer />
          </div>
          <div className="section bg-gray" data-anchor="nav-programmer">
            <Programmer />
          </div>
          <div className="section bg-functal" data-anchor="nav-functal">
            <Functal />
          </div>
          <div className="section" data-anchor="nav-painter">
            <Painter />
          </div>
          <div className="section" data-anchor="nav-cartoonist">
            <Cartoonist />
          </div>
          <div className="section bg-black" data-anchor="nav-peter">
            <Links />
            <Footer />
          </div>
        </ReactFullpage.Wrapper>
      )}
    />
  </>
);

export default App;
