import {
  FeeInfoExchangeRequest,
  FeeInfoUserRequest,
  OrderRequest,
  Signature
} from './gateway-types';

type GatewayRequest =
  | DepositRequest
  | MintRequest
  | WithdrawRequest
  | FullWithdrawalRequest
  | FalseFullWithdrawalRequest
  | TransferRequest
  | SettlementRequest
  | ConditionalTransferRequest;

interface DepositRequest {
  vaultId: number;
  starkKey: string;
  tokenId: string;
  amount: number;
}

interface MintRequest {
  vaultId: number;
  starkKey: string;
  tokenId: string;
  amount: number;
}

interface WithdrawRequest {
  vaultId: number;
  starkKey: string;
  tokenId: string;
  amount: number;
}

interface FullWithdrawalRequest {
  vaultId: number;
  starkKey: string;
}

interface FalseFullWithdrawalRequest {
  vaultId: number;
  starkKey: string;
}

interface TransferRequest {
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

interface SettlementRequest {
  settlementInfo: SettlementInfoRequest;
  partyAOrder: OrderRequest;
  partyBOrder: OrderRequest;
}

interface ConditionalTransferRequest {
  amount: number;
  nonce: number;
  senderPublicKey: string;
  senderVaultId: number;
  token: string;
  receiverPublicKey: string;
  receiverVaultId: number;
  expirationTimestamp: number;
  signature: Signature;
  factRegistryAddress: string;
  fact: string;
}

interface SettlementInfoRequest {
  partyASold: number;
  partyBSold: number;
  partyAFeeInfo?: FeeInfoExchangeRequest;
  partyBFeeInfo?: FeeInfoExchangeRequest;
}

export {
  GatewayRequest,
  DepositRequest,
  MintRequest,
  WithdrawRequest,
  FullWithdrawalRequest,
  FalseFullWithdrawalRequest,
  TransferRequest,
  SettlementRequest,
  ConditionalTransferRequest
};
