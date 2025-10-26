# Breadth First Search (BFS)

## Description
BFS explores nodes level by level using a queue. It is particularly useful for shortest path problems.

## Time Complexity
O(V + E) where V is vertices and E is edges

## Space Complexity
O(V) for the queue

## Key Concepts
- **Level-by-Level Exploration**: Process all nodes at distance k before distance k+1
- **Queue-Based**: Use queue for FIFO processing
- **Shortest Path**: In unweighted graphs, BFS finds shortest path
- **Multi-source BFS**: Start BFS from multiple sources simultaneously

## Key Problems
- Shortest Path in Binary Matrix
- Rotten Oranges
- As Far From Land as Possible
- Word Ladder

## When to Use
- Shortest path in unweighted graph
- Level-order traversal of trees
- Finding minimum steps/distance
- Multi-source shortest path problems
- Connected components exploration

## Pattern Recognition
- "Find shortest path/distance"
- "Minimum number of steps"
- "Level-order traversal"
- "Spread from multiple sources"
- "Find all nodes at distance k"

## Implementation Pattern
1. **Initialize**: Add starting node(s) to queue
2. **Process Level**: For each node in current level:
   - Visit all unvisited neighbors
   - Add neighbors to queue for next level
3. **Repeat**: Until queue is empty or target found

## BFS Variants

### Standard BFS
- Single source, explore all reachable nodes

### Multi-source BFS
- Multiple starting points, find shortest distance to any source

### Bidirectional BFS
- Start from both source and target, meet in middle

### BFS with State
- Each queue element contains additional state information
