export function getDefaultUserState(){
  return { name: "", email: "", roles: [] } 
}

export function userHasAdminRole(userRoles){
  if(userRoles === undefined){
    return false;
  }
  return userRoles.indexOf("Admin") !== -1;
}