import React from 'react';
import {
  Footer,
  Header,
  Possiblity,
  WhatGPT3,
  Blog,
  Features,
} from './containers';
import { Cta, Brand, Navbar } from './components';
const App = () => {
  return (
    <div className="App">
      <div className="gradien__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
