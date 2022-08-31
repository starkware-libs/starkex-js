import {GatewayRequestType} from './gateway-request-type';
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
  | ConditionalTransferRequest
  | MultiTransactionRequest;

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

// Transactions' type and request-body tuples

type WithdrawalTransaction = TransactionRequest & {
  type: GatewayRequestType.WITHDRAWAL_REQUEST;
};

type DepositTransaction = TransactionRequest & {
  type: GatewayRequestType.DEPOSIT_REQUEST;
};

type MintTransaction = TransactionRequest & {
  type: GatewayRequestType.MINT_REQUEST;
};

type SettlementTransaction = SettlementRequest & {
  type: GatewayRequestType.SETTLEMENT_REQUEST;
};

type TransferTransaction = TransferRequest & {
  type: GatewayRequestType.TRANSFER_REQUEST;
};

type ConditionalTransferTransaction = ConditionalTransferRequest & {
  type: GatewayRequestType.CONDITIONAL_TRANSFER_REQUEST;
};

type FullWithdrawalTransaction = FullWithdrawalRequest & {
  type: GatewayRequestType.FULL_WITHDRAWAL_REQUEST;
};

type FalseFullWithdrawalTransaction = FalseFullWithdrawalRequest & {
  type: GatewayRequestType.FALSE_FULL_WITHDRAWAL_REQUEST;
};

// Each Tx of a MultiTransaction Transaction should be from a following type -
// Use a base request type but exclude 'txId' property

type MultiTransactionTransaction = Omit<DepositTransaction
  | WithdrawalTransaction
  | MintTransaction
  | SettlementTransaction
  | TransferTransaction
  | ConditionalTransferTransaction
  | FullWithdrawalTransaction
  | FalseFullWithdrawalTransaction, 'txId'>;

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
