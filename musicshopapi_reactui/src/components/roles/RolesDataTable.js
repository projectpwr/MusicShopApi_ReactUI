import React, { Component } from 'react'


const mapRolesToTableRows = (roles) => {
  roles.map(
    (element, index) => { 
      return(<tr key={index}><td>{element.Id}</td><td>{element.Name}</td></tr>) 
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
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Role Name</th>
          </tr>  
        </thead>
        <tbody>
          { mapRolesToTableRows(roles) }
        </tbody>    
      </table>
    )
  };
}


export default RolesDataTable
