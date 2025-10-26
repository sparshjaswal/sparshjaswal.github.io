# Graphs

## Description
Graph algorithms solve problems involving nodes and edges, including traversal, shortest paths, and connectivity.

## Categories

## Topological Sort
**Description:** Topological sorting is useful for tasks that require dependency resolution (InDegree) in directed acyclic graphs (DAGs).

**Time Complexity:** O(V + E)  
**Space Complexity:** O(V)

**Key Problems:**
- Course Schedule
- Course Schedule II
- Strange Printer II
- Sequence Reconstruction
- Alien Dictionary

**Pattern:** Use Kahn's algorithm or DFS-based approach to find ordering of vertices.

## Union Find (Disjoint Set)
**Description:** Union-Find is used to solve problems involving connectivity or grouping, often in graphs.

**Time Complexity:** O(α(n)) where α is inverse Ackermann function  
**Space Complexity:** O(n)

**Key Problems:**
- Number of Operations to Make Network Connected
- Redundant Connection
- Accounts Merge
- Satisfiability of Equality Equations

**Pattern:** Use path compression and union by rank for efficient set operations.

## Graph Algorithms
**Description:** Advanced graph algorithms for shortest paths, minimum spanning trees, and graph cycles.

**Time Complexity:** Varies by algorithm  
**Space Complexity:** Varies by algorithm

**Key Problems:**
- Kruskal's Algorithm: Minimum Cost to connect all Points
- Dijkstra's Algorithm: Cheapest Flights Within K Stops
- Floyd-Warshall: Find the City with Smallest Number of Neighbours at a Threshold Distance
- Bellman Ford: Network Delay time

## When to Use Graph Algorithms

### Topological Sort
- Dependency resolution problems
- Course scheduling
- Build order problems
- Detecting cycles in directed graphs

### Union Find
- Connected components problems
- Dynamic connectivity
- Cycle detection in undirected graphs
- Grouping related elements

### Shortest Path Algorithms
- **Dijkstra's**: Single source, non-negative weights
- **Bellman-Ford**: Single source, handles negative weights
- **Floyd-Warshall**: All pairs shortest paths

### Minimum Spanning Tree
- **Kruskal's**: Edge-based approach using Union-Find
- **Prim's**: Vertex-based approach using priority queue


https://leetcode.com/discuss/post/655708/graph-for-beginners-problems-pattern-sam-06fb/

https://leetcode.com/discuss/post/2360573/become-master-in-graph-by-hi-malik-o4xy/

https://leetcode.com/discuss/post/1326900/graph-algorithms-problems-to-practice-by-9u6j/
