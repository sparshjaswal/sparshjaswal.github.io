# Design Data Structure

## Description
Building custom data structures to efficiently handle specific operations, focusing on optimizing performance and resource management.

## Time Complexity
Varies by operation

## Space Complexity
Varies by design

## Key Concepts
- **Interface Design**: Define clear API for data structure operations
- **Trade-offs**: Balance between time complexity, space complexity, and implementation complexity
- **Caching**: Store frequently accessed data for quick retrieval
- **Lazy Evaluation**: Defer computations until actually needed
- **Amortized Analysis**: Average performance over sequence of operations

## Key Problems
- Design Twitter
- Design Browser History
- Design Circular Deque
- Snapshot Array
- LRU Cache
- LFU Cache

## When to Use
- When existing data structures don't meet requirements
- Need to optimize specific operation patterns
- Custom caching or storage requirements
- Problems asking to "design" or "implement" a system

## Pattern Recognition
- "Design a data structure that supports..."
- "Implement a cache with..."
- "Create a system that can..."
- "Design API for..."
- Custom requirements for specific operations

## Design Principles

### Single Responsibility
- Each class/structure should have one clear purpose
- Separate concerns into different components

### API Design
- Keep interfaces simple and intuitive
- Consider what operations will be most frequent
- Design for extensibility

### Performance Optimization
- Identify bottleneck operations
- Use appropriate data structures (hash tables, heaps, etc.)
- Consider space-time trade-offs

### Caching Strategies
- **LRU (Least Recently Used)**: Remove oldest accessed item
- **LFU (Least Frequently Used)**: Remove least frequently accessed item
- **TTL (Time To Live)**: Remove items after certain time

## Common Patterns
- **Hash Table + Doubly Linked List**: For LRU cache
- **Hash Table + Min/Max Heap**: For priority-based systems
- **Trie + Hash Map**: For prefix-based searches
- **Stack/Queue combinations**: For undo/redo operations
