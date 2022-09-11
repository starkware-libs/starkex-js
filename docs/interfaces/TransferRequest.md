[StarkEx JavaScript Client Library - v0.1.0-dev.7](../README.md) / [Exports](../modules.md) / TransferRequest

# Interface: TransferRequest

## Hierarchy

- [`Request`](Request.md)

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

• **amount**: `string`

#### Defined in

[gateway/gateway-request.ts:49](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L49)

___

### expirationTimestamp

• **expirationTimestamp**: `number`

#### Defined in

[gateway/gateway-request.ts:56](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L56)

___

### feeInfoExchange

• `Optional` **feeInfoExchange**: [`FeeInfoExchangeRequest`](FeeInfoExchangeRequest.md)

#### Defined in

[gateway/gateway-request.ts:59](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L59)

___

### feeInfoUser

• `Optional` **feeInfoUser**: [`FeeInfoUserRequest`](FeeInfoUserRequest.md)

#### Defined in

[gateway/gateway-request.ts:58](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L58)

___

### nonce

• **nonce**: [`NumericSequence`](../modules.md#numericsequence)

#### Defined in

[gateway/gateway-request.ts:50](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L50)

___

### receiverPublicKey

• **receiverPublicKey**: `string`

#### Defined in

[gateway/gateway-request.ts:54](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L54)

___

### receiverVaultId

• **receiverVaultId**: [`NumericSequence`](../modules.md#numericsequence)

#### Defined in

[gateway/gateway-request.ts:55](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L55)

___

### senderPublicKey

• **senderPublicKey**: `string`

#### Defined in

[gateway/gateway-request.ts:51](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L51)

___

### senderVaultId

• **senderVaultId**: [`NumericSequence`](../modules.md#numericsequence)

#### Defined in

[gateway/gateway-request.ts:52](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L52)

___

### signature

• **signature**: [`Signature`](Signature.md)

#### Defined in

[gateway/gateway-request.ts:57](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L57)

___

### token

• **token**: `string`

#### Defined in

[gateway/gateway-request.ts:53](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L53)

___

### txId

• **txId**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

[Request](Request.md).[txId](Request.md#txid)

#### Defined in

[gateway/gateway-request.ts:20](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L20)
