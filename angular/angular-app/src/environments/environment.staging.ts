export const environment = {
  production: false,
  apiUrl: 'http://localhost/api/task/',   // need change to domain or IP address
  auth: {
    clientID: 'hfSCrVCJSNY2QexJamnm4XiDlHIcxNbk',
    domain: 'jeffliu.au.auth0.com', // e.g., you.auth0.com
    audience: 'http://dragonexampleapi',
    auth0RedirectUri: 'http://localhost:8080/callback', // URL to return to after auth0 login
    auth0ReturnTo: 'http://localhost:8080', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
};