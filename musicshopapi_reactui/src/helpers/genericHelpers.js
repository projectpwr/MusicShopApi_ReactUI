export function userHasAdminRole(userRoles){
  return userRoles.indexOf("Admin") !== -1;
}

export function getDefaultUserState(){
  return { name: "", email: "", roles: [] } 
}