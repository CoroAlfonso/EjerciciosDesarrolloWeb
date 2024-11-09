const assert = require('assert').strict;


const select = (array, condition) => array.filter(condition);


const pairs = (num) => num % 2 === 0;
const gt15 = (num) => num > 15;
const lt10 = (num) => num < 10;

let values = [1, 2, 3, 5, 7, 13, 17, 23, 29];

assert.deepStrictEqual(select(values, pairs), [2]);
assert.deepStrictEqual(select(values, gt15), [17, 23, 29]);
assert.deepStrictEqual(select(values, lt10), [1, 2, 3, 5, 7]);

console.log("Todos los test pasaron correctamente.");