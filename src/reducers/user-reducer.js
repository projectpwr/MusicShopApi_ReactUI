import jwt_decode from 'jwt-decode'

const userReducer = (state = {}, action) => {
  switch(action.type){
    case "updateUser": {
      state = {...state, name: action.payload.name, age: action.payload.age};
      break;
    }
    case "POPULATE_USER_FROM_TOKEN":{
      var userObj = jwt_decode(action.payload.token);
      state = {...state, name: userObj.user_name, email: userObj.user_email, roles: userObj.role};
      break;
    }
    default:{break;}
  }
    return state;
};

export default userReducer;