import React from 'react'
import { Route, Switch } from 'react-router'
import HomePage from './containers/HomePage'
import LoginPage from './containers/LoginPage'
import AboutPage from './containers/AboutPage'
import ProductPage from './containers/ProductPage'
import BasketPage from './containers/BasketPage'
import AdminPage from './containers/AdminPage'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/About" component={AboutPage} />
      <Route path="/Products" component={ProductPage} />
      <Route path="/Basket" component={BasketPage} />
      <Route path="/Admin" component={AdminPage} />
    </Switch>
  </div>
)

export default routes

/*<Route component={NoMatch} />*/
