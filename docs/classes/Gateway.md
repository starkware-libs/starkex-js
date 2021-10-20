[StarkEx JavaScript Client Library - v0.0.3](../README.md) / [Exports](../modules.md) / Gateway

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

[gateway/gateway.ts:19](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L19)

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

[gateway/gateway.ts:63](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L63)

---

### deposit

▸ **deposit**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                |
| :-------- | :-------------------------------------------------- |
| `request` | [`DepositRequest`](../interfaces/DepositRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:45](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L45)

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

[gateway/gateway.ts:81](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L81)

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

[gateway/gateway.ts:72](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L72)

---

### getFirstUnusedTxId

▸ **getFirstUnusedTxId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[gateway/gateway.ts:33](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L33)

---

### getStarkDexAddress

▸ **getStarkDexAddress**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[gateway/gateway.ts:29](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L29)

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

[gateway/gateway.ts:23](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L23)

---

### isAlive

▸ **isAlive**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[gateway/gateway.ts:37](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L37)

---

### mint

▸ **mint**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                          |
| :-------- | :-------------------------------------------- |
| `request` | [`MintRequest`](../interfaces/MintRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:49](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L49)

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

[gateway/gateway.ts:53](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L53)

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

[gateway/gateway.ts:59](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L59)

---

### withdrawal

▸ **withdrawal**(`request`): `Promise`<`Record`<`string`, `string`\>\>

#### Parameters

| Name      | Type                                                  |
| :-------- | :---------------------------------------------------- |
| `request` | [`WithdrawRequest`](../interfaces/WithdrawRequest.md) |

#### Returns

`Promise`<`Record`<`string`, `string`\>\>

#### Defined in

[gateway/gateway.ts:41](https://github.com/starkware-industries/starkex-clientlib-js/blob/ade8477/src/lib/gateway/gateway.ts#L41)
