interface OrderRequest {
  orderType: OrderTypeObsolete;
  nonce: number;
  amountSell: number;
  amountBuy: number;
  tokenSell: string;
  tokenBuy: string;
  vaultIdSell: number;
  vaultIdBuy: number;
  expirationTimestamp: number;
  feeInfo?: FeeInfoUserRequest;
}

interface Signature {
  r: string;
  s?: string;
}

interface FeeInfoUserRequest {
  feeLimit: number;
  sourceVaultId: number;
  tokenId: string;
}

interface FeeInfoExchangeRequest {
  destinationStarkKey: string;
  destinationVaultId: number;
  feeTaken: number;
}

enum OrderTypeObsolete {
  SETTLEMENT,
  TRANSFER
}

export {
  OrderRequest,
  Signature,
  FeeInfoUserRequest,
  FeeInfoExchangeRequest,
  OrderTypeObsolete
};
