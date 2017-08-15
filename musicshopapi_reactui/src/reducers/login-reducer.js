const loginReducer = (state = {}, action) => {
  switch(action.type){
    case "toggleLoggedIn": {
      state = {...state, loggedIn: action.payload.loggedIn};
      break;
    }
    default:{break;}
  }
    return state;
};

export default loginReducer;