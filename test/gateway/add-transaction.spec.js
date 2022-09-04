const StarkExAPI = require('../../dist/node');
const chai = require('chai');

describe('Gateway', () => {
  let starkExAPI;
  const vaultId = 1654615998,
    tokenId =
      '0x2dd48fd7a024204f7c1bd874da5e709d4713d60c8a70639eb1167b367a9c378',
    starkKey =
      '0x7c65c1e82e2e662f728b4fa42485e3a0a5d2f346baa9455e3e70682c2094cac',
    amount = '4029557120079369747';

  before(() => {
    starkExAPI = new StarkExAPI({
      endpoint: 'https://gw.playground-v2.starkex.co'
    });
  });

  describe('multitranaction', () => {
    it('should success with a valid input', async () => {
      const request = {vaultId, tokenId, starkKey, amount};
      const txId = await starkExAPI.gateway.getFirstUnusedTxId();

      const response = await starkExAPI.gateway.multiTransaction({
        txId,
        txs: [
          {type: StarkExAPI.GatewayRequestType.DEPOSIT_REQUEST, ...request},
          {type: StarkExAPI.GatewayRequestType.WITHDRAWAL_REQUEST, ...request}
        ]
      });

      chai.expect(response.txId).to.equal(txId);
      chai.expect(response.code).to.equal('TRANSACTION_PENDING');
    });
  });
});
