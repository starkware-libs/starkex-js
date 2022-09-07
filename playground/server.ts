/* eslint-disable */

import StarkExAPI from '../dist/node';
import fs from 'fs';
import path from 'path';

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
