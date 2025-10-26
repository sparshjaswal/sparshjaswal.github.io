# Top 'K' Elements

## Description
This pattern uses heaps or quickselect to efficiently find the top 'K' largest/smallest elements from a dataset.

## Time Complexity
O(n log k)

## Space Complexity
O(k)

## Key Concepts
- **Min/Max Heap**: Use appropriate heap to maintain top K elements
- **Heap Size Management**: Keep heap size at most K
- **Frequency Counting**: Often combined with frequency maps
- **Quickselect**: Alternative O(n) average approach for finding Kth element

## Key Problems
- Top K Frequent Elements
- Kth Largest Element
- Ugly Number II
- K Closest Points to Origin

## When to Use
- Finding top K largest/smallest elements
- Kth order statistics problems
- Frequency-based problems with K constraint
- Problems requiring partial sorting

## Pattern Recognition
- "Find top K largest/smallest"
- "Kth largest/smallest element"
- "K most frequent elements"
- "K closest points"
- "Top K anything"

## Approaches

### Min Heap for Top K Largest
- Use min heap of size K
- If element > heap.top(), replace top
- Result: K largest elements in heap

### Max Heap for Top K Smallest
- Use max heap of size K
- If element < heap.top(), replace top
- Result: K smallest elements in heap

### Frequency + Heap
- Count frequencies using hash map
- Use heap to find top K frequent elements

### Quickselect Alternative
- Partition-based approach
- O(n) average time complexity
- Good for finding single Kth element

## Implementation Strategy
1. **Choose Heap Type**: Min heap for largest, max heap for smallest
2. **Maintain Size**: Keep heap size ≤ K
3. **Process Elements**: Add/remove elements to maintain top K
4. **Extract Result**: Final heap contains answer
