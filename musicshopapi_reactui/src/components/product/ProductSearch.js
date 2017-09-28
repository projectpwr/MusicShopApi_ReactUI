import React, { Component } from 'react'
import styled from 'styled-components'
import * as productsActions from '../../actions/productsActions'
import { connect } from 'react-redux'

  const StyledLabel = styled.label`
    font-size:16px;
    font-weight:bold;
    padding:20px;
  `;

  const Button = styled.button`
    margin:5px;
    padding:5px;
    &:hover{ cursor: hand; cursor: pointer;}
  `
 
  const mapStateToProps = (store) => {
    return {
      products: store.products.products,
      rolesError: store.products.error,
      token: store.login.token,
    }
  }
  


class ProductSearch extends Component {
  constructor(props){
    super(props);
    this.searchProducts = this.searchProducts.bind(this);
    this.resetSearch = this.resetSearch.bind(this);
  }

  searchProducts(){
    this.props.dispatch( productsActions.getProducts(this.props.token) );
  }
  resetSearch(){
    this.props.dispatch( productsActions.resetProductSearch() );
  }

  render(){
    return (
      <StyledLabel>
          <h3>Search Products</h3>
          <Button onClick={ this.searchProducts }>Search products</Button>
          <Button onClick={ this.resetSearch }>Reset Search</Button>
      </StyledLabel>
    );
  }
}

export default connect(mapStateToProps)(ProductSearch)
