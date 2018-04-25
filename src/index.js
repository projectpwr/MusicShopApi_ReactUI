import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-snapshot';
import Wrapper from './Wrapper'
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'connected-react-router'
import { configureStore, history } from './store/configureStore'
import routes from './Routes'

const store = configureStore()


if( store.getState().login.loggedIn === undefined ){
  store.dispatch({type: "POPULATE_STUB_USER", payload: ""})  
}    

const domrender = () => {
  render((
    <Provider store={store}>   
      <ConnectedRouter history={history}>  
        <Wrapper>
          { routes }
        </Wrapper>
      </ConnectedRouter>
    </Provider>
    ), document.getElementById('root'))
}

domrender()

registerServiceWorker();

  if (module.hot) {
    // Reload components
    module.hot.accept('./Wrapper', () => {
      domrender()
    })
  }


