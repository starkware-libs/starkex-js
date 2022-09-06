import {camelToUnderscore} from '../../utils';
import {GatewayBase} from '../gateway-base';
import {StarkExClientConfig} from '../starkex-client';
import {AvailabilityGatewayServiceType} from './availability-gateway-service-type';
import {CommitteeSignature} from './availability-gateway-types';

class AvailabilityGateway extends GatewayBase {
  constructor(config: StarkExClientConfig) {
    super(config, '/availability_gateway');
  }

  public approveNewRoots(data: CommitteeSignature): Promise<string> {
    const formattedData = camelToUnderscore(data);
    return this.makeRequest(
      AvailabilityGatewayServiceType.APPROVE_NEW_ROOTS,
      'POST',
      formattedData
    );
  }

  public getBatchData(batchId: number, validateRollup = false): Promise<Record<string, any>> {
    let url = `${AvailabilityGatewayServiceType.GET_BATCH_DATA}?batch_id=${batchId}`;

    if (validateRollup) {
      url += '&validate_rollup=True';
    }

    return this.makeRequest(url);
  }
}

export {AvailabilityGateway};
