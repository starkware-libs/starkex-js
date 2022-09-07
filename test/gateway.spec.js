const StarkExAPI = require('../dist/node');
const chai = require('chai');
const assert = chai.assert;

const SchemaValidationError = {
  code: 'StarkErrorCode.SCHEMA_VALIDATION_ERROR',
  message: 'Schema validation failed'
};

describe('Gateway', () => {
  let starkExAPI, error;
  const vaultId = 1;
  const txId = 1;
  const amount = '1';
  const starkKey = '0x2';
  const tokenId = '0x1';
  const nonce = 2;
  const receiverPublicKey = '0x4';
  const receiverVaultId = 4;
  const expirationTimestamp = new Date().getTime();
  const signature = {r: '0x1', s: '0x2'};
  const factRegistryAddress = '0x5';

  before(() => {
    starkExAPI = new StarkExAPI({
      gateway: {
        endpoint: 'https://gw.playground-v2.starkex.co'
      },
      availabilityGateway: {
        endpoint: 'https://av-gw.playground-v2.starkex.co'
      }
    });
  });

  beforeEach(() => {
    error = null;
  });

  it('should be alive', async () => {
    await starkExAPI.gateway.isAlive();
  });

  describe('requests validation', () => {
    const objectShouldFailSchema = async (request, field, method, done) => {
      const errorValue = ['Missing data for required field.'];
      let expectedError;

      if (field === 'tx_id') {
        expectedError = {
          ...SchemaValidationError,
          txId: undefined,
          problems: {
            tx_id: errorValue
          }
        };
      } else {
        expectedError = {
          ...SchemaValidationError,
          txId,
          problems: {
            tx: {
              [field]: errorValue
            }
          }
        };
      }

      try {
        await starkExAPI.gateway[method](request);
      } catch (ex) {
        error = ex;
      }
      assert.deepEqual(error, expectedError);
      done();
    };

    it('should throw error for tx when missing txId', done => {
      const request = {
        amount,
        starkKey,
        tokenId,
        vaultId
      };
      objectShouldFailSchema(request, 'tx_id', 'deposit', done);
    });

    it('should throw error for tx when missing starkKey', done => {
      const request = {
        amount,
        tokenId,
        vaultId,
        txId
      };
      objectShouldFailSchema(request, 'stark_key', 'deposit', done);
    });

    it('should throw error for tx when missing vaultId', done => {
      const request = {
        amount,
        tokenId,
        starkKey,
        txId
      };
      objectShouldFailSchema(request, 'vault_id', 'deposit', done);
    });

    it('should throw error for transfer when missing nonce', done => {
      const request = {
        txId,
        amount,
        senderPublicKey: starkKey,
        senderVaultId: vaultId,
        token: tokenId,
        receiverPublicKey,
        receiverVaultId,
        expirationTimestamp,
        signature
      };
      objectShouldFailSchema(request, 'nonce', 'transfer', done);
    });

    it('should throw error for conditional transfer when missing fact', done => {
      const request = {
        txId,
        amount,
        nonce,
        senderPublicKey: starkKey,
        senderVaultId: vaultId,
        token: tokenId,
        receiverPublicKey,
        receiverVaultId,
        expirationTimestamp,
        signature,
        factRegistryAddress
      };
      objectShouldFailSchema(request, 'fact', 'conditionalTransfer', done);
    });
  });
});
