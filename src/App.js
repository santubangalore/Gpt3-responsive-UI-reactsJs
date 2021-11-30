import React from 'react';
import {Blog, Footer, Possibility, Header, Features, WhatGPT3 } from './containers';

import {Article, Brand, CTA, feature, Navbar} from './components';

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

    </div>
  );
}

export default App;
