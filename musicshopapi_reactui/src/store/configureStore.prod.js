import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'


export const history = createBrowserHistory();

export const configureStore = preloadedState => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
      autoRehydrate(),
      applyMiddleware(routerMiddleware(history), thunk, api,),
    ),
  )

  persistStore(store);

