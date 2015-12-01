import reset from './styles/reset.styl';
import layout from './styles/layout.styl';
import colors from './styles/colors.styl';
import variables from './styles/variables.styl';

import React from 'react';
import ReactDOM from 'react-dom';

import Home from './home/index.jsx';

ReactDOM.render(<Home />, document.getElementById('body'));
