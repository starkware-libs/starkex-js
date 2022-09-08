enum ApiVersion {
  V1 = 'v1',
  V2 = 'v2'
}

const mapApiVersionToUrlPrefix = {
  [ApiVersion.V1]: '',
  [ApiVersion.V2]: 'v2'
};

interface ApiGatewayPath {
  gatewayRoute: string;
  defaultVersion: ApiVersion;
}

export {ApiVersion, mapApiVersionToUrlPrefix, ApiGatewayPath};
