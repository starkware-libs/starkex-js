// Represents a numeric (only) sequence to hold numbers 
// that cannot fit into the build-in JS number type
type NumericSequence = number | string;

interface OrderRequest {
  orderType: OrderTypeObsolete;
  nonce: NumericSequence;
  amountSell: NumericSequence;
  amountBuy: NumericSequence;
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
  tokenId: NumericSequence;
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
  NumericSequence,
  OrderRequest,
  Signature,
  FeeInfoUserRequest,
  FeeInfoExchangeRequest,
  OrderTypeObsolete
};
