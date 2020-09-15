export const environment = {
  production: true,
  apiUrl: 'http://34.87.220.195/api/task/',   // need change to domain or IP address
  auth: {
    clientID: 'hfSCrVCJSNY2QexJamnm4XiDlHIcxNbk',
    domain: 'jeffliu.au.auth0.com', // e.g., you.auth0.com
    audience: 'http://dragonexampleapi',
    auth0RedirectUri: 'http://34.87.220.195:8080/callback', // URL to return to after auth0 login
    auth0ReturnTo: 'http://34.87.220.195:8080', // URL to return to after auth0 logout
    scope: 'openid profile'
  }
};