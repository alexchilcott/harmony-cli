'use strict';
var HarmonyHubDiscover = require('harmonyhubjs-discover')
var Q = require('q');

// (timeout) => promise
module.exports = function(timeout) {
  var deferred = Q.defer();

  var discoveredHubs = [];
  var discover = new HarmonyHubDiscover(61991)
  discover.on('online', function(hub) {
    discoveredHubs.push(hub);
  })
  discover.start()
  setTimeout(function() {
    discover.stop();
    deferred.resolve(discoveredHubs);
  }, timeout);

  return deferred.promise;
};
