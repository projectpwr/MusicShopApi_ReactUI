import { Provider } from 'react-redux'
import React from 'react'
import { render } from 'react-snapshot';
import AppWrapper from './AppWrapper'
import registerServiceWorker from './registerServiceWorker';

import { configureStore, history } from './store/configureStore'

const store = configureStore()


const loggedIn = store.getState();
console.log(loggedIn);

const domrender = () => {
  render((
    <Provider store={store}>   
      <AppWrapper history={history} loggedIn={store.getState().login.loggedIn} />
    </Provider>
    ), document.getElementById('root'))
}

store.dispatch({type:'toggleLoggedIn', payload:{loggedIn:true}});


domrender()

registerServiceWorker();

  if (module.hot) {
    // Reload components
    module.hot.accept('./AppWrapper', () => {
      domrender()
    })
  }


