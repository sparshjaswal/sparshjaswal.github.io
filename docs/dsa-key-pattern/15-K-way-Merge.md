# K-way Merge

## Description
The K-way merge technique uses a heap to efficiently merge multiple sorted lists or arrays.

## Time Complexity
O(n log k) where n is total elements and k is number of lists

## Space Complexity
O(k)

## Key Concepts
- **Min Heap**: Use min heap to always get smallest element across all lists
- **Iterator Tracking**: Keep track of current position in each list
- **Sorted Input**: Leverage the fact that input lists are sorted
- **Merge Process**: Repeatedly extract min and add next element from same list

## Key Problems
- Find K Pairs with Smallest Sums
- Kth Smallest Element in a Sorted Matrix
- Merge K Sorted Lists
- Smallest Range Covering Elements from K Lists

## When to Use
- Merging multiple sorted arrays/lists
- Finding smallest/largest across multiple sorted sources
- Problems involving K sorted inputs
- Range queries across sorted lists

## Pattern Recognition
- "Merge K sorted lists/arrays"
- "Find Kth smallest across K sorted lists"
- "Smallest range covering all K lists"
- "K pairs with smallest/largest sums"

## Algorithm Steps
1. **Initialize Heap**: Add first element from each list to min heap
2. **Extract Minimum**: Pop smallest element from heap
3. **Add to Result**: Include popped element in final result
4. **Add Next**: If popped element's list has more elements, add next element to heap
5. **Repeat**: Continue until heap is empty

## Key Insight
- At any point, heap contains at most K elements
- Always process smallest available element
- Maintains sorted order in output

## Variations
- **Merge All**: Combine all lists into single sorted list
- **Find Kth**: Stop after finding Kth smallest element
- **Range Problems**: Use max heap alongside min heap for range queries
