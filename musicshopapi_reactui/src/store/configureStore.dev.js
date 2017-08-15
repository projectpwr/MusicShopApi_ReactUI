import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import api from '../middleware/api'

import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import logger from 'redux-logger'
import rootReducer from '../Reducers'
//import DevTools from '../containers/DevTools'


export const history = createBrowserHistory();

export const configureStore = preloadedState => {

  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
      applyMiddleware(routerMiddleware(history), thunk, api, logger),
    ),
  )
 
// Hot reloading
  if (module.hot) {
    // Reload reducers
    module.hot.accept(rootReducer, () => {
      store.replaceReducer(connectRouter(history)(rootReducer))
    })
  }

  return store
}

