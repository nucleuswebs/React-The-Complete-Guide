import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Application from './Application';
import * as serviceWorker from './serviceWorker';

const element  = document.getElementById('academy-app');

ReactDOM.render(<Application />, element);
serviceWorker.unregister();
