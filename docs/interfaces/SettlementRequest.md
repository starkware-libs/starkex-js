[StarkEx JavaScript Client Library - v0.0.6-0](../README.md) / [Exports](../modules.md) / SettlementRequest

# Interface: SettlementRequest

## Hierarchy

- `Request`

  ↳ **`SettlementRequest`**

## Table of contents

### Properties

- [partyAOrder](SettlementRequest.md#partyaorder)
- [partyBOrder](SettlementRequest.md#partyborder)
- [settlementInfo](SettlementRequest.md#settlementinfo)
- [txId](SettlementRequest.md#txid)

## Properties

### partyAOrder

• **partyAOrder**: [`OrderRequest`](OrderRequest.md)

#### Defined in

[gateway/gateway-request.ts:66](https://github.com/starkware-libs/starkex-js/blob/f906f83/src/lib/gateway/gateway-request.ts#L66)

---

### partyBOrder

• **partyBOrder**: [`OrderRequest`](OrderRequest.md)

#### Defined in

[gateway/gateway-request.ts:67](https://github.com/starkware-libs/starkex-js/blob/f906f83/src/lib/gateway/gateway-request.ts#L67)

---

### settlementInfo

• **settlementInfo**: [`SettlementInfoRequest`](SettlementInfoRequest.md)

#### Defined in

[gateway/gateway-request.ts:65](https://github.com/starkware-libs/starkex-js/blob/f906f83/src/lib/gateway/gateway-request.ts#L65)

---

### txId

• **txId**: `number`

#### Inherited from

Request.txId

#### Defined in

[gateway/gateway-request.ts:17](https://github.com/starkware-libs/starkex-js/blob/f906f83/src/lib/gateway/gateway-request.ts#L17)
