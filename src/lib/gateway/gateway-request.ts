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
  txId?: number;
  vaultId: number;
  starkKey: string;
  tokenId: string;
  amount: number;
}

interface MintRequest {
  txId?: number;
  vaultId: number;
  starkKey: string;
  tokenId: string;
  amount: number;
}

interface WithdrawRequest {
  txId?: number;
  vaultId: number;
  starkKey: string;
  tokenId: string;
  amount: number;
}

interface FullWithdrawalRequest {
  txId?: number;
  vaultId: number;
  starkKey: string;
}

interface FalseFullWithdrawalRequest {
  txId?: number;
  vaultId: number;
  starkKey: string;
}

interface TransferRequest {
  txId?: number;
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
  txId?: number;
  settlementInfo: SettlementInfoRequest;
  partyAOrder: OrderRequest;
  partyBOrder: OrderRequest;
}

interface ConditionalTransferRequest {
  txId?: number;
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
