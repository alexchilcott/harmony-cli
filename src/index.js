#!/usr/bin/env node

var yargs = require('yargs')
  .commandDir('./commands')
  .help()
  .argv;
