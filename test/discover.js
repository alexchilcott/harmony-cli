const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const sinon = require('sinon');
const mockery = require('mockery');

const EventEmitter = require('events');

describe('Actions - Discover', function() {
  describe('handler', function() {
    beforeEach(function() {
      mockery.enable();
      this.clock = sinon.useFakeTimers();
    });

    afterEach(function() {
      this.clock.restore();
      mockery.disable();
    });

    it('should return the array of hubs found by the harmony hub ' +
      'discover module',
      function(done) {
        // arrange
        const foundHub1 = {
          data: 'some hub data'
        };
        const foundHub2 = {
          data: 'some more hub data'
        };
        class MockHarmonyHubDiscoverer extends EventEmitter {
          start() {
            this.emit('online', foundHub1);
            this.emit('online', foundHub2);
          }
          stop() {}
        }
        mockery.registerMock('harmonyhubjs-discover',
          MockHarmonyHubDiscoverer);

        // act
        const discoverHandler = require(
          '../src/commands/handlers/discover');
        const timeout = 10000;
        const promise = discoverHandler(timeout)
        this.clock.tick(timeout);

        // assert
        promise.then(x => {
          expect(x).to.deep.equal([foundHub1, foundHub2]);
          done();
        });
      });
  });
});
