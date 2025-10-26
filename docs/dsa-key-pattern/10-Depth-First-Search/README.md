# Depth First Search (DFS)

## Description
DFS explores as far as possible along a branch before backtracking. It's useful for graph traversal, pathfinding, and connected components.

## Time Complexity
O(V + E) where V is vertices and E is edges

## Space Complexity
O(V) for the recursion stack

## Key Concepts
- **Deep Exploration**: Go as far as possible before backtracking
- **Recursive/Stack-Based**: Can be implemented recursively or with explicit stack
- **Path Finding**: Explore all possible paths
- **Connected Components**: Find all nodes in a component

## Key Problems
- Number of Closed Islands
- Coloring a Border
- DFS from boundary: Number of Enclaves
- Shortest time: Time Needed to Inform all Employees
- Cyclic Find: Find Eventual Safe States

## When to Use
- Finding connected components
- Detecting cycles in graphs
- Path existence problems
- Topological sorting preparation
- Tree/graph traversal when order doesn't matter

## Pattern Recognition
- "Find all connected components"
- "Detect cycle in graph"
- "Explore all possible paths"
- "Mark visited regions"
- "Tree traversal problems"

## DFS Variants

### Standard DFS
- Mark visited, explore all neighbors recursively

### DFS with Path Tracking
- Keep track of current path for backtracking problems

### DFS from Boundary
- Start DFS from boundary cells/nodes
- Mark all reachable nodes

### Cycle Detection DFS
- Use three colors: white (unvisited), gray (processing), black (finished)
- Gray node reached again = cycle found

## Implementation Approaches

### Recursive DFS
- Clean and intuitive
- Uses call stack implicitly

### Iterative DFS
- Use explicit stack
- Better control over memory usage

### DFS with Backtracking
- Undo changes when backtracking
- Used in path-finding problems
