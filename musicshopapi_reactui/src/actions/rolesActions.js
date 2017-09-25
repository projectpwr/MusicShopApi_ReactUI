import axios from 'axios'
import * as apiHelpers from '../helpers/apiHelpers'

export function getRoles(token){

  return function(dispatch){
    axios.get( apiHelpers.MusicShopRolesApiURL, apiHelpers.getApiHeaders(token))
      .then((response) => {
        dispatch({type: "GET_ROLES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_ROLES_REJECTED", payload: err})
      })
  }
    
}