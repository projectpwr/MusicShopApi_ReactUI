import axios from 'axios'


export function getUserToken(loginInfo){

  return function(dispatch){

    axios.post("http://localhost:53187/api/v1/accounts/token", loginInfo)
      .then((response) => {
        dispatch({type: "GET_LOGIN_TOKEN_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_LOGIN_TOKEN_REJECTED", payload: err})
      })
  }
    
}

export function clearLoginErrorMessage(){
  return function(dispatch){
    dispatch({type: "CLEAR_LOGIN_ERROR_MESSAGE", payload: null})
  }
}

