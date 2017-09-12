
export const MusicShopApiDomainAndPort = "http://localhost:53187";

export const MusicShopTokenApiURL = MusicShopApiDomainAndPort + "/api/v1/accounts/token";
export const MusicShopRolesApiURL = MusicShopApiDomainAndPort + "/api/v1/roles";


export function getApiHeaders(token){
  return {headers:{'Accept': 'application/json', 'Authorization': `Bearer ${token}`}};
}