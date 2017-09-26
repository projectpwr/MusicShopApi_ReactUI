export function getDefaultUserState(){
  return { name: "", email: "", roles: [] } 
}

export function authenticateUserIsAdmin(userRoles){
  if( userHasAdminRole(userRoles) ){
    return "Access Denied"
  }
}

export function userHasAdminRole(userRoles){
  return userRoles.indexOf("Admin") !== -1;
}