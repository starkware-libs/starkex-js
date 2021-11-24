[StarkEx JavaScript Client Library - v0.0.3](README.md) / Exports

# StarkEx JavaScript Client Library - v0.0.3

## Table of contents

### Enumerations

- [OrderTypeObsolete](enums/OrderTypeObsolete.md)

### Classes

- [AvailabilityGateway](classes/AvailabilityGateway.md)
- [FeederGateway](classes/FeederGateway.md)
- [Gateway](classes/Gateway.md)
- [StarkExClient](classes/StarkExClient.md)

### Interfaces

- [BatchIdsRequest](interfaces/BatchIdsRequest.md)
- [CommitteeSignature](interfaces/CommitteeSignature.md)
- [ConditionalTransferRequest](interfaces/ConditionalTransferRequest.md)
- [DepositRequest](interfaces/DepositRequest.md)
- [FalseFullWithdrawalRequest](interfaces/FalseFullWithdrawalRequest.md)
- [FeeInfoExchangeRequest](interfaces/FeeInfoExchangeRequest.md)
- [FeeInfoUserRequest](interfaces/FeeInfoUserRequest.md)
- [FullWithdrawalRequest](interfaces/FullWithdrawalRequest.md)
- [MintRequest](interfaces/MintRequest.md)
- [OrderRequest](interfaces/OrderRequest.md)
- [SettlementRequest](interfaces/SettlementRequest.md)
- [Signature](interfaces/Signature.md)
- [StarkExClientConfig](interfaces/StarkExClientConfig.md)
- [TransferRequest](interfaces/TransferRequest.md)
- [WithdrawRequest](interfaces/WithdrawRequest.md)

### Type aliases

- [GatewayRequest](modules.md#gatewayrequest)
- [StarkExCertsConfig](modules.md#starkexcertsconfig)

## Type aliases

### GatewayRequest

Ƭ **GatewayRequest**: [`DepositRequest`](interfaces/DepositRequest.md) \| [`MintRequest`](interfaces/MintRequest.md) \| [`WithdrawRequest`](interfaces/WithdrawRequest.md) \| [`FullWithdrawalRequest`](interfaces/FullWithdrawalRequest.md) \| [`FalseFullWithdrawalRequest`](interfaces/FalseFullWithdrawalRequest.md) \| [`TransferRequest`](interfaces/TransferRequest.md) \| [`SettlementRequest`](interfaces/SettlementRequest.md) \| [`ConditionalTransferRequest`](interfaces/ConditionalTransferRequest.md)

#### Defined in

[gateway/gateway-request.ts:8](https://github.com/starkware-libs/starkex-js/blob/37187cc/src/lib/gateway/gateway-request.ts#L8)

___

### StarkExCertsConfig

Ƭ **StarkExCertsConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ca?` | `string` |
| `cert` | `string` |
| `key` | `string` |

#### Defined in

[starkex-client.ts:20](https://github.com/starkware-libs/starkex-js/blob/37187cc/src/lib/starkex-client.ts#L20)
