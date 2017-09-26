export function getDefaultUserState(){
  return { name: "", email: "", roles: [] } 
}

export function userHasAdminRole(userRoles){
  return userRoles.indexOf("Admin") !== -1;
}