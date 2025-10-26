# Sliding Window

## Description
A sliding window is a subarray or substring that moves over data to solve problems efficiently in linear time.

## Time Complexity
O(n)

## Space Complexity
O(k) where k is the window size

## Key Concepts
- **Fixed Size Window**: Window size remains constant throughout
- **Variable Size Window**: Window size changes based on conditions
- **Two Pointer Approach**: Left and right pointers define window boundaries
- **Window State**: Maintain relevant information about current window

## Types of Sliding Window

### Fixed Size
- Window size is given in the problem
- Move window by removing leftmost and adding rightmost element

**Key Problems:**
- Maximum Sum Subarray of Size K
- Number of Subarrays having Average Greater or Equal to Threshold
- Repeated DNA sequences
- Permutation in String
- Sliding Subarray Beauty
- Sliding Window Maximum
- https://leetcode.com/discuss/post/1773891/sliding-window-technique-and-question-ba-9tt4/
- https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/1175088/C++-Maximum-Sliding-Window-Cheatsheet-Template/

### Variable Size
- Window size changes based on problem constraints
- Expand window when condition not met, shrink when met

**Key Problems:**
- Longest Substring Without Repeating Characters
- Minimum Size Subarray Sum
- Subarray Product Less Than K
- Max Consecutive Ones
- Fruits Into Baskets
- Count Number of Nice Subarrays
- Minimum Window Substring

## When to Use
- Problems involving contiguous subarrays or substrings
- Finding optimal subarray/substring with certain conditions
- When brute force would be O(n²) or O(n³)

## Pattern Recognition
- "Find maximum/minimum in subarray of size k"
- "Longest substring with condition"
- "Shortest subarray with condition"
- "Count subarrays/substrings with property"

## Implementation Template
```
Fixed Window:
- Initialize window of size k
- Slide window: remove left, add right
- Update result at each step

Variable Window:
- Expand window (add right element)
- While condition violated, shrink window (remove left)
- Update result when condition satisfied
```
