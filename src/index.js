import React from 'react';
import { render } from 'react-dom';
import './style.css';

import App from './App.jsx';

render(<App />, document.querySelector('#root'));

if (module.hot) {
  module.hot.accept(App, function() {
    console.log('Accepting the updated App module!');
  });
}
