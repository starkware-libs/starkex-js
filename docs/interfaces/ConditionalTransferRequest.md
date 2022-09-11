[StarkEx JavaScript Client Library - v0.1.0-dev.7](../README.md) / [Exports](../modules.md) / ConditionalTransferRequest

# Interface: ConditionalTransferRequest

## Hierarchy

- [`TransferRequest`](TransferRequest.md)

  ↳ **`ConditionalTransferRequest`**

## Table of contents

### Properties

- [amount](ConditionalTransferRequest.md#amount)
- [expirationTimestamp](ConditionalTransferRequest.md#expirationtimestamp)
- [fact](ConditionalTransferRequest.md#fact)
- [factRegistryAddress](ConditionalTransferRequest.md#factregistryaddress)
- [feeInfoExchange](ConditionalTransferRequest.md#feeinfoexchange)
- [feeInfoUser](ConditionalTransferRequest.md#feeinfouser)
- [nonce](ConditionalTransferRequest.md#nonce)
- [receiverPublicKey](ConditionalTransferRequest.md#receiverpublickey)
- [receiverVaultId](ConditionalTransferRequest.md#receivervaultid)
- [senderPublicKey](ConditionalTransferRequest.md#senderpublickey)
- [senderVaultId](ConditionalTransferRequest.md#sendervaultid)
- [signature](ConditionalTransferRequest.md#signature)
- [token](ConditionalTransferRequest.md#token)
- [txId](ConditionalTransferRequest.md#txid)

## Properties

### amount

• **amount**: `string`

#### Inherited from

[TransferRequest](TransferRequest.md).[amount](TransferRequest.md#amount)

#### Defined in

[gateway/gateway-request.ts:49](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L49)

---

### expirationTimestamp

• **expirationTimestamp**: `number`

#### Inherited from

[TransferRequest](TransferRequest.md).[expirationTimestamp](TransferRequest.md#expirationtimestamp)

#### Defined in

[gateway/gateway-request.ts:56](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L56)

---

### fact

• **fact**: `string`

#### Defined in

[gateway/gateway-request.ts:64](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L64)

---

### factRegistryAddress

• **factRegistryAddress**: `string`

#### Defined in

[gateway/gateway-request.ts:63](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L63)

---

### feeInfoExchange

• `Optional` **feeInfoExchange**: [`FeeInfoExchangeRequest`](FeeInfoExchangeRequest.md)

#### Inherited from

[TransferRequest](TransferRequest.md).[feeInfoExchange](TransferRequest.md#feeinfoexchange)

#### Defined in

[gateway/gateway-request.ts:59](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L59)

---

### feeInfoUser

• `Optional` **feeInfoUser**: [`FeeInfoUserRequest`](FeeInfoUserRequest.md)

#### Inherited from

[TransferRequest](TransferRequest.md).[feeInfoUser](TransferRequest.md#feeinfouser)

#### Defined in

[gateway/gateway-request.ts:58](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L58)

---

### nonce

• **nonce**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

[TransferRequest](TransferRequest.md).[nonce](TransferRequest.md#nonce)

#### Defined in

[gateway/gateway-request.ts:50](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L50)

---

### receiverPublicKey

• **receiverPublicKey**: `string`

#### Inherited from

[TransferRequest](TransferRequest.md).[receiverPublicKey](TransferRequest.md#receiverpublickey)

#### Defined in

[gateway/gateway-request.ts:54](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L54)

---

### receiverVaultId

• **receiverVaultId**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

[TransferRequest](TransferRequest.md).[receiverVaultId](TransferRequest.md#receivervaultid)

#### Defined in

[gateway/gateway-request.ts:55](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L55)

---

### senderPublicKey

• **senderPublicKey**: `string`

#### Inherited from

[TransferRequest](TransferRequest.md).[senderPublicKey](TransferRequest.md#senderpublickey)

#### Defined in

[gateway/gateway-request.ts:51](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L51)

---

### senderVaultId

• **senderVaultId**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

[TransferRequest](TransferRequest.md).[senderVaultId](TransferRequest.md#sendervaultid)

#### Defined in

[gateway/gateway-request.ts:52](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L52)

---

### signature

• **signature**: [`Signature`](Signature.md)

#### Inherited from

[TransferRequest](TransferRequest.md).[signature](TransferRequest.md#signature)

#### Defined in

[gateway/gateway-request.ts:57](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L57)

---

### token

• **token**: `string`

#### Inherited from

[TransferRequest](TransferRequest.md).[token](TransferRequest.md#token)

#### Defined in

[gateway/gateway-request.ts:53](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L53)

---

### txId

• **txId**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

[TransferRequest](TransferRequest.md).[txId](TransferRequest.md#txid)

#### Defined in

[gateway/gateway-request.ts:20](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L20)
