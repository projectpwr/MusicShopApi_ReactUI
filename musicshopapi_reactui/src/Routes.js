import React from 'react'
import { Route, Switch } from 'react-router'
import HomeContainer from './components/home/HomeContainer'
import RandomContainer from './components/random/RandomContainer'
import StrangeContainer from './components/strange/StrangeContainer'

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
