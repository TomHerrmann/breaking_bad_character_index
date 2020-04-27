import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './style.css';

import App from './App.jsx';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
