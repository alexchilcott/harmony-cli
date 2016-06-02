'use strict';
var harmony = require('harmonyhubjs-client')

exports.command = 'activity';
exports.description = 'activities sub-command';
exports.builder = function(yargs) {
  return yargs
    .commandDir('activity_commands');
};
exports.handler = function(argv) {};
