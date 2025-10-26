# Modified Binary Search

## Description
A modified version of binary search that applies to rotated arrays, unsorted arrays, or specialized conditions.

## Time Complexity
O(log n)

## Space Complexity
O(1)

## Key Concepts
- **Search Space Reduction**: Eliminate half of search space at each step
- **Condition-based Searching**: Modify condition based on problem requirements
- **Peak Finding**: Find local maxima/minima using binary search
- **Answer Binary Search**: Binary search on answer range, not array indices

## Key Problems
- Search in Rotated Sorted Array
- Find Minimum in Rotated Sorted Array
- Find Peak Element
- Single element in a sorted array
- Minimum Time to Arrive on Time
- Capacity to Ship Packages within 'd' Days
- Koko Eating Bananas
- Find in Mountain Array
- Median of Two Sorted Arrays
https://leetcode.com/discuss/post/1322500/5-variations-of-binary-search-a-self-not-lkqp/
https://leetcode.com/discuss/post/691825/binary-search-for-beginners-problems-pat-0hei/

## When to Use
- Search problems with O(log n) requirement
- Finding minimum/maximum value that satisfies condition
- Problems on rotated or mountain arrays
- When you can eliminate half the search space

## Pattern Recognition
- "Find minimum/maximum value such that..."
- "Search in rotated sorted array"
- "Find peak element"
- "Binary search on answer"
- "Find element in mountain array"

## Binary Search Variants

### Standard Binary Search
- Search for target in sorted array

### Rotated Array Search
- Find pivot point or search directly
- Handle rotation cases

### Peak Finding
- Compare middle with neighbors
- Move toward higher neighbor

### Binary Search on Answer
- Define search range for answer
- Check if mid value satisfies condition
- Adjust range based on feasibility

### First/Last Occurrence
- Find leftmost or rightmost occurrence of target
- Modify condition to continue searching even after finding target
