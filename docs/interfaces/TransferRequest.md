[StarkEx JavaScript Client Library - v0.0.4](../README.md) / [Exports](../modules.md) / TransferRequest

# Interface: TransferRequest

## Hierarchy

- `Request`

  ↳ **`TransferRequest`**

  ↳↳ [`ConditionalTransferRequest`](ConditionalTransferRequest.md)

## Table of contents

### Properties

- [amount](TransferRequest.md#amount)
- [expirationTimestamp](TransferRequest.md#expirationtimestamp)
- [feeInfoExchange](TransferRequest.md#feeinfoexchange)
- [feeInfoUser](TransferRequest.md#feeinfouser)
- [nonce](TransferRequest.md#nonce)
- [receiverPublicKey](TransferRequest.md#receiverpublickey)
- [receiverVaultId](TransferRequest.md#receivervaultid)
- [senderPublicKey](TransferRequest.md#senderpublickey)
- [senderVaultId](TransferRequest.md#sendervaultid)
- [signature](TransferRequest.md#signature)
- [token](TransferRequest.md#token)
- [txId](TransferRequest.md#txid)

## Properties

### amount

• **amount**: `number`

#### Defined in

[gateway/gateway-request.ts:42](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L42)

---

### expirationTimestamp

• **expirationTimestamp**: `number`

#### Defined in

[gateway/gateway-request.ts:49](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L49)

---

### feeInfoExchange

• `Optional` **feeInfoExchange**: [`FeeInfoExchangeRequest`](FeeInfoExchangeRequest.md)

#### Defined in

[gateway/gateway-request.ts:52](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L52)

---

### feeInfoUser

• `Optional` **feeInfoUser**: [`FeeInfoUserRequest`](FeeInfoUserRequest.md)

#### Defined in

[gateway/gateway-request.ts:51](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L51)

---

### nonce

• **nonce**: `number`

#### Defined in

[gateway/gateway-request.ts:43](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L43)

---

### receiverPublicKey

• **receiverPublicKey**: `string`

#### Defined in

[gateway/gateway-request.ts:47](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L47)

---

### receiverVaultId

• **receiverVaultId**: `number`

#### Defined in

[gateway/gateway-request.ts:48](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L48)

---

### senderPublicKey

• **senderPublicKey**: `string`

#### Defined in

[gateway/gateway-request.ts:44](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L44)

---

### senderVaultId

• **senderVaultId**: `number`

#### Defined in

[gateway/gateway-request.ts:45](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L45)

---

### signature

• **signature**: [`Signature`](Signature.md)

#### Defined in

[gateway/gateway-request.ts:50](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L50)

---

### token

• **token**: `string`

#### Defined in

[gateway/gateway-request.ts:46](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L46)

---

### txId

• **txId**: `number`

#### Inherited from

Request.txId

#### Defined in

[gateway/gateway-request.ts:17](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway-request.ts#L17)
