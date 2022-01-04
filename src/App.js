import React from 'react';
import './App.css';
import { useState } from 'react';
import {Article, Brand, CTA, Navbar} from './components';
import { Footer, Blog, Features, Header, Possibility, WhatGPT3} from './containers';

function App() {
  return (
    <div className='App'>
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
  )
}

export default App