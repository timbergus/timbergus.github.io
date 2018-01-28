import React, { Component } from 'react';

import config from './app.json';

import './app.css';

export class App extends Component {
  render() {
    return(
      <main className="proverb">
        <h1>{config.proverb}</h1>
      </main>
    );
  }
}
