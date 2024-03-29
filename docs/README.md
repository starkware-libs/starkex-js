StarkEx JavaScript Client Library - v0.1.0-dev.7 / [Exports](modules.md)

<!-- logo -->
<p align="center">
  <img width='300' src="https://raw.githubusercontent.com/starkware-libs/starkex-js/master/img/starkex.svg">
</p>

<!-- tag line -->
<h4 align='center'> JavaScript SDK for StarkEx</h4>

<!-- primary badges -->
<p align="center">
  <a href="https://www.typescriptlang.org/">
    <img src='https://badges.aleen42.com/src/typescript.svg' />
  </a> 
  <a href="https://www.npmjs.com/package/@starkware-industries/starkex-js">
    <img src='https://img.shields.io/github/package-json/v/starkware-libs/starkex-js?label=npm' />
  </a>
  <a href="https://starkware.co/">
    <img src="https://img.shields.io/badge/powered_by-StarkWare-navy">
  </a>
</p>

`starkex-js` is a JavaScript wrapper around the [StarkEx API](https://starkware.co/starkex/api/)
that can be used in both NodeJS and Browser environments.

`starkex-js` is written in [ECMAScript6] and strongly typed and transpiled to ECMAScript5 using [TypeScript].

[typescript]: https://www.typescriptlang.org/
[ecmascript6]: https://github.com/ericdouglas/ES6-Learning#articles--tutorials

## Installation

_This package is Typescript ready_

```bash
// using npm
npm i @starkware-industries/starkex-js

// using yarn
yarn add @starkware-industries/starkex-js
```

## How to use it

The library is a default export.

### Browser

To use it browser, you need to use the code from `browser.js` file.

```html
<script src="path-to-local-library/browser.js"></script>
```

or via CDN

```html
<script src="https://path-to-cdn-library/browser.js"></script>
```

In this scenario, the library will be bound to the global window object with the property StarkExAPI.

`window.StarkExAPI` or simple `StarkExAPI` can be used to access the library.

If you have a toolchain available you can use an `import` statement.

```ts
import StarkExAPI from '@starkware-industries/starkex-js/browser';
```

```js
const StarkExAPI = require('@starkware-industries/starkex-js/browser');
```

_Because is a default export, here you can import it with what name you want_

### Node

For `NodeJS` environment, just replace `browser` with `node`

```ts
import StarkExAPI from 'starkex-js/node';
```

```js
const StarkExAPI = require('@starkware-industries/starkex-js/node');
```

## Usage

The object imported is a class that first needs to be instantiated:

```ts
new StarkExAPI(config: StarkExClientConfig): StarkExClient;
```

Where `config` is a configuration object of form:

```ts
interface StarkExClientConfig {
  endpoint: string;
  // optional - relevant only for node environment
  certs?: {
    cert: string;
    key: string;
    ca?: string;
  };
}
```

_Example_

```ts
const starkExAPI = new StarkExAPI({
  endpoint: 'https://gw.playground-v2.starkex.co'
});
```

_Example with certs (NodeJS environment)_

```ts
const starkExAPI = new StarkExAPI({
  endpoint: 'https://playground.starkex.co',
  certs: {
    cert: 'USER_CERT',
    key: 'USER_KEY'
  }
});
```

The `StarkExClient` object returned from the constructor exposing the different gateways existing on this API:

#### `public gateway: Gateway`

This is the StarkEx Services HTTP gateway version2 for all external trading interactions.

_Example for is_alive_

```ts
const isAlive = await starkExAPI.gateway.isAlive();
console.log(isAlive); // gateway is alive!
```

_Example for get_first_unused_tx_id_

```ts
const txId = await starkExAPI.gateway.getFirstUnusedTxId();
console.log(txId); // 69
```

_Example for a DepositRequest_

```ts
const request = {
  txId: 10234993,
  amount: "4029557120079369747",
  starkKey: "0x7c65c1e82e2e662f728b4fa42485e3a0a5d2f346baa9455e3e70682c2094cac",
  tokenId: "0x2dd48fd7a024204f7c1bd874da5e709d4713d60c8a70639eb1167b367a9c378",
  vaultId: 1654615998
};
const response = await starkExAPI.gateway.deposit(request);
console.log(response); // {txId: 10234993, code: "TRANSACTION_PENDING"}
```

_Example for a MultiTransactionRequest_

```ts
const response = await starkExClient.gateway.multiTransaction({
  txId: 10234994,
  txs: [
    {
      type: StarkExClient.GatewayRequestType.DEPOSIT_REQUEST,
      amount: "4029557120079369747",
      starkKey: "0x7c65c1e82e2e662f728b4fa42485e3a0a5d2f346baa9455e3e70682c2094cac",
      tokenId: "0x2dd48fd7a024204f7c1bd874da5e709d4713d60c8a70639eb1167b367a9c378",
      vaultId: 1654615998
    },
    {
      type: StarkExClient.GatewayRequestType.WITHDRAWAL_REQUEST,
      amount: "4029557120079369747",
      starkKey: "0x7c65c1e82e2e662f728b4fa42485e3a0a5d2f346baa9455e3e70682c2094cac",
      tokenId: "0x2dd48fd7a024204f7c1bd874da5e709d4713d60c8a70639eb1167b367a9c378",
      vaultId: 1654615998
    },
  ],
});
console.log(response); // {txId: 10234994, code: "TRANSACTION_PENDING"}
```

Full API docs for `gateway` can be found [here](docs/classes/Gateway.md).

#### `public feederGateway: FeederGateway`

This is the StarkEx Services HTTP gateway for feeder interactions. The Feeder is a gateway to the StarkEx system for
retrieving transaction batch information by external parties

_Example for get_batch_ids_

```ts
const batchIdsRequest = {
  vaultRoot: '0x46bc9d7b7716bc33b1db5b7509c0a076ab9424ba5e16dd26de8097a62f1ef1d1',
  orderRoot: '0x84695d9d13ec0eeafc07b7d0c5da3f30e42e468bc69413c2b77e62cd8cdeb9a8',
  sequenceNumber: 5678
};
const batchIds = await starkExAPI.feederGateway.getBatchIds(batchIdsRequest);
console.log(batchIds); // [123, 456]
```

Full API docs for `feederGateway` can be found [here](docs/classes/FeederGateway.md).

_Deprecated functionality_

Since StarkEx v4.5, `gateway` and `feeder gateway` apis expect to receive http requests for version 2 (`v2` prefix inside the request url).

Deprecated functions, that still uses the old version of the StarkEx api (no url prefix), are marked with a `DEPRECATED` prefix by the SDK. This was done in order to inform the user that even though those methods are still supported by the api, they will be deleted in the next version.

For example, a request to `/v2/feeder_gateway/get_batch_info` will be made by:

```ts
await starkExAPI.feederGateway.getBatchInfo(1);
```

While:

```ts
await starkExAPI.feederGateway.DEPRECATED_getBatchInfo(1);
```

will make a request to `/feeder_gateway/get_batch_info`.

---

Note: All results will be exactly the **raw** response from the API.

## API Docs

[Click here](docs/modules.md) for full API documentation.
