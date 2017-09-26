import React, { Component } from 'react'
import styled from 'styled-components'

const Datatable = styled.table`
`

const TD = styled.td`
  padding:10px;
`;

const deleteRole = (roleId) => {
  //make http call here
  alert('we want to delete the role with id:' + roleId);
}

const mapRolesToTableRows = (roles) => {
  return roles.map(
    (element, index) => { 
      return( <tr key={index}>
                <TD>{element.Id}</TD>
                <TD>{element.Name}</TD>
                <TD><button onClick={ () => deleteRole(element.Id) }> Delete </button></TD>
              </tr>) 
    } 
  ) 
}


class RolesDataTable extends Component{

  render() {
    const { roles } = this.props;
    if( roles === undefined ){
      return null
    }
    if( roles.length === 0 ){
      return <p>No Roles Exist</p>
    }
    return (
      <Datatable>
        <thead>
          <tr>
            <th>Id</th>
            <th>Role Name</th>
          </tr>  
        </thead>
        <tbody>
          { mapRolesToTableRows(roles) }
        </tbody>    
      </Datatable>
    )
  };
}


export default RolesDataTable
