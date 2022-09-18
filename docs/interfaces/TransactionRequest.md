[StarkEx JavaScript Client Library - v0.1.0-dev.7](../README.md) / [Exports](../modules.md) / TransactionRequest

# Interface: TransactionRequest

## Hierarchy

- [`Request`](Request.md)

- `WithAmount`

- `WithVault`

- `WithStarkKey`

  ↳ **`TransactionRequest`**

## Table of contents

### Properties

- [amount](TransactionRequest.md#amount)
- [starkKey](TransactionRequest.md#starkkey)
- [tokenId](TransactionRequest.md#tokenid)
- [txId](TransactionRequest.md#txid)
- [vaultId](TransactionRequest.md#vaultid)

## Properties

### amount

• **amount**: `string`

#### Inherited from

WithAmount.amount

#### Defined in

[gateway/gateway-request.ts:33](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L33)

---

### starkKey

• **starkKey**: `string`

#### Inherited from

WithStarkKey.starkKey

#### Defined in

[gateway/gateway-request.ts:28](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L28)

---

### tokenId

• **tokenId**: `string`

#### Inherited from

WithAmount.tokenId

#### Defined in

[gateway/gateway-request.ts:32](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L32)

---

### txId

• **txId**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

[Request](Request.md).[txId](Request.md#txid)

#### Defined in

[gateway/gateway-request.ts:20](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L20)

---

### vaultId

• **vaultId**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

WithVault.vaultId

#### Defined in

[gateway/gateway-request.ts:24](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L24)
