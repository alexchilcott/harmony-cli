'use strict';
var harmony = require('harmonyhubjs-client')
var output = require('../../output');

exports.command = 'start';
exports.desc = 'Start an activity';
exports.builder = function(yargs) {
  return yargs
    .demand('label')
    .describe('label', 'the name of the activity')
    .demand('ip')
    .describe('ip', 'the ip address of the harmony hub');
};

exports.handler = function(argv) {
  harmony(argv.ip)
    .then(client => {
      client.getActivities()
        .then(activities => {
          const targetActivity = activities.find(x => x.label ===
            argv.label);
          client
            .startActivity(targetActivity.id)
            .then(() => client.end());
        })
    });
};
