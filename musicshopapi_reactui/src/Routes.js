import React from 'react'
import { Route, Switch } from 'react-router'
import HomeContainer from './components/Home/HomeContainer'
import RandomContainer from './components/Random/RandomContainer'
import StrangeContainer from './components/Strange/StrangeContainer'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/Strange" component={StrangeContainer} />
      <Route path="/Random" component={RandomContainer} />
    </Switch>
  </div>
)

export default routes

/*<Route component={NoMatch} />*/
