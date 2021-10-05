import {GatewayBase} from '../gateway-base';
import {StarkExClientConfig} from '../starkex-client';
import {BatchIdsRequest} from './feeder-gateway-request';
import {FeederGatewayServiceType} from './feeder-gateway-service-type';

class FeederGateway extends GatewayBase {
  constructor(config: StarkExClientConfig) {
    super(config, '/feeder_gateway');
  }

  public getBatchEnclosingIds(batchId: number): Promise<number[]> {
    return this.makeRequest(
      `${FeederGatewayServiceType.GET_BATCH_ENCLOSING_IDS}?batch_id=${batchId}`
    );
  }

  public getBatchIds(request: BatchIdsRequest): Promise<number[]> {
    const {vaultRoot, orderRoot, sequenceNumber} = request;
    return this.makeRequest(
      `${FeederGatewayServiceType.GET_BATCH_IDS}?vault_root=${vaultRoot}&order_root=${orderRoot}&sequence_number=${sequenceNumber}`
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
}

export {FeederGateway};
