const StarkExAPI = require('../dist/node.js');
const fs = require('fs');
const path = require('path');

console.log('Server running');

const readCert = certType =>
  fs.readFileSync(path.resolve(`certs/user.${certType}`));

const starkExAPI = new StarkExAPI({
  endpoint: 'https://gw.playground-v2.starkex.co'
});

const starkExAPIWithCerts = new StarkExAPI({
  endpoint: 'https://playground.starkex.co',
  certs: {
    cert: readCert('crt'),
    key: readCert('key')
  }
});

(async function () {
  console.log(await starkExAPI.gateway.isAlive());
  console.log(await starkExAPIWithCerts.gateway.isAlive());
})();
