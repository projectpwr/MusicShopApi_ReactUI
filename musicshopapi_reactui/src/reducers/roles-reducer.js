const rolesReducer = (state = {}, action) => {

  switch(action.type){
    case "GET_ROLES_FULFILLED":{
        state = {...state,  roles: action.payload, error: undefined } ;
      break;
    }
    case "GET_ROLES_REJECTED":{
     
      state = {...state, roles: undefined, error: action.payload.response};
      break;
    }    

    default:{break;}

  }
    return state;
};

export default rolesReducer;