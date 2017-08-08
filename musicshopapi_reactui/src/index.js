
//import { AppContainer } from 'react-hot-loader'
import { applyMiddleware, compose, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import React from 'react'
import { render } from 'react-snapshot';
import App from './App'
import rootReducer from './Reducers'

import registerServiceWorker from './registerServiceWorker';


const history = createBrowserHistory()


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      logger
    ),
  ),
)

store.subscribe(() => {
  console.log("actual change:", store.getState());
})
store.dispatch({type: "updateUser", payload: {name: "Will", age:1}});
store.dispatch({type: "updateUser", payload: {name: "JIm", age:4}});
store.dispatch({type: "updateUser", payload: {name: "Will", age:1}});

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


/* strange issue with react-hot reloading at present: https://github.com/gaearon/react-hot-loader/issues/603
upgrading source-map not appearing to work right now... something about yarn cache filenames being the same..
Pattern ["source-map@^0.5.6"] is trying to unpack in the same destination "C:\\Users\\MYUSER\\AppData\\Local\\Yarn\\cache\\v1\\npm-source-map-0.5.6-
75ce38f52bf0733c5a7f0c118d81334a2bb5f412" as pattern ["source-map@^0.5.0","source-map@0.5.6","source-map@^0.5.3","source-map@^0.5.6","source-map@~0.5.3","source
-map@~0.5.1","source-map@0.5.x"]. This could result in a non deterministic behavior, skipping.
*/ 
// Hot reloading
/*
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    domrender()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(rootReducer))
  })
}
*/


