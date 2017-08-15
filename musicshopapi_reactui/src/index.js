
//import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'

import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-snapshot';
import { browserHistory } from 'react-router'
//import { syncHistoryWithStore } from 'react-router-redux'
import App from './App'
import registerServiceWorker from './registerServiceWorker';

import { configureStore, history } from './store/configureStore'

const store = configureStore()
//const history = syncHistoryWithStore(browserHistory, store)

//const history = createBrowserHistory()


/*
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(...middlewares),
  ),
)*/



//<AppContainer></AppContainer> 
const domrender = () => {
  render((
      <Provider store={store}>         
        <App history={history} />
      </Provider>
    ), document.getElementById('root'))
}

domrender()
registerServiceWorker();

  if (module.hot) {
    // Reload components
    module.hot.accept('./App', () => {
      domrender()
    })
  }


