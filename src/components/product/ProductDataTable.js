import React, { Component } from 'react'
import styled from 'styled-components'

const Datatable = styled.table`
`

const TD = styled.td`
  padding:10px;
`;

const addToBasket = (productName) => {
  //make http call here
  alert('Lets add this to the basket!:' + productName);
}

const mapProductsToTableRows = (products) => {
  return products.map(
    (element, index) => { 
      return( <tr key={index}>
                <TD>{element.Name}</TD>
                <TD>{element.Price}</TD>
                <TD>{element.Category}</TD>
                <TD><button onClick={ () => addToBasket(element.Name) }> Add To Basket </button></TD>
              </tr>) 
    } 
  ) 
}


class ProductsDataTable extends Component{

  render() {
    const { products } = this.props;
    if( products === undefined || products === null){
      return null
    }
    if( products.length === 0 ){
      return <p>No Products Exist</p>
    }
    return (
      <Datatable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>  
        </thead>
        <tbody>
          { mapProductsToTableRows(products) }
        </tbody>    
      </Datatable>
    )
  };
}


export default ProductsDataTable
