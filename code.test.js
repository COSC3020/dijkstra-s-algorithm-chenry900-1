const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');
// Helper: creates a connected graph of size n with random weights between 1 and 10
function randomGraph(n) {
    const graph = Array.from({ length: n }, () => Array(n).fill(0));

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (Math.random() < 0.5) {
                const weight = Math.floor(Math.random() * 10) + 1;
                graph[i][j] = weight;
                graph[j][i] = weight;
            }
        }
    }

    return graph;
}

// jsverify property: dijkstra result from source to source should be 0
const prop = jsc.forall(jsc.nat(4), n => {
    const size = Math.max(2, n);
    const graph = randomGraph(size);
    const source = Math.floor(Math.random() * size);
    const distances = dijkstra(graph, source);
    return distances[source] === 0;
});

try {
    jsc.assert(prop);
    console.log("✅ jsverify test passed: distance from source to source is 0");
} catch (err) {
    console.error("❌ jsverify property test failed:", err);
}

// Manual test
function manualTest() {
    const graph = [
        [0, 1, 4],
        [1, 0, 2],
        [4, 2, 0]
    ];
    const result = dijkstra(graph, 0);
    console.log("Dijkstra from node 0:", result); // Expected: [0, 1, 3]
}

manualTest();

