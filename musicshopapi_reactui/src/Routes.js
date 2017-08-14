import React from 'react'
import { Route, Switch } from 'react-router'
import HomeContainer from './components/home/HomeContainer'
import LoginPage from './components/login/LoginPage'
import AboutPage from './components/about/AboutPage'
import ProductPage from './components/product/ProductPage'
import BasketPage from './components/basket/BasketPage'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/Login" component={LoginPage} />
      <Route path="/About" component={AboutPage} />
      <Route path="/Products" component={ProductPage} />
      <Route path="/Basket" component={BasketPage} />
    </Switch>
  </div>
)

export default routes

/*<Route component={NoMatch} />*/
