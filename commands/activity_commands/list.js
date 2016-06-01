'use strict';
var harmony = require('harmonyhubjs-client')
var output = require('../../output');

exports.command = 'list';
exports.desc = 'list activities';
exports.builder = function(yargs) {
  return yargs
    .demand('ip')
    .describe('ip', 'the ip address of the harmony hub');
};

exports.handler = function(argv) {
  harmony(argv.ip)
    .then(client => {
      client.getActivities()
        .then(activities => output.write(activities))
        .then(() => client.end());
    });
};
