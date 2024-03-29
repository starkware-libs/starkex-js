import {camelToUnderscore, ApiVersion} from '../../utils';
import {GatewayBase} from '../gateway-base';
import {StarkExClientConfig} from '../starkex-client';
import {
  FalseFullWithdrawalRequest,
  FullWithdrawalRequest,
  ConditionalTransferRequest,
  GatewayRequest,
  SettlementRequest,
  TransactionRequest,
  TransferRequest,
  MultiTransactionRequest
} from './gateway-request';
import {GatewayRequestType} from './gateway-request-type';
import {GatewayServiceType} from './gateway-service-type';
import {NumericSequence} from './gateway-types';

class Gateway extends GatewayBase {
  constructor(config: StarkExClientConfig) {
    super(config, {gatewayRoute: 'gateway', defaultVersion: ApiVersion.V2});
  }

  public getTransaction(txId: number): Promise<Record<string, any>> {
    return this.makeRequest(
      `${GatewayServiceType.GET_TRANSACTION}?tx_id=${txId}`
    );
  }

  public getStarkDexAddress(): Promise<string> {
    return this.makeRequest(GatewayServiceType.GET_STARK_DEX_ADDRESS);
  }

  public getFirstUnusedTxId(): Promise<number> {
    return this.makeRequest(GatewayServiceType.GET_FIRST_UNUSED_TX_ID);
  }

  public markTransactionForReplacement(txId: NumericSequence): Promise<string> {
    return this.makeRequest(
      `${GatewayServiceType.MARK_TRANSACTION_FOR_REPLACEMENT}?tx_id=${txId}`,
      'POST'
    );
  }

  public isAlive(): Promise<string> {
    return this.makeRequest(GatewayServiceType.IS_ALIVE);
  }

  public withdrawal(
    request: TransactionRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(GatewayRequestType.WITHDRAWAL_REQUEST, request);
  }

  public deposit(request: TransactionRequest): Promise<Record<string, string>> {
    return this.addTransaction(GatewayRequestType.DEPOSIT_REQUEST, request);
  }

  public mint(request: TransactionRequest): Promise<Record<string, string>> {
    return this.addTransaction(GatewayRequestType.MINT_REQUEST, request);
  }

  public settlement(
    request: SettlementRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(GatewayRequestType.SETTLEMENT_REQUEST, request);
  }

  public transfer(request: TransferRequest): Promise<Record<string, string>> {
    return this.addTransaction(GatewayRequestType.TRANSFER_REQUEST, request);
  }

  public conditionalTransfer(
    request: ConditionalTransferRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(
      GatewayRequestType.CONDITIONAL_TRANSFER_REQUEST,
      request
    );
  }

  public fullWithdrawal(
    request: FullWithdrawalRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(
      GatewayRequestType.FULL_WITHDRAWAL_REQUEST,
      request
    );
  }

  public falseFullWithdrawal(
    request: FalseFullWithdrawalRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(
      GatewayRequestType.FALSE_FULL_WITHDRAWAL_REQUEST,
      request
    );
  }

  public multiTransaction(
    request: MultiTransactionRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(
      GatewayRequestType.MULTI_TRANSACTION_REQUEST,
      request
    );
  }

  private async addTransaction(
    type: GatewayRequestType,
    request: GatewayRequest
  ) {
    const {txId, ...nativeRequest} = request;
    const formattedRequest = camelToUnderscore(nativeRequest);
    try {
      const response = await this.makeRequest(
        GatewayServiceType.ADD_TRANSACTION,
        'POST',
        {
          tx: {
            type,
            ...formattedRequest
          },
          tx_id: txId
        }
      );
      return {
        txId,
        ...response
      };
    } catch (err) {
      //TODO: error handling
      return Promise.reject({...err, txId});
    }
  }
}

export {Gateway};
