[StarkEx JavaScript Client Library - v0.1.0-dev.7](../README.md) / [Exports](../modules.md) / AvailabilityGateway

# Class: AvailabilityGateway

## Hierarchy

- `GatewayBase`

  ↳ **`AvailabilityGateway`**

## Table of contents

### Constructors

- [constructor](AvailabilityGateway.md#constructor)

### Methods

- [approveNewRoots](AvailabilityGateway.md#approvenewroots)
- [getBatchData](AvailabilityGateway.md#getbatchdata)

## Constructors

### constructor

• **new AvailabilityGateway**(`config`)

#### Parameters

| Name     | Type                                                          |
| :------- | :------------------------------------------------------------ |
| `config` | [`StarkExClientConfig`](../interfaces/StarkExClientConfig.md) |

#### Overrides

GatewayBase.constructor

#### Defined in

[availability-gateway/availability-gateway.ts:8](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/availability-gateway/availability-gateway.ts#L8)

## Methods

### approveNewRoots

▸ **approveNewRoots**(`data`): `Promise`<`string`\>

#### Parameters

| Name   | Type                                                        |
| :----- | :---------------------------------------------------------- |
| `data` | [`CommitteeSignature`](../interfaces/CommitteeSignature.md) |

#### Returns

`Promise`<`string`\>

#### Defined in

[availability-gateway/availability-gateway.ts:15](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/availability-gateway/availability-gateway.ts#L15)

---

### getBatchData

▸ **getBatchData**(`batchId`): `Promise`<`Record`<`string`, `any`\>\>

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `batchId` | `number` |

#### Returns

`Promise`<`Record`<`string`, `any`\>\>

#### Defined in

[availability-gateway/availability-gateway.ts:24](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/availability-gateway/availability-gateway.ts#L24)
