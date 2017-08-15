import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from './Routes'
import Wrapper from './Wrapper';

const App = ({ history }) => {
  return (
      <ConnectedRouter history={history}>
        <Wrapper>
          { routes }
        </Wrapper>   
      </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
