
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

var g =  [
    [0, 3, 0, 0],
    [3, 0, 2, 0],
    [0, 2, 0, 1],
    [0, 0, 1, 0]
];
assert(JSON.stringify(dijkstra(g,0)) == JSON.stringify([0, 3, 5, 6]));
assert(JSON.stringify(dijkstra(g,2)) == JSON.stringify([5, 2, 0, 1]));


var g = [
    [0, 5, 0, 8, 0],
    [5, 0, 1, 0, 0],
    [0, 1, 0, 2, 3],
    [8, 0, 2, 0, 4],
    [0, 0, 3, 4, 0]
];

assert(JSON.stringify(dijkstra(g,2)) == JSON.stringify([6, 1, 0, 2, 3]));
assert(JSON.stringify(dijkstra(g,3)) == JSON.stringify([8, 3, 2, 0, 4]));
assert(JSON.stringify(dijkstra(g,4)) == JSON.stringify([9, 4, 3, 4, 0]));
