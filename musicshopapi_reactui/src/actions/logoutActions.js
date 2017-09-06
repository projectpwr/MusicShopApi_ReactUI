
export function logout(){

  return function(dispatch){
      dispatch({type: "USER_LOGOUT", payload: null})
  }
    
}