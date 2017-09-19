const loginReducer = (state = {}, action) => {
  switch(action.type){
    case "GET_LOGIN_TOKEN_FULFILLED":{
      if(action.payload.token !== undefined){
        state = {...state, loggedIn: true, token: action.payload.token, expiry: action.payload.expiration, error: ''};
      }else{
        state = {...state, loggedIn: false, token: '', expiry: ''};
      }
      break;
    }
    case "GET_LOGIN_TOKEN_REJECTED":{
      var errorMessageForUser = 'Service Unavailable';
      if(action.payload.response !== undefined && action.payload.response.status === 400){
        errorMessageForUser = 'Incorrect Username or Password.';
      }
      state = {...state, loggedIn: false, token: '', expiry: '', error: errorMessageForUser};
      break;
    }    
    case "CLEAR_LOGIN_ERROR_MESSAGE":{
      state = {...state, error: undefined};
      break;
    }
    default:{break;}

  }
    return state;
};

export default loginReducer;