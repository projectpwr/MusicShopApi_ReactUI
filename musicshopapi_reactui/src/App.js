import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './Routes'
import Wrapper from './Wrapper';

const App = ({ history }) => {
  return (
    <Wrapper>
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </Wrapper>   
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
