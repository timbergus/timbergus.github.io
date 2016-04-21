"use strict";

import style from "./styles/style.styl";

import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
//import { DevTools, DebugPanel, LogMonitor } from "redux-devtools/lib";

import store from "./store";

import Routes from "./routes.jsx";
import Home from "./home/index.jsx";

ReactDOM.render(
    <div>
        <Provider store={ store }>
            <Routes />
        </Provider>
        {/* <DebugPanel top right bottom> */}
            {/* <DevTools store={ store } monitor={ LogMonitor } /> */}
        {/* </DebugPanel> */}
    </div>,
    document.getElementById("body")
);
