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
  const amount = 1;
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
      endpoint: 'https://gw.playground-v2.starkex.co'
    });
  });

  beforeEach(() => {
    error = null;
  });

  it('should be alive', async () => {
    await starkExAPI.gateway.isAlive();
  });

  describe('requests validation', () => {
    it('should throw error for tx when missing txId', async () => {
      const request = {
        amount,
        starkKey,
        tokenId,
        vaultId
      };
      const expectedError = {
        ...SchemaValidationError,
        txId: undefined,
        problems: {
          tx_id: ['Missing data for required field.']
        }
      };

      try {
        await starkExAPI.gateway.deposit(request);
      } catch (ex) {
        error = ex;
      }
      assert.deepEqual(error, expectedError);
    });

    it('should throw error for tx when missing starkKey', async () => {
      const request = {
        amount,
        tokenId,
        vaultId,
        txId
      };
      const expectedError = {
        ...SchemaValidationError,
        txId,
        problems: {
          tx: {
            stark_key: ['Missing data for required field.']
          }
        }
      };

      try {
        await starkExAPI.gateway.withdrawal(request);
      } catch (ex) {
        error = ex;
      }
      assert.deepEqual(error, expectedError);
    });

    it('should throw error for tx when missing vaultId', async () => {
      const request = {
        amount,
        tokenId,
        starkKey,
        txId
      };
      const expectedError = {
        ...SchemaValidationError,
        txId,
        problems: {
          tx: {
            vault_id: ['Missing data for required field.']
          }
        }
      };

      try {
        await starkExAPI.gateway.withdrawal(request);
      } catch (ex) {
        error = ex;
      }
      assert.deepEqual(error, expectedError);
    });

    it('should throw error for transfer when missing nonce', async () => {
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
      const expectedError = {
        ...SchemaValidationError,
        txId,
        problems: {
          tx: {
            nonce: ['Missing data for required field.']
          }
        }
      };

      try {
        await starkExAPI.gateway.transfer(request);
      } catch (ex) {
        error = ex;
      }
      assert.deepEqual(error, expectedError);
    });

    it('should throw error for conditional transfer when missing fact', async () => {
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
      const expectedError = {
        ...SchemaValidationError,
        txId,
        problems: {
          tx: {
            fact: ['Missing data for required field.']
          }
        }
      };

      try {
        await starkExAPI.gateway.conditionalTransfer(request);
      } catch (ex) {
        error = ex;
      }
      assert.deepEqual(error, expectedError);
    });
  });
});
