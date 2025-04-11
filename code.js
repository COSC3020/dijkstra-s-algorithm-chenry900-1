        
class DijkstraNode {
    constructor (node, distance) {
        this.node = node;//it fixed the constructor and node by using this.node I then asked it to teach me how the this.something worked and implemented it in the rest of my code.
        this.distance = distance;
    }
    Node() {
        return this.node;
    }
    getDistance() {
        return this.distance;
    }
    newDistance(dist) {
        this.distance = dist;
    }

}

class PriorityQueue {
    constructor () {
        this.queue = [];
    }

    add(dijkstraNode) {
        this.queue.push(dijkstraNode);
        this.queue.sort((a, b) => a.getDistance() - b.getDistance());
    }
    poll() {
        return this.queue.shift();
    }
    isEmpty() {
        return this.queue.length == 0;
    }
    

}

function dijkstra(graph, sourceNode) {
    const inf = Infinity;
    const Dijkstra = [];
    const visited = [];
    const priorityQueue = new PriorityQueue();

    for (var i = 0; i < graph.length; i++) {
        if (i == sourceNode){
            Dijkstra[i] = new DijkstraNode(i, 0);
            visited[i] = true;
        }
        else {
            Dijkstra[i] = new DijkstraNode(i, inf);
            visited[i] = false;
        }
    }
    priorityQueue.add(Dijkstra[sourceNode]);

    while (!priorityQueue.isEmpty()) {
        var currentNode = priorityQueue.poll();
        for (var i = 0; i < graph.length; i++) {
            if (graph[currentNode.Node()][i] > 0) {
                var newdist = currentNode.getDistance() + graph[currentNode.Node()][i];
                if (newdist < Dijkstra[i].getDistance()) {
                    Dijkstra[i].newDistance(newdist);
                    if (!visited[i]) {
                        priorityQueue.add(Dijkstra[i]);
                        visited[i] = true;
                    }
                }
            }
        }
    }
    return DijMatrix.map(node => node.getDistance());
}


module.exports = { dijkstra }; //copilot said i needed to add this at the bottom to get the test code working properly 
