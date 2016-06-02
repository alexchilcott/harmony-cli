'use strict';
var output = require('../output');
var HarmonyHubDiscover = require('harmonyhubjs-discover')

exports.command = 'discover';
exports.desc = 'search for harmony hubs';
exports.builder = function(yargs) {
  return yargs
    .option('timeout', {
      alias: 't',
      default: 10000
    });
};

exports.handler = function(argv) {
  var discoveredHubs = [];

  var discover = new HarmonyHubDiscover(61991)
  discover.on('online', function(hub) {
    debugger;
    discoveredHubs.push(hub);
  })
  discover.start()
  setTimeout(function() {
    discover.stop();
    output.write(discoveredHubs);
  }, argv.timeout);
};
