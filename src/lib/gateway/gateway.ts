import {camelToUnderscore} from '../../utils';
import {GatewayBase} from '../gateway-base';
import {StarkExClientConfig} from '../starkex-client';
import {
  ConditionalTransferRequest,
  GatewayRequest,
  SettlementRequest,
  TransactionRequest,
  TransferRequest
} from './gateway-request';
import {GatewayRequestType} from './gateway-request-type';
import {GatewayServiceType} from './gateway-service-type';

class Gateway extends GatewayBase {
  constructor(config: StarkExClientConfig) {
    super(config, '/v2/gateway');
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
    request: TransactionRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(
      GatewayRequestType.FULL_WITHDRAWAL_REQUEST,
      request
    );
  }

  public falseFullWithdrawal(
    request: TransactionRequest
  ): Promise<Record<string, string>> {
    return this.addTransaction(
      GatewayRequestType.FALSE_FULL_WITHDRAWAL_REQUEST,
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
