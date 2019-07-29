import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';

import ConfigureStore from "./store/store";
import Application from './Application';

import './index.css';

const store = ConfigureStore({});
const element  = document.getElementById('academy-app');

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    element
);
serviceWorker.unregister();
