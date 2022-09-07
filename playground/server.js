/* eslint-disable */

const StarkExAPI = require('../dist/node');
const path = require('path');
const fs = require('fs');

const readCert = certType =>
  fs.readFileSync(path.resolve(`certs/user.${certType}`));

const starkExAPI = new StarkExAPI({
  gateway: {
    endpoint: 'https://gw.playground-v2.starkex.co'
  }
});

// const starkExAPIWithCerts = new StarkExAPI({
//   endpoint: 'https://playground.starkex.co',
//   certs: {
//     cert: readCert('crt'),
//     key: readCert('key')
//   }
// });

(async function () {
  console.log('Server running');
  console.log(await starkExAPI.gateway.isAlive());
  // console.log(await starkExAPIWithCerts.gateway.isAlive());
})();
