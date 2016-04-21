import { combineReducers, compose, applyMiddleware, createStore } from 'redux';
import { devTools, persistState } from 'redux-devtools';

import caw from './caw';
import counter from './counter';

let reducer = combineReducers({ caw, counter });

import thunk from 'redux-thunk';
let middleware = [thunk];

/*let finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools(),
    persistState(
        window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
)(createStore);*/

let finalCreateStore = compose(applyMiddleware(...middleware))(createStore);

let store = finalCreateStore(reducer);

export default store;
