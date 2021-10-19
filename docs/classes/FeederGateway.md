[StarkEx JavaScript Client Library - v0.0.1](../README.md) / FeederGateway

# Class: FeederGateway

## Hierarchy

- `GatewayBase`

  ↳ **`FeederGateway`**

## Table of contents

### Constructors

- [constructor](FeederGateway.md#constructor)

### Methods

- [getBatchEnclosingIds](FeederGateway.md#getbatchenclosingids)
- [getBatchIds](FeederGateway.md#getbatchids)
- [getBatchInfo](FeederGateway.md#getbatchinfo)
- [getLastBatchId](FeederGateway.md#getlastbatchid)

## Constructors

### constructor

• **new FeederGateway**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`StarkExClientConfig`](../interfaces/StarkExClientConfig.md) |

#### Overrides

GatewayBase.constructor

#### Defined in

[feeder-gateway/feeder-gateway.ts:7](https://github.com/starkware-industries/starkex-clientlib-js/blob/c509284/src/lib/feeder-gateway/feeder-gateway.ts#L7)

## Methods

### getBatchEnclosingIds

▸ **getBatchEnclosingIds**(`batchId`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchId` | `number` |

#### Returns

`Promise`<`number`[]\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:11](https://github.com/starkware-industries/starkex-clientlib-js/blob/c509284/src/lib/feeder-gateway/feeder-gateway.ts#L11)

___

### getBatchIds

▸ **getBatchIds**(`request`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BatchIdsRequest`](../interfaces/BatchIdsRequest.md) |

#### Returns

`Promise`<`number`[]\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:17](https://github.com/starkware-industries/starkex-clientlib-js/blob/c509284/src/lib/feeder-gateway/feeder-gateway.ts#L17)

___

### getBatchInfo

▸ **getBatchInfo**(`batchId`): `Promise`<`Record`<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchId` | `number` |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:24](https://github.com/starkware-industries/starkex-clientlib-js/blob/c509284/src/lib/feeder-gateway/feeder-gateway.ts#L24)

___

### getLastBatchId

▸ **getLastBatchId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:30](https://github.com/starkware-industries/starkex-clientlib-js/blob/c509284/src/lib/feeder-gateway/feeder-gateway.ts#L30)
