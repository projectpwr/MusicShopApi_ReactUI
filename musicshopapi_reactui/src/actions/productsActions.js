import axios from 'axios'
import * as apiHelpers from '../helpers/apiHelpers'

export function getProducts(token){

  return function(dispatch){
    /*axios.get( apiHelpers.MusicShopRolesApiURL, apiHelpers.getApiHeaders(token))
      .then((response) => {
        dispatch({type: "GET_ROLES_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "GET_ROLES_REJECTED", payload: err})
      })*/
      let products = [
                      {Name: "Product A", Price: 1.23, Category: "Instrument"},
                      {Name: "Product B", Price: 4.56, Category: "Instrument"},
                      {Name: "Product C", Price: 7.89, Category: "Instrument"}
                     ];
      dispatch({type: "GET_PRODUCTS_FULFILLED", payload: products})
  }
    
}

export function resetProductSearch(){
  return function(dispatch){
    dispatch({type: "RESET_PRODUCT_SEARCH"})
  }
}