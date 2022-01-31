[StarkEx JavaScript Client Library - v0.0.6](../README.md) / [Exports](../modules.md) / TransferRequest

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

[gateway/gateway-request.ts:46](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L46)

---

### expirationTimestamp

• **expirationTimestamp**: `number`

#### Defined in

[gateway/gateway-request.ts:53](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L53)

---

### feeInfoExchange

• `Optional` **feeInfoExchange**: [`FeeInfoExchangeRequest`](FeeInfoExchangeRequest.md)

#### Defined in

[gateway/gateway-request.ts:56](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L56)

---

### feeInfoUser

• `Optional` **feeInfoUser**: [`FeeInfoUserRequest`](FeeInfoUserRequest.md)

#### Defined in

[gateway/gateway-request.ts:55](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L55)

---

### nonce

• **nonce**: `number`

#### Defined in

[gateway/gateway-request.ts:47](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L47)

---

### receiverPublicKey

• **receiverPublicKey**: `string`

#### Defined in

[gateway/gateway-request.ts:51](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L51)

---

### receiverVaultId

• **receiverVaultId**: `number`

#### Defined in

[gateway/gateway-request.ts:52](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L52)

---

### senderPublicKey

• **senderPublicKey**: `string`

#### Defined in

[gateway/gateway-request.ts:48](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L48)

---

### senderVaultId

• **senderVaultId**: `number`

#### Defined in

[gateway/gateway-request.ts:49](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L49)

---

### signature

• **signature**: [`Signature`](Signature.md)

#### Defined in

[gateway/gateway-request.ts:54](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L54)

---

### token

• **token**: `string`

#### Defined in

[gateway/gateway-request.ts:50](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L50)

---

### txId

• **txId**: `number`

#### Inherited from

Request.txId

#### Defined in

[gateway/gateway-request.ts:17](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L17)
