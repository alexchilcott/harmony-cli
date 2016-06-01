'use strict';
var harmony = require('harmonyhubjs-client')
var output = require('../../output');

exports.command = 'get-current';
exports.desc = 'Get the current activity';
exports.builder = function(yargs) {
  return yargs
    .demand('ip')
    .describe('ip', 'the ip address of the harmony hub');
};

exports.handler = function(argv) {
  harmony(argv.ip)
    .then(client => {
      client.getActivities()
        .then(activities =>
          client.getCurrentActivity()
          .then(activity => {
            const currentActivity = activities.find(x => x.id ===
              activity)
            output.write(currentActivity);
          })
          .then(() => client.end()));
    });
};
