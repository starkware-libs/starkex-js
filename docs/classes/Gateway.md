[StarkEx JavaScript Client Library - v0.0.4](../README.md) / [Exports](../modules.md) / Gateway

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
- [mint](Gateway.md#mint)
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

[gateway/gateway.ts:17](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L17)

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

[gateway/gateway.ts:63](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L63)

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

[gateway/gateway.ts:45](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L45)

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

[gateway/gateway.ts:81](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L81)

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

[gateway/gateway.ts:72](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L72)

---

### getFirstUnusedTxId

▸ **getFirstUnusedTxId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[gateway/gateway.ts:31](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L31)

---

### getStarkDexAddress

▸ **getStarkDexAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[gateway/gateway.ts:27](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L27)

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

[gateway/gateway.ts:21](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L21)

---

### isAlive

▸ **isAlive**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[gateway/gateway.ts:35](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L35)

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

[gateway/gateway.ts:49](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L49)

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

[gateway/gateway.ts:53](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L53)

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

[gateway/gateway.ts:59](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L59)

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

[gateway/gateway.ts:39](https://github.com/starkware-libs/starkex-js/blob/5a44e1f/src/lib/gateway/gateway.ts#L39)
