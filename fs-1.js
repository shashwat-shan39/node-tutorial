const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./foldrr/first.txt', 'utf-8');
const second = readFileSync('./foldrr/second.txt', 'utf-8');

writeFileSync('./foldrr/res.txt',`the result : ${first} and ${second}`, {flag : 'a'});