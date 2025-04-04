        
class DijkstraNode {
    constructor (node, distance) {
        this.node = node;
        this.distance = distance;
    }
    Node() {
        return this.node;
    }
    distance() {
        return this.distance;
    }
    newDistance(distance) {
        this.distance = distance;
    }

}

class PriorityQueue {
    constructor () {
        this.queue = [];
    }

    add(DijkstraNode) {
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
                var newdist = currentNode.distance() + graph[currentNode.Node()][i];
                if (newdist < Dijkstra[i].distnace()) {
                    Dijkstra[i].newDistance(newdist);
                    if (!visited[i]) {
                        priorityQueue.add(Dijkstra[i]);
                        visited[i] = true;
                    }
                }
            }
        }
    }
    return DijMatrix.map(node => node.distance());
}
