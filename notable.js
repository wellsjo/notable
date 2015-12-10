#!/usr/bin/env node

var fs = require('fs');
var args = process.argv.slice(2);
var notersDir = `${process.env.HOME}/.noters`;
var location = `${notersDir}/${process.cwd().replace(/\//g, '-')}`;
var now = new Date();
var parts = now.toString().split(' ');
var date = `${parts[0]}, ${parts[1]} ${parts[[2]]} ${parts[3]} ${parts[4]}`;

if (args[0] == 'clear') {
  if (fs.existsSync(location)) {
    fs.unlinkSync(location);
    console.log('note removed')
  }
} else if (args.length > 0) {
  if (!fs.existsSync(notersDir)) {
    fs.mkdirSync(notersDir);
  }
  fs.writeFileSync(location, `${date}\n${args.join(' ')}`);
  console.log('note saved');
} else {
  if (fs.existsSync(location)) {
    console.log(fs.readFileSync(location).toString());
  } else {
    console.log('nothing here');
  }
}
