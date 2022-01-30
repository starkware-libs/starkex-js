import {
  FeeInfoExchangeRequest,
  FeeInfoUserRequest,
  OrderRequest,
  Signature
} from './gateway-types';

type GatewayRequest =
  | TransactionRequest
  | TransferRequest
  | SettlementRequest
  | FullWithdrawalRequest
  | FalseFullWithdrawalRequest
  | ConditionalTransferRequest;

interface Request {
  txId: number;
}

interface WithVault extends Request {
  vaultId: number;
}

interface WithAmount extends Request {
  tokenId: string;
  amount: number;
}

interface TransactionRequest extends WithAmount, WithVault {
  starkKey: string;
}

interface FullWithdrawalRequest extends WithVault {
  starkKey: string;
}

interface FalseFullWithdrawalRequest extends WithVault {
  requesterStarkKey: string;
}

interface TransferRequest extends Request {
  amount: number;
  nonce: number;
  senderPublicKey: string;
  senderVaultId: number;
  token: string;
  receiverPublicKey: string;
  receiverVaultId: number;
  expirationTimestamp: number;
  signature: Signature;
  feeInfoUser?: FeeInfoUserRequest;
  feeInfoExchange?: FeeInfoExchangeRequest;
}

interface ConditionalTransferRequest extends TransferRequest {
  factRegistryAddress: string;
  fact: string;
}

interface SettlementRequest extends Request {
  settlementInfo: SettlementInfoRequest;
  partyAOrder: OrderRequest;
  partyBOrder: OrderRequest;
}

interface SettlementInfoRequest {
  partyASold: number;
  partyBSold: number;
  partyAFeeInfo?: FeeInfoExchangeRequest;
  partyBFeeInfo?: FeeInfoExchangeRequest;
}

export {
  GatewayRequest,
  FalseFullWithdrawalRequest,
  FullWithdrawalRequest,
  TransactionRequest,
  TransferRequest,
  SettlementRequest,
  ConditionalTransferRequest
};
