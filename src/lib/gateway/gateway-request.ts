import {GatewayRequestType} from './gateway-request-type';
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
  | ConditionalTransferRequest
  | MultiTransactionRequest;

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
  tokenId: NumericSequence;
  amount: NumericSequence;
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
  amount: NumericSequence;
  nonce: NumericSequence;
  senderPublicKey: string;
  senderVaultId: NumericSequence;
  token: string;
  receiverPublicKey: string;
  receiverVaultId: NumericSequence;
  expirationTimestamp: NumericSequence;
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

// Transactions' type and request-body tuples
// Use a base request type but exclude Request interface
type ExcludeRequest<T> = Pick<T, Exclude<keyof T, keyof Request>>;

type WithdrawalTransaction = ExcludeRequest<TransactionRequest> & {
  type: GatewayRequestType.WITHDRAWAL_REQUEST;
};

type DepositTransaction = ExcludeRequest<TransactionRequest> & {
  type: GatewayRequestType.DEPOSIT_REQUEST;
};

type MintTransaction = ExcludeRequest<TransactionRequest> & {
  type: GatewayRequestType.MINT_REQUEST;
};

type SettlementTransaction = ExcludeRequest<SettlementRequest> & {
  type: GatewayRequestType.SETTLEMENT_REQUEST;
};

type TransferTransaction = ExcludeRequest<TransferRequest> & {
  type: GatewayRequestType.TRANSFER_REQUEST;
};

type ConditionalTransferTransaction =
  ExcludeRequest<ConditionalTransferRequest> & {
    type: GatewayRequestType.CONDITIONAL_TRANSFER_REQUEST;
  };

type FullWithdrawalTransaction = ExcludeRequest<FullWithdrawalRequest> & {
  type: GatewayRequestType.FULL_WITHDRAWAL_REQUEST;
};

type FalseFullWithdrawalTransaction =
  ExcludeRequest<FalseFullWithdrawalRequest> & {
    type: GatewayRequestType.FALSE_FULL_WITHDRAWAL_REQUEST;
  };

// Each Tx of a MultiTransaction Transaction should be of a following type -

type MultiTransactionTransaction =
  | DepositTransaction
  | WithdrawalTransaction
  | MintTransaction
  | SettlementTransaction
  | TransferTransaction
  | ConditionalTransferTransaction
  | FullWithdrawalTransaction
  | FalseFullWithdrawalTransaction;

interface MultiTransactionRequest extends Request {
  txs: Array<MultiTransactionTransaction>;
}

export {
  GatewayRequest,
  FalseFullWithdrawalRequest,
  FullWithdrawalRequest,
  TransactionRequest,
  TransferRequest,
  SettlementRequest,
  ConditionalTransferRequest,
  SettlementInfoRequest,
  MultiTransactionRequest
};
