import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './style.css';

import AppContainer from './App.jsx';

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept(AppContainer, function() {
    console.log('Accepting the updated App module!');
  });
}
