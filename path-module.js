const path = require('path');

console.log(path.sep);

const filePath = path.join('foldrr','subfldr','texts.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);
const absolute = path.resolve(__dirname,'foldrr','subfldr','texts.txt');
console.log(absolute);