#!/usr/bin/env node

const fs = require('fs');
const args = process.argv.slice(2);
const notesDir = `${process.env.HOME}/.notables`;
const location = `${notesDir}/${process.cwd().replace(/\//g, '-')}`;

if (args.join(' ') == 'clear all') {
  removeFiles(no)
} else if (args[0] == 'clear') {
  removeFile(location);
  console.log('note removed')
} else if (args.length > 0) {
  if (!fs.existsSync(notesDir)) {
    fs.mkdirSync(notesDir);
  }
  let now = new Date();
  let parts = now.toString().split(' ');
  let date = `${parts[0]}, ${parts[1]} ${parts[[2]]} ${parts[3]} ${parts[4]}`;
  fs.writeFileSync(location, `${date}\n${args.join(' ')}`);
  console.log('note saved');
} else {
  if (fs.existsSync(location)) {
    console.log(fs.readFileSync(location).toString());
  } else {
    console.log('nothing here');
  }
}

function removeFiles(dir) {
  try {
    var files = fs.readdirSync(dir);
  } catch (e) {
    return;
  }
  files.forEach(f => {
    removeFile(`${dir}/${f}`);
  });
};

function removeFile(path) {
  if (fs.statSync(path).isFile()) {
    fs.unlinkSync(path);
  }
}
