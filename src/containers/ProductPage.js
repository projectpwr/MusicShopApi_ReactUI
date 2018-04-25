import React, { Component } from 'react'
import ProductSearch from '../components/product/ProductSearch'
import ProductDataTable from '../components/product/ProductDataTable'
import { connect } from 'react-redux'
import * as productsActions from '../actions/productsActions'

const mapStateToProps = (store) => {
  return {
    products: store.products.products,
    rolesError: store.products.error,
    token: store.login.token,
  }
}

const searchProducts = (token) => {
  productsActions.getProducts(token);
}


class ProductPage extends Component {
  render() {
    const { products, token } = this.props;
    return (
        <div>
          <div>
            <ProductSearch token={ token }/>
            <ProductDataTable products={ products } />
          </div>
        </div> 
    );
  }
}


export default connect(mapStateToProps)(ProductPage)