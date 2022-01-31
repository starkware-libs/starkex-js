[StarkEx JavaScript Client Library - v0.0.6](README.md) / Exports

# StarkEx JavaScript Client Library - v0.0.6

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
- [FalseFullWithdrawalRequest](interfaces/FalseFullWithdrawalRequest.md)
- [FeeInfoExchangeRequest](interfaces/FeeInfoExchangeRequest.md)
- [FeeInfoUserRequest](interfaces/FeeInfoUserRequest.md)
- [FullWithdrawalRequest](interfaces/FullWithdrawalRequest.md)
- [OrderRequest](interfaces/OrderRequest.md)
- [SettlementInfoRequest](interfaces/SettlementInfoRequest.md)
- [SettlementRequest](interfaces/SettlementRequest.md)
- [Signature](interfaces/Signature.md)
- [StarkExClientConfig](interfaces/StarkExClientConfig.md)
- [TransactionRequest](interfaces/TransactionRequest.md)
- [TransferRequest](interfaces/TransferRequest.md)

### Type aliases

- [GatewayRequest](modules.md#gatewayrequest)
- [StarkExCertsConfig](modules.md#starkexcertsconfig)

## Type aliases

### GatewayRequest

Ƭ **GatewayRequest**: [`TransactionRequest`](interfaces/TransactionRequest.md) \| [`TransferRequest`](interfaces/TransferRequest.md) \| [`SettlementRequest`](interfaces/SettlementRequest.md) \| [`FullWithdrawalRequest`](interfaces/FullWithdrawalRequest.md) \| [`FalseFullWithdrawalRequest`](interfaces/FalseFullWithdrawalRequest.md) \| [`ConditionalTransferRequest`](interfaces/ConditionalTransferRequest.md)

#### Defined in

[gateway/gateway-request.ts:8](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/gateway/gateway-request.ts#L8)

---

### StarkExCertsConfig

Ƭ **StarkExCertsConfig**: `Object`

#### Type declaration

| Name   | Type     |
| :----- | :------- |
| `ca?`  | `string` |
| `cert` | `string` |
| `key`  | `string` |

#### Defined in

[starkex-client.ts:20](https://github.com/starkware-libs/starkex-js/blob/3031d40/src/lib/starkex-client.ts#L20)
