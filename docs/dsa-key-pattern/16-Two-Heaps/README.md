# Two Heaps

## Description
This pattern uses two heaps (max heap and min heap) to solve problems involving tracking medians and efficiently managing dynamic data.

## Time Complexity
O(log n) for insertions

## Space Complexity
O(n)

## Key Concepts
- **Max Heap + Min Heap**: Max heap for smaller half, min heap for larger half
- **Balance Maintenance**: Keep heap sizes balanced (differ by at most 1)
- **Median Calculation**: Median is either top of larger heap or average of both tops
- **Dynamic Updates**: Efficiently handle insertion of new elements

## Key Problems
- Find Median from Data Stream
- Sliding Window Median
- IPO

## When to Use
- Finding median in dynamic dataset
- Problems requiring quick access to middle elements
- Sliding window problems involving medians
- When you need to maintain sorted order partially

## Pattern Recognition
- "Find median from data stream"
- "Sliding window median"
- "Maintain median while adding elements"
- "Quick access to middle elements"

## Algorithm Design

### Heap Setup
- **Max Heap**: Stores smaller half of numbers
- **Min Heap**: Stores larger half of numbers
- **Invariant**: max_heap.size() ∈ {min_heap.size(), min_heap.size() + 1}

### Insert Operation
1. **Add to appropriate heap**:
   - If max_heap is empty or num ≤ max_heap.top(): add to max_heap
   - Otherwise: add to min_heap
2. **Rebalance if needed**:
   - If size difference > 1, move top element between heaps

### Find Median
- If max_heap.size() > min_heap.size(): return max_heap.top()
- Otherwise: return (max_heap.top() + min_heap.top()) / 2

## Variations
- **Sliding Window**: Remove elements from heaps as window moves
- **Weighted Median**: Modify for weighted elements
- **Kth Element**: Generalize to find Kth smallest element
