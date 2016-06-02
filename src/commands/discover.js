'use strict';
var output = require('../output');
var discover = require('./handlers/discover');

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
  discover(argv.timeout)
    .then(result => output.write(result));
};
