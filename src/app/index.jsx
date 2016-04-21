'use strict';

import style from './styles/style.styl';

import React from 'react';
import ReactDOM from 'react-dom';

import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
//import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib';

import { incrementCounter, decrementCounter } from './store/counter';

import store from './store';

//import Routes from './routes.jsx'
import Home from './home/index.jsx';

const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        incrementCounter: bindActionCreators(incrementCounter, dispatch),
        decrementCounter: bindActionCreators(decrementCounter, dispatch)
    }
};

const NewHome = connect(mapStateToProps, mapDispatchToProps)(Home);

ReactDOM.render(
    <div>
        <Provider store={ store }>
            {/* <Routes /> */}
            <NewHome txt="This is working just fine :)"/>
        </Provider>
        {/* <DebugPanel top right bottom> */}
            {/* <DevTools store={ store } monitor={ LogMonitor } /> */}
        {/* </DebugPanel> */}
    </div>,
    document.getElementById('body')
);
