import reset from './styles/reset.styl';
import layout from './styles/layout.styl';
import colors from './styles/colors.styl';
import variables from './styles/variables.styl';

import { createStore } from 'redux';
import { counter } from './store/reducers';
import { INCREMENT, DECREMENT, ACTION_INCREMENT, ACTION_DECREMENT } from './store/actions';

const store = createStore(counter);

const onIncrement = () => store.dispatch(ACTION_INCREMENT);
const onDecrement = () => store.dispatch(ACTION_DECREMENT);

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home/index.jsx';

let render = () => ReactDOM.render(<Home count={ store.getState() } onIncrement={ onIncrement } onDecrement={ onDecrement } />, document.getElementById('body'));

store.subscribe(() => render());
render();
