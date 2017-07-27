import React from 'react';
//import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
