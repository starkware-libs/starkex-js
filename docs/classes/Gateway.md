[StarkEx JavaScript Client Library - v0.1.0-dev.7](../README.md) / [Exports](../modules.md) / Gateway

# Class: Gateway

## Hierarchy

- `GatewayBase`

  ↳ **`Gateway`**

## Table of contents

### Constructors

- [constructor](Gateway.md#constructor)

### Methods

- [conditionalTransfer](Gateway.md#conditionaltransfer)
- [deposit](Gateway.md#deposit)
- [falseFullWithdrawal](Gateway.md#falsefullwithdrawal)
- [fullWithdrawal](Gateway.md#fullwithdrawal)
- [getFirstUnusedTxId](Gateway.md#getfirstunusedtxid)
- [getStarkDexAddress](Gateway.md#getstarkdexaddress)
- [getTransaction](Gateway.md#gettransaction)
- [isAlive](Gateway.md#isalive)
- [markTransactionForReplacement](Gateway.md#marktransactionforreplacement)
- [mint](Gateway.md#mint)
- [multiTransaction](Gateway.md#multitransaction)
- [settlement](Gateway.md#settlement)
- [transfer](Gateway.md#transfer)
- [withdrawal](Gateway.md#withdrawal)

## Constructors

### constructor

• **new Gateway**(`config`)

#### Parameters

| Name     | Type                                                          |
| :------- | :------------------------------------------------------------ |
| `config` | [`StarkExClientConfig`](../interfaces/StarkExClientConfig.md) |

#### Overrides

GatewayBase.constructor

#### Defined in

[gateway/gateway.ts:19](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L19)

## Methods

### conditionalTransfer

▸ **conditionalTransfer**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                                        |
| :-------- | :-------------------------------------------------------------------------- |
| `request` | [`ConditionalTransferRequest`](../interfaces/ConditionalTransferRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:72](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L72)

---

### deposit

▸ **deposit**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `request` | [`TransactionRequest`](../interfaces/TransactionRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:54](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L54)

---

### falseFullWithdrawal

▸ **falseFullWithdrawal**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                                        |
| :-------- | :-------------------------------------------------------------------------- |
| `request` | [`FalseFullWithdrawalRequest`](../interfaces/FalseFullWithdrawalRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:90](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L90)

---

### fullWithdrawal

▸ **fullWithdrawal**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                              |
| :-------- | :---------------------------------------------------------------- |
| `request` | [`FullWithdrawalRequest`](../interfaces/FullWithdrawalRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:81](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L81)

---

### getFirstUnusedTxId

▸ **getFirstUnusedTxId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[gateway/gateway.ts:33](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L33)

---

### getStarkDexAddress

▸ **getStarkDexAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[gateway/gateway.ts:29](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L29)

---

### getTransaction

▸ **getTransaction**(`txId`): `Promise`<`Record`<`string`, `any`\>\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `txId` | `number` |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

#### Defined in

[gateway/gateway.ts:23](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L23)

---

### isAlive

▸ **isAlive**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[gateway/gateway.ts:44](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L44)

---

### markTransactionForReplacement

▸ **markTransactionForReplacement**(`txId`): `Promise`<`string`\>

#### Parameters

| Name   | Type                                               |
| :----- | :------------------------------------------------- |
| `txId` | [`NumericSequence`](../modules.md#numericsequence) |

#### Returns

`Promise`<`string`\>

#### Defined in

[gateway/gateway.ts:37](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L37)

---

### mint

▸ **mint**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `request` | [`TransactionRequest`](../interfaces/TransactionRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:58](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L58)

---

### multiTransaction

▸ **multiTransaction**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                                  |
| :-------- | :-------------------------------------------------------------------- |
| `request` | [`MultiTransactionRequest`](../interfaces/MultiTransactionRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:99](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L99)

---

### settlement

▸ **settlement**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                      |
| :-------- | :-------------------------------------------------------- |
| `request` | [`SettlementRequest`](../interfaces/SettlementRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:62](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L62)

---

### transfer

▸ **transfer**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `request` | [`TransferRequest`](../interfaces/TransferRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:68](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L68)

---

### withdrawal

▸ **withdrawal**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                        |
| :-------- | :---------------------------------------------------------- |
| `request` | [`TransactionRequest`](../interfaces/TransactionRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:48](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway.ts#L48)
