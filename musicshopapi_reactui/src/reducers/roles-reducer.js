const rolesReducer = (state = {}, action) => {

  switch(action.type){
    case "RESET_ROLES_ERROR":{
      state = {...state, error: undefined } ;
      break;
    } 
    case "GET_ROLES_FULFILLED":{
      state = {...state, roles: action.payload, error: undefined } ;
      break;
    }
    case "GET_ROLES_REJECTED":{
     if (action.payload.response === undefined){
      var errorMsg = action.payload.message;
      var statusCode = 500;
     }else{
      var errorMsg = action.payload.response.statusText;
      var statusCode = action.payload.response.status;
     }
      state = {...state, roles: undefined, error: {status: statusCode, statusText: errorMsg} };
      break;
    }    

    default:{break;}

  }
    return state;
};

export default rolesReducer;