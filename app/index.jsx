import reset from './styles/reset.styl';
import layout from './styles/layout.styl';
import colors from './styles/colors.styl';
import variables from './styles/variables.styl';

import { createStore, applyMiddleware, compose, bindActionCreators } from 'redux';
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import reducers from './store/reducers/index';
import { incrementCounter, decrementCounter } from './store/reducers/counter';

let middleware = [thunk];

let finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools(),
    persistState(
        window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
)(createStore);

const store = finalCreateStore(reducers);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';

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

let render = () => ReactDOM.render(
    <div>
        <Provider store={ store }>
            <NewHome txt="This is working just fine :)"/>
        </Provider>
        <DebugPanel top right bottom>
            <DevTools store={ store } monitor={ LogMonitor } />
        </DebugPanel>
    </div>
    , document.getElementById('body')
);

render();
