enum GatewayRequestType {
  SETTLEMENT_REQUEST = 'SettlementRequest',
  TRANSFER_REQUEST = 'TransferRequest',
  CONDITIONAL_TRANSFER_REQUEST = 'ConditionalTransferRequest',
  DEPOSIT_REQUEST = 'DepositRequest',
  MINT_REQUEST = 'MintRequest',
  WITHDRAWAL_REQUEST = 'WithdrawalRequest',
  FULL_WITHDRAWAL_REQUEST = 'FullWithdrawalRequest',
  FALSE_FULL_WITHDRAWAL_REQUEST = 'FalseFullWithdrawalRequest',
  MULTI_TRANSACTION_REQUEST = 'MultiTransactionRequest'
}

export {GatewayRequestType};
