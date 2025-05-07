function dijkstra(graph, sourceNode) {
   var distance = [];
   var visited = [];
   var remaining = true;
   var current = sourceNode;

   for (var i = 0; i < graph.length; i++) {
      distance[i] = Infinity;
      visited[i] = false;
   }

   distance[sourceNode] = 0;

   while(remaining) {
      var min = Infinity;
      var next = -1;
      var iter = 0;

      for (var i = 0; i < graph.length; i++) {
         if (visited[i] == false && distance[i] < min) {
            next = i;
            min = distance[i];
         }
      }
      
      if (next == -1) {
         break;
      }
      current = next;
      visited[current] = true;

      for (var i = 0; i < graph[current].length; i++) {
            var neighbor = graph[current][i][0];//when debugging copilot added the last [0]
            var cost = graph[current][i][1];//when debugging copilot added the last [1]
              
            if (visited[neighbor] == false) {
                distance[neighbor] = Math.min(distance[neighbor], (distance[current] + cost));
            }
      }
           
      for (var i = 0; i < graph.length; i ++) {
            if (visited[i]) {
                iter += 1;
            }
      }
           
      if (iter == graph.length) {
            remaining = false;
      }
   }


   return distance;     
}
