import {ApiVersion, MESSAGES} from '../../utils';
import {GatewayBase} from '../gateway-base';
import {StarkExClientConfig} from '../starkex-client';
import {BatchIdsRequest} from './feeder-gateway-request';
import {FeederGatewayServiceType} from './feeder-gateway-service-type';

class FeederGateway extends GatewayBase {
  constructor(config: StarkExClientConfig) {
    super(config, {
      gatewayRoute: 'feeder_gateway',
      defaultVersion: ApiVersion.V2
    });
  }

  public getBatchEnclosingIds(batchId: number): Promise<number[]> {
    return this.makeRequest(
      `${FeederGatewayServiceType.GET_BATCH_ENCLOSING_IDS}?batch_id=${batchId}`
    );
  }

  public DEPRECATED_getBatchIds(request: BatchIdsRequest): Promise<number[]> {
    this.logger.error(
      `DEPRECATED_getBatchIds: ${MESSAGES.DEPRECATION_MESSAGE}`
    );
    const {vaultRoot, orderRoot, sequenceNumber} = request;
    return this.makeRequest(
      `${FeederGatewayServiceType.GET_BATCH_IDS}?vault_root=${vaultRoot}&order_root=${orderRoot}&sequence_number=${sequenceNumber}`,
      'GET',
      undefined,
      ApiVersion.V1
    );
  }

  public DEDEPRECATED_getBatchInfo(
    batchId: number
  ): Promise<Record<string, any>> {
    this.logger.error(
      `DEDEPRECATED_getBatchInfo: ${MESSAGES.DEPRECATION_MESSAGE}`
    );
    return this.makeRequest(
      `${FeederGatewayServiceType.GET_BATCH_INFO}?batch_id=${batchId}`,
      'GET',
      undefined,
      ApiVersion.V1
    );
  }

  public getBatchInfo(batchId: number): Promise<Record<string, any>> {
    return this.makeRequest(
      `${FeederGatewayServiceType.GET_BATCH_INFO}?batch_id=${batchId}`
    );
  }

  public getLastBatchId(): Promise<number> {
    return this.makeRequest(`${FeederGatewayServiceType.GET_LAST_BATCH_ID}`);
  }

  public getPrevBatchId(batchId: number): Promise<number> {
    return this.makeRequest(
      `${FeederGatewayServiceType.GET_PREV_BATCH_ID}?batch_id=${batchId}`
    );
  }
}

export {FeederGateway};
