function dijkstra(graph, sourceNode) {
        
    
    constructor (node, distance) {
        var distance;
        var currentNode;
        this.currentnode = node;
        this.distance = distance;
    }
    Node() {
        return currentNode;
    }
    distance() {
        return distance;
    }
    newDistance(distance) {
        this.distance = distance;
    }

}

class PriorityQueue {
    constructor () {
        var queue = [];
        var number = 0;
    }

    add(DijkstraNode) {
        number++;
        queue[number] = DijkstraNode.distance();
        queue[number] = [];
        queue[number].push(DijkstraNode.Node());
        for (var i = 0; i < number; i++) {
            if (queue[number] > queue[i]) {
                var swap = queue[number];
                var nodeSwap = queue[number][0];
                for (var n = number - 1; n > i; n--) {
                    queue[(n+1)] = queue[n];
                    queue[(n+1)][0] = queue[n][0];
                }
                queue[i] = swap;
                queue[i][0] = nodeSwap;
            }
        }
    }
    poll() {
        return queue.pop();
    }
    isEmpty() {
        if (queue.length == 0)
            return true;
        else
            return false;
    }
    

}

function dijkstra(graph, sourceNode) {
    var[] Dijkstra = new var[graph.length];
    boolean[] visited = new boolean[graph.length];
    var inf = 999;
    PriorityQueue<DijkstraNode> priority = new PriorityQueue<>(node, node.distance);

    for (var i = 0; i < graph.length; i++) {
        if (i == sourceNode){
            Dijkstra[i] = new DijkstraNode(sourceNode, inf);
            visited[i] = true;
        }
        else {
            Dijkstra[i] = new DijkstraNode(i, inf);
            visited[i] = false;
        }
    }
    priority.add(Dijkstra[sourceNode]);

    while (!priority.isEmpty()) {
        DijkstraNode check = priority.poll();
        for (var i = 0; i < graph.length; i++) {
            if (graph[check.Node()][i] > 0) {
                var newdist = check.distance() + graph[check.Node()][i];
                if (newdist < Dijkstra[check.Node()].distnace()) {
                    Dijkstra[check.Node()].newDistance(newdist);
                    if (!visited[i]) {
                        priority.add(Dijkstra[i]);
                        visited[i] = true;
                    }
                }
            }
        }
    }
    return DijMatrix;
}
