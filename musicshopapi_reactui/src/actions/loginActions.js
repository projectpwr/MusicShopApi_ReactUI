export function setLoggedInOrOut(newValue){
  return {
    type: "toggleLoggedIn",
    payload: newValue
  }
}

