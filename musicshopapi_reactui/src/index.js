import React from 'react';
import { render } from 'react-snapshot';

import Wrapper from './Wrapper';
import App from './App';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

render((
  <Wrapper>
    <App />
  </Wrapper>
), document.getElementById('root'))
registerServiceWorker();
