import {
  FeeInfoExchangeRequest,
  FeeInfoUserRequest,
  NumericSequence,
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
  txId: NumericSequence;
}

interface WithVault {
  vaultId: NumericSequence;
}

interface WithStarkKey {
  starkKey: string;
}

interface WithAmount {
  tokenId: string;
  amount: string;
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
  amount: string;
  nonce: NumericSequence;
  senderPublicKey: string;
  senderVaultId: NumericSequence;
  token: string;
  receiverPublicKey: string;
  receiverVaultId: NumericSequence;
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
  ConditionalTransferRequest,
  SettlementInfoRequest
};
