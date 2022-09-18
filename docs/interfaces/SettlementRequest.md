[StarkEx JavaScript Client Library - v0.1.0-dev.7](../README.md) / [Exports](../modules.md) / SettlementRequest

# Interface: SettlementRequest

## Hierarchy

- [`Request`](Request.md)

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

[gateway/gateway-request.ts:69](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L69)

---

### partyBOrder

• **partyBOrder**: [`OrderRequest`](OrderRequest.md)

#### Defined in

[gateway/gateway-request.ts:70](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L70)

---

### settlementInfo

• **settlementInfo**: [`SettlementInfoRequest`](SettlementInfoRequest.md)

#### Defined in

[gateway/gateway-request.ts:68](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L68)

---

### txId

• **txId**: [`NumericSequence`](../modules.md#numericsequence)

#### Inherited from

[Request](Request.md).[txId](Request.md#txid)

#### Defined in

[gateway/gateway-request.ts:20](https://github.com/starkware-libs/starkex-js/blob/d7a28bb/src/lib/gateway/gateway-request.ts#L20)
