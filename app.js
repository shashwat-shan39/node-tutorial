const _ = require('lodash');

const arr = [1,[2,[3,[4]]]];
const flat_arr = _.flattenDeep(arr);
console.log(flat_arr);