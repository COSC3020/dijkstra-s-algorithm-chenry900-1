# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

my initialization of distance and visited runs in O(n) time. My outer loop runs O(logn) times normally worst case it would need to go over every number so it would run at O(n) times. The inner for loop runs O(n) times. The 2nd for loop runs at O(n) times. Finally my check to see if every node was visited runs at O(n) times. Making the run time O(n*(n + n) + e) making the run time O(n^2 + e). In my explination n is the number of nodes because dijkstra checks for the shortest path so it has to visit every node to see if there is an alternitive path that is shorter to the farthest node.in my expination e is the number of edges as dijkstra checks all the edges cost and to see if the node down that path has been visited. The dijkstra's algorithm is meant to find the shorest path to each node so it has to visit each node reguardless of the cost to get to nodes that are unvisited and thats why n is for the number of nodes.


I used copilot to help me debug after writing it from scratch. The test code I copied from aPannell064's assignment.
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.
