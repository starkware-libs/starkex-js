import {camelToUnderscore} from '../../utils';
import {ApiVersion} from '../../utils/api-versioning';
import {GatewayBase} from '../gateway-base';
import {StarkExClientConfig} from '../starkex-client';
import {AvailabilityGatewayServiceType} from './availability-gateway-service-type';
import {CommitteeSignature} from './availability-gateway-types';

class AvailabilityGateway extends GatewayBase {
  constructor(config: StarkExClientConfig) {
    super(config, {
      gatewayRoute: 'availability_gateway',
      defaultVersion: ApiVersion.V1
    });
  }

  public approveNewRoots(data: CommitteeSignature): Promise<string> {
    const formattedData = camelToUnderscore(data);
    return this.makeRequest(
      AvailabilityGatewayServiceType.APPROVE_NEW_ROOTS,
      'POST',
      formattedData
    );
  }

  public getBatchData(batchId: number): Promise<Record<string, any>> {
    return this.makeRequest(
      `${AvailabilityGatewayServiceType.GET_BATCH_DATA}?batch_id=${batchId}`
    );
  }
}

export {AvailabilityGateway};
