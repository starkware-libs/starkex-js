import {camelToUnderscore} from '../../utils';
import {GatewayBase} from '../gateway-base';
import {StarkExClientConfig} from '../starkex-client';
import {
  ConditionalTransferRequest,
  DepositRequest,
  FalseFullWithdrawalRequest,
  FullWithdrawalRequest,
  GatewayRequest,
  MintRequest,
  SettlementRequest,
  TransferRequest,
  WithdrawRequest
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

  public withdrawal(request: WithdrawRequest): Promise<Record<string, string>> {
    return this._addTransaction(GatewayRequestType.WITHDRAWAL_REQUEST, request);
  }

  public deposit(request: DepositRequest): Promise<Record<string, string>> {
    return this._addTransaction(GatewayRequestType.DEPOSIT_REQUEST, request);
  }

  public mint(request: MintRequest): Promise<Record<string, string>> {
    return this._addTransaction(GatewayRequestType.MINT_REQUEST, request);
  }

  public settlement(
    request: SettlementRequest
  ): Promise<Record<string, string>> {
    return this._addTransaction(GatewayRequestType.SETTLEMENT_REQUEST, request);
  }

  public transfer(request: TransferRequest): Promise<Record<string, string>> {
    return this._addTransaction(GatewayRequestType.TRANSFER_REQUEST, request);
  }

  public conditionalTransfer(
    request: ConditionalTransferRequest
  ): Promise<Record<string, string>> {
    return this._addTransaction(
      GatewayRequestType.CONDITIONAL_TRANSFER_REQUEST,
      request
    );
  }

  public fullWithdrawal(
    request: FullWithdrawalRequest
  ): Promise<Record<string, string>> {
    return this._addTransaction(
      GatewayRequestType.FULL_WITHDRAWAL_REQUEST,
      request
    );
  }

  public falseFullWithdrawal(
    request: FalseFullWithdrawalRequest
  ): Promise<Record<string, string>> {
    return this._addTransaction(
      GatewayRequestType.FALSE_FULL_WITHDRAWAL_REQUEST,
      request
    );
  }

  private async _addTransaction(
    type: GatewayRequestType,
    request: GatewayRequest
  ) {
    const formattedRequest = camelToUnderscore(request);
    return await this.makeRequest(GatewayServiceType.ADD_TRANSACTION, 'POST', {
      tx: {
        type,
        ...formattedRequest
      },
      tx_id: await this.getFirstUnusedTxId()
    });
  }
}

export {Gateway};
