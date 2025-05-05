const fs = require('fs');
const assert = require('assert');

// Load the code.js file which contains the dijkstra function
eval(fs.readFileSync('code.js') + '');

// === Test 1: Single node ===
let graph = [[]]; // No edges
let result = dijkstra(graph, 0);
assert.deepStrictEqual(result, [0]);

// === Test 2: Two connected nodes ===
graph = [
  [[1, 5]],
  [[0, 5]]
];
result = dijkstra(graph, 0);
assert.deepStrictEqual(result, [0, 5]);

// === Test 3: Triangle graph ===
graph = [
  [[1, 2], [2, 4]],
  [[0, 2], [2, 1]],
  [[0, 4], [1, 1]]
];
result = dijkstra(graph, 0);
assert.deepStrictEqual(result, [0, 2, 3]); // 0→1→2 gives 3

// === Test 4: Disconnected node ===
graph = [
  [[1, 1]],
  [[0, 1]],
  []  // Node 2 is unreachable
];
result = dijkstra(graph, 0);
assert.deepStrictEqual(result, [0, 1, Infinity]);

// === Test 5: More complex graph (from TSP example style) ===
graph = [
  [[1, 3], [2, 4], [3, 2], [4, 7]],
  [[0, 3], [2, 4], [3, 6], [4, 3]],
  [[0, 4], [1, 4], [3, 5], [4, 8]],
  [[0, 2], [1, 6], [2, 5], [4, 6]],
  [[0, 7], [1, 3], [2, 8], [3, 6]]
];
result = dijkstra(graph, 0);
assert.deepStrictEqual(result, [0, 3, 4, 2, 6]);

console.log('✅ All Dijkstra tests passed!');
