import axios from 'axios'
import * as apiHelpers from '../helpers/apiHelpers'


export function getUserToken(loginInfo){

  return function(dispatch){
    let tokenURL = apiHelpers.getMusicShopApiDomainAndPort() + "/api/v1/accounts/token";

    axios.post(tokenURL, loginInfo)
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

