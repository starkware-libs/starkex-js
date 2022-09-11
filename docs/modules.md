[StarkEx JavaScript Client Library - v0.1.0-dev.7](README.md) / Exports

# StarkEx JavaScript Client Library - v0.1.0-dev.7

## Table of contents

### Enumerations

- [GatewayRequestType](enums/GatewayRequestType.md)
- [OrderTypeObsolete](enums/OrderTypeObsolete.md)
- [StarkErrorCode](enums/StarkErrorCode.md)

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
- [MultiTransactionRequest](interfaces/MultiTransactionRequest.md)
- [OrderRequest](interfaces/OrderRequest.md)
- [Request](interfaces/Request.md)
- [SettlementInfoRequest](interfaces/SettlementInfoRequest.md)
- [SettlementRequest](interfaces/SettlementRequest.md)
- [Signature](interfaces/Signature.md)
- [StarkExClientConfig](interfaces/StarkExClientConfig.md)
- [TransactionRequest](interfaces/TransactionRequest.md)
- [TransferRequest](interfaces/TransferRequest.md)

### Type aliases

- [ConditionalTransferTransaction](modules.md#conditionaltransfertransaction)
- [DepositTransaction](modules.md#deposittransaction)
- [ExcludeRequest](modules.md#excluderequest)
- [FalseFullWithdrawalTransaction](modules.md#falsefullwithdrawaltransaction)
- [FullWithdrawalTransaction](modules.md#fullwithdrawaltransaction)
- [GatewayRequest](modules.md#gatewayrequest)
- [MintTransaction](modules.md#minttransaction)
- [MultiTransactionTransaction](modules.md#multitransactiontransaction)
- [NumericSequence](modules.md#numericsequence)
- [SettlementTransaction](modules.md#settlementtransaction)
- [StarkExCertsConfig](modules.md#starkexcertsconfig)
- [TransferTransaction](modules.md#transfertransaction)
- [WithdrawalTransaction](modules.md#withdrawaltransaction)

## Type aliases

### ConditionalTransferTransaction

Ƭ **ConditionalTransferTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`ConditionalTransferRequest`](interfaces/ConditionalTransferRequest.md)\> & { `type`: [`CONDITIONAL_TRANSFER_REQUEST`](enums/GatewayRequestType.md#conditional_transfer_request) }

#### Defined in

[gateway/gateway-request.ts:104](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L104)

---

### DepositTransaction

Ƭ **DepositTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`TransactionRequest`](interfaces/TransactionRequest.md)\> & { `type`: [`DEPOSIT_REQUEST`](enums/GatewayRequestType.md#deposit_request) }

#### Defined in

[gateway/gateway-request.ts:88](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L88)

---

### ExcludeRequest

Ƭ **ExcludeRequest**<`T`\>: `Pick`<`T`, `Exclude`<keyof `T`, keyof [`Request`](interfaces/Request.md)\>\>

#### Type parameters

| Name |
| :--- |
| `T`  |

#### Defined in

[gateway/gateway-request.ts:82](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L82)

---

### FalseFullWithdrawalTransaction

Ƭ **FalseFullWithdrawalTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`FalseFullWithdrawalRequest`](interfaces/FalseFullWithdrawalRequest.md)\> & { `type`: [`FALSE_FULL_WITHDRAWAL_REQUEST`](enums/GatewayRequestType.md#false_full_withdrawal_request) }

#### Defined in

[gateway/gateway-request.ts:113](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L113)

---

### FullWithdrawalTransaction

Ƭ **FullWithdrawalTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`FullWithdrawalRequest`](interfaces/FullWithdrawalRequest.md)\> & { `type`: [`FULL_WITHDRAWAL_REQUEST`](enums/GatewayRequestType.md#full_withdrawal_request) }

#### Defined in

[gateway/gateway-request.ts:109](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L109)

---

### GatewayRequest

Ƭ **GatewayRequest**: [`TransactionRequest`](interfaces/TransactionRequest.md) \| [`TransferRequest`](interfaces/TransferRequest.md) \| [`SettlementRequest`](interfaces/SettlementRequest.md) \| [`FullWithdrawalRequest`](interfaces/FullWithdrawalRequest.md) \| [`FalseFullWithdrawalRequest`](interfaces/FalseFullWithdrawalRequest.md) \| [`ConditionalTransferRequest`](interfaces/ConditionalTransferRequest.md) \| [`MultiTransactionRequest`](interfaces/MultiTransactionRequest.md)

#### Defined in

[gateway/gateway-request.ts:10](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L10)

---

### MintTransaction

Ƭ **MintTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`TransactionRequest`](interfaces/TransactionRequest.md)\> & { `type`: [`MINT_REQUEST`](enums/GatewayRequestType.md#mint_request) }

#### Defined in

[gateway/gateway-request.ts:92](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L92)

---

### MultiTransactionTransaction

Ƭ **MultiTransactionTransaction**: [`DepositTransaction`](modules.md#deposittransaction) \| [`WithdrawalTransaction`](modules.md#withdrawaltransaction) \| [`MintTransaction`](modules.md#minttransaction) \| [`SettlementTransaction`](modules.md#settlementtransaction) \| [`TransferTransaction`](modules.md#transfertransaction) \| [`ConditionalTransferTransaction`](modules.md#conditionaltransfertransaction) \| [`FullWithdrawalTransaction`](modules.md#fullwithdrawaltransaction) \| [`FalseFullWithdrawalTransaction`](modules.md#falsefullwithdrawaltransaction)

#### Defined in

[gateway/gateway-request.ts:120](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L120)

---

### NumericSequence

Ƭ **NumericSequence**: `number` \| `string`

#### Defined in

[gateway/gateway-types.ts:3](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-types.ts#L3)

---

### SettlementTransaction

Ƭ **SettlementTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`SettlementRequest`](interfaces/SettlementRequest.md)\> & { `type`: [`SETTLEMENT_REQUEST`](enums/GatewayRequestType.md#settlement_request) }

#### Defined in

[gateway/gateway-request.ts:96](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L96)

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

[starkex-client.ts:23](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/starkex-client.ts#L23)

---

### TransferTransaction

Ƭ **TransferTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`TransferRequest`](interfaces/TransferRequest.md)\> & { `type`: [`TRANSFER_REQUEST`](enums/GatewayRequestType.md#transfer_request) }

#### Defined in

[gateway/gateway-request.ts:100](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L100)

---

### WithdrawalTransaction

Ƭ **WithdrawalTransaction**: [`ExcludeRequest`](modules.md#excluderequest)<[`TransactionRequest`](interfaces/TransactionRequest.md)\> & { `type`: [`WITHDRAWAL_REQUEST`](enums/GatewayRequestType.md#withdrawal_request) }

#### Defined in

[gateway/gateway-request.ts:84](https://github.com/starkware-libs/starkex-js/blob/26f82a7/src/lib/gateway/gateway-request.ts#L84)
