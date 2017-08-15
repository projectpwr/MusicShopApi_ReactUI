import React, { Component } from 'react';
import styled from 'styled-components';

  const StyledLabel = styled.label`
    font-size:16px;
    font-weight:bold;
    padding:20px;
  `;
 
class Label extends Component {

  render(){
    return (
      <StyledLabel for="{this.props.for}">{this.props.children}</StyledLabel>
    );
  }
}

export default Label;