import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/store';
import LayoutComponent from './components/Layout.component';

const appElement = document.getElementById('application');
const store = configureStore({});

ReactDOM.render(
    <Provider store={store}>
        <LayoutComponent/>
    </Provider>,
    appElement
);
