#!/usr/bin/env node

const rucola = require('rucola');
const Pushover = require('node-pushover');

const appname = 'tellme';
const defaults = {};
const aliases = {};

const conf = require('rucola')(appname, defaults, aliases);

const po = {
  token: conf.get('pushover.apikey'),
};

const push = new Pushover({
  token: conf.get('pushover.apikey'),
});

const msg = conf._ || 'Task done';

push.send(conf.get('pushover.userkey'), 'Task done', msg, function(err, res) {
  if (err) {
    return console.error(err);
  }
});
