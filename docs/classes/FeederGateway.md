[StarkEx JavaScript Client Library - v0.1.0-dev.7](../README.md) / [Exports](../modules.md) / FeederGateway

# Class: FeederGateway

## Hierarchy

- `GatewayBase`

  ↳ **`FeederGateway`**

## Table of contents

### Constructors

- [constructor](FeederGateway.md#constructor)

### Methods

- [DEPRECATED\_getBatchIds](FeederGateway.md#deprecated_getbatchids)
- [DEPRECATED\_getBatchInfo](FeederGateway.md#deprecated_getbatchinfo)
- [getBatchEnclosingIds](FeederGateway.md#getbatchenclosingids)
- [getBatchInfo](FeederGateway.md#getbatchinfo)
- [getLastBatchId](FeederGateway.md#getlastbatchid)
- [getPrevBatchId](FeederGateway.md#getprevbatchid)
- [isAlive](FeederGateway.md#isalive)
- [isReady](FeederGateway.md#isready)

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

[feeder-gateway/feeder-gateway.ts:8](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L8)

## Methods

### DEPRECATED\_getBatchIds

▸ **DEPRECATED_getBatchIds**(`request`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`BatchIdsRequest`](../interfaces/BatchIdsRequest.md) |

#### Returns

`Promise`<`number`[]\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:29](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L29)

___

### DEPRECATED\_getBatchInfo

▸ **DEPRECATED_getBatchInfo**(`batchId`): `Promise`<`Record`<`string`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchId` | `number` |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:40](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L40)

___

### getBatchEnclosingIds

▸ **getBatchEnclosingIds**(`batchId`): `Promise`<`number`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchId` | `number` |

#### Returns

`Promise`<`number`[]\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:23](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L23)

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

[feeder-gateway/feeder-gateway.ts:52](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L52)

___

### getLastBatchId

▸ **getLastBatchId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:58](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L58)

___

### getPrevBatchId

▸ **getPrevBatchId**(`batchId`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `batchId` | `number` |

#### Returns

`Promise`<`number`\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:62](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L62)

___

### isAlive

▸ **isAlive**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:15](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L15)

___

### isReady

▸ **isReady**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[feeder-gateway/feeder-gateway.ts:19](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/feeder-gateway/feeder-gateway.ts#L19)
