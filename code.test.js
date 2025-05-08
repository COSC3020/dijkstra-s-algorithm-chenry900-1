
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//Graph with one node
assert.deepStrictEqual(dijkstra([[]], 0), [0], "Failed on ([[]], 0)");

//Basic graph
assert.deepStrictEqual(dijkstra([[[1, 50]], []], 0), [0, 50], "Failed on ([[[1, 50]], []], 0)");

//Basic graph with different start node
assert.deepStrictEqual(dijkstra([[[1, 50]], []], 1), [Infinity, 0], "Failed on ([[[1, 50]], []], 1)");

//Slightly more complex graph generated through https://visualgo.net/en/graphds
var graph = [[[1,100], [2,50]], [[2,50], [3,50], [4,50]], [[3,100]], [[4,75]], []]
var dist = [0, 100, 50, 150, 150];
assert.deepStrictEqual(dijkstra(graph, 0), dist, "Failed on generated graph");

//Graph based on slide 38
graph = [[1, 2, 2, 1, 3, 4], 
        [2, 1, 4, 10, 5, 2], 
        [0, 9, 4, 8], 
        [2, 2], 
        [3, 7, 6, 1], 
        [7, 3],
        [4, 4, 5, 2],
        [6, 1]];

//Solution from lecture video
dist = [9, 11, 0, 13, 8, 11, 9, 14]
assert.deepStrictEqual(dijkstra(graph, 2), dist, "Failed on graph from slides");
