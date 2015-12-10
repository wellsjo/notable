#!/usr/bin/env node

var fs = require('fs');
var args = process.argv.slice(2);
var notersDir = `${process.env.HOME}/.noters`;


var location = `${notersDir}/${process.cwd().replace(/\//g, '-')}`;

if (args[0] == 'clear') {
  if (fs.existsSync(location)) {
    fs.unlinkSync(location);
    console.log('\nnote removed')
  } else {
    console.log('\npshhhhhhh there isn\'t anything here.');
  }
} else if (args.length > 0) {
  if (!fs.existsSync(notersDir)) {
    fs.mkdirSync(notersDir);
  }
  fs.writeFileSync(location, args.join(' '));
  console.log('\nnote saved :)');
} else {
  if (fs.existsSync(location)) {
    console.log('\n' + fs.readFileSync(location).toString());
  } else {
    console.log('\nno notes found');
  }
}
