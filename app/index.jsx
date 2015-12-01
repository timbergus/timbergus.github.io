import reset from './styles/reset.styl';
import layout from './styles/layout.styl';
import colors from './styles/colors.styl';
import variables from './styles/variables.styl';

import { createStore } from 'redux';
import reducers from './store/reducers/index';
import { incrementCounter, decrementCounter } from './store/reducers/counter';

const store = createStore(reducers);

const onIncrement = () => store.dispatch(incrementCounter());
const onDecrement = () => store.dispatch(decrementCounter());

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home/index.jsx';

let render = () => ReactDOM.render(<Home count={ store.getState().counter } onIncrement={ onIncrement } onDecrement={ onDecrement } />, document.getElementById('body'));

store.subscribe(() => render());
render();
