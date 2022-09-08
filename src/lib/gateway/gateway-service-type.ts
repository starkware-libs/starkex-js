enum GatewayServiceType {
  ADD_TRANSACTION = 'add_transaction',
  GET_TRANSACTION = 'get_transaction',
  IS_ALIVE = 'is_alive',
  GET_FIRST_UNUSED_TX_ID = 'testing/get_first_unused_tx_id',
  GET_STARK_DEX_ADDRESS = 'testing/get_stark_dex_address',
  MARK_TRANSACTION_FOR_REPLACEMENT = 'mark_transaction_for_replacement'
}

export {GatewayServiceType};
