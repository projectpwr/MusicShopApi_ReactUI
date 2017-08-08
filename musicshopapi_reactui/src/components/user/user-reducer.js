const userReducer = (state = {}, action) => {
  switch(action.type){
    case "updateUser": {
      state = {...state, name: action.payload.name, age: action.payload.age};
      break;
    }
    default:{break;}
  }
    return state;
};

export default userReducer;