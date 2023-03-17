const fs = require('fs');
module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://portal.sso.us-east-1.amazonaws.com/saml/assertion/MDIyNDM1NzgxNjM5X2lucy00NGExMDY1YWI1ZDUxYmVh',
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || fs.readFileSync('awsssocert.pem', 'utf8')
      }
    }
  }
};
