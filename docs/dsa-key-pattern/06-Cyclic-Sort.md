# Cyclic Sort (Index-Based)

## Description
Cyclic sort is an efficient approach to solve problems where numbers are consecutively ordered and must be placed in the correct index.

## Time Complexity
O(n)

## Space Complexity
O(1)

## Key Concepts
- **Index Mapping**: Each number should be at index = number - 1 (for 1 to n)
- **In-place Swapping**: Place each number at its correct position
- **Missing Elements**: After sorting, missing numbers are at incorrect positions
- **Range [1, n]**: Most problems involve numbers in range 1 to n

## Key Problems
- Missing Number
- Find Missing Numbers
- Set Mismatch
- First Missing Positive

## When to Use
- Array contains numbers in range [1, n] or [0, n-1]
- Need to find missing, duplicate, or misplaced numbers
- Want O(1) space complexity for such problems
- Numbers should ideally be consecutive or nearly consecutive

## Pattern Recognition
- "Array contains n numbers in range [1, n]"
- "Find missing/duplicate numbers"
- "First missing positive integer"
- "Array where each number should be at specific index"

## Algorithm Steps
1. Iterate through array
2. For each element, if it's not at correct position, swap it
3. Continue until element at current position is correct
4. After sorting, scan to find missing/duplicate elements

## Key Insight
- Number `x` should be at index `x-1` (for 1-indexed problems)
- Number `x` should be at index `x` (for 0-indexed problems)
- After one pass, all numbers will be at correct positions
