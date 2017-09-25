import React, { Component } from 'react'
import styled from 'styled-components'

  const StyledLabel = styled.label`
    font-size:16px;
    font-weight:bold;
    padding:20px;
  `;
 
class ProductSearch extends Component {

  render(){
    return (
      <StyledLabel>
        <form>
          Search form to go here
        </form>
      </StyledLabel>
    );
  }
}

export default ProductSearch;