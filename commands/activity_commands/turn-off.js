'use strict';
var harmony = require('harmonyhubjs-client')
var output = require('../../output');

exports.command = 'turn-off';
exports.desc = 'Send the power down command.';
exports.builder = function(yargs) {
  return yargs
    .demand('ip')
    .describe('ip', 'the ip address of the harmony hub');
};

exports.handler = function(argv) {
  harmony(argv.ip)
    .then(client => {
      client.turnOff()
        .then(() => client.end());
    });
};
