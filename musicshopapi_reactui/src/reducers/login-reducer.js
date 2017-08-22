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
      state = {...state, loggedIn: false, token: '', expiry: '', error: 'Incorrect Username or Password.'};
      break;
    }    
    default:{break;}
  }
    return state;
};

export default loginReducer;