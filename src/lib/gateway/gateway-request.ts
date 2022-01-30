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
  | ConditionalTransferRequest;

interface Request {
  txId: number;
}

interface TransactionRequest extends Request {
  vaultId: number;
  starkKey: string;
  tokenId?: string;
  amount?: number;
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
  TransactionRequest,
  TransferRequest,
  SettlementRequest,
  ConditionalTransferRequest
};
