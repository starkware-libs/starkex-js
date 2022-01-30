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

interface WithVault {
  vaultId: number;
}

interface WithStarkKey {
  starkKey: string;
}

interface WithAmount {
  tokenId: string;
  amount: number;
}

interface TransactionRequest
  extends Request,
    WithAmount,
    WithVault,
    WithStarkKey {}

interface FullWithdrawalRequest extends Request, WithVault, WithStarkKey {}

interface FalseFullWithdrawalRequest extends Request, WithVault {
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
