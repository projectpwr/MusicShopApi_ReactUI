const rolesReducer = (state = {}, action) => {

  switch(action.type){
    case "GET_ROLES_FULFILLED":{
        state = {...state,  roles: action.payload } ;
      break;
    }
    case "GET_ROLES_REJECTED":{
     
      state = {...state, roles: [], error: action.payload.response};
      break;
    }    

    default:{break;}

  }
    return state;
};

export default rolesReducer;