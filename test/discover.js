const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const sinon = require('sinon');
const mockery = require('mockery');

const EventEmitter = require('events');

describe('Actions - Discover', function() {
  describe('handler', function() {
    beforeEach(function() {
      mockery.enable();
    });

    afterEach(function() {
      mockery.disable();
    });

    it('should return -1 when the value is not present', function(done) {
      const foundHubs = {
        data: 'some hub data'
      };
      class MockHarmonyHubDiscoverer extends EventEmitter {
        start() {
          this.emit('online', foundHubs);
        }
      }

      mockery.registerMock('harmonyhubjs-discover',
        MockHarmonyHubDiscoverer);

      const discoverCmd = require('../src/commands/discover');
      discoverCmd.handler({
        timeout: 1000
      })



      assert.equal(-1, [1, 2, 3].indexOf(5));
      assert.equal(-1, [1, 2, 3].indexOf(0));
    });
  });
});
