// Represents a numeric (only) sequence to hold numbers
// that cannot fit into the built-in JS number type
type NumericSequence = number | string;

interface OrderRequest {
  orderType: OrderTypeObsolete;
  nonce: NumericSequence;
  amountSell: string;
  amountBuy: string;
  tokenSell: string;
  tokenBuy: string;
  vaultIdSell: NumericSequence;
  vaultIdBuy: NumericSequence;
  expirationTimestamp: number;
  feeInfo?: FeeInfoUserRequest;
}

interface Signature {
  r: string;
  s?: string;
}

interface FeeInfoUserRequest {
  feeLimit: number;
  sourceVaultId: NumericSequence;
  tokenId: string;
}

interface FeeInfoExchangeRequest {
  destinationStarkKey: string;
  destinationVaultId: NumericSequence;
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
  NumericSequence,
  OrderTypeObsolete
};
