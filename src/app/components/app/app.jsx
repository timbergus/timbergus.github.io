import React, { Component } from 'react';
import { Button, Icon, Label } from 'semantic-ui-react';

import meme from 'images/meme.png';

import config from './app.json';

import { getRandom, arr, add } from '../../utils/math';

import './app.css';

export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visibleOrigianl: false,
      result: 0
    };
  }

  handleLoad(event) {
    event.currentTarget.style.opacity = 1;
  }

  handleClick() {
    add(getRandom(100), getRandom(100)).then(result => {
      this.image.style.width = `${Math.max(result, 100)}px`;
      this.setState({ result });
    });

    arr([1, 2, 3, 4, 5]).then(result => console.log(result));
  }

  render() {
    return(
      <main>
        <h1>{config.proverb}</h1>
        <Button as='div' labelPosition='right' onClick={this.handleClick.bind(this)}>
          <Button color='blue'>
            <Icon name='random' />
            Random
          </Button>
          <Label as='a' basic color='blue' pointing='left'>{this.state.result}</Label>
        </Button>
        <div className="image-container" ref={c => this.image = c}>
          <img src={meme.trace} alt="meme" />
          <img src={meme.src} alt="meme" className="hidden" onLoad={this.handleLoad} />
        </div>
      </main>
    );
  }
}
