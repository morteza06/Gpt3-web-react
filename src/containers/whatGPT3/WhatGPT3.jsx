import React from 'react';
import { Feature } from '../../components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section_margin" id='whatgpt3'>
      <div className="gpt3__whatgp3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default WhatGPT3