import React, { Component } from 'react';

import { src, trace } from 'images/meme.png';
// import meme from 'images/meme.png';

import config from './app.json';

import './app.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleOrigianl: false
    };
  }

  handleLoad(event) {
    event.currentTarget.style.opacity = 1;
  }

  render() {
    return(
      <main className="proverb">
        <h1>{config.proverb}</h1>
        <div className="image-container">
          <img src={trace} alt="meme" />
          <img src={src} alt="meme" className="hidden" onLoad={this.handleLoad} />
          {/* <img src={meme} alt="meme" /> */}
        </div>

      </main>
    );
  }
}
