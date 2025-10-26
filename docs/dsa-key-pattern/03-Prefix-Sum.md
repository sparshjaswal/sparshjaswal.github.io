# Prefix Sum

## Description
Prefix Sums/Products are techniques that store cumulative sums or products up to each index, allowing for quick subarray range queries.

## Time Complexity
O(n) for preprocessing, O(1) for queries

## Space Complexity
O(n)

## Key Concepts
- **Cumulative Sum**: Build array where prefix[i] = sum of elements from 0 to i
- **Range Queries**: Sum from i to j = prefix[j] - prefix[i-1]
- **Prefix Product**: Similar concept but with multiplication
- **2D Prefix Sum**: Extension to 2D arrays for rectangle sum queries

## Key Problems
- Find the middle index in array
- Product of array except self
- Maximum product subarray
- Number of ways to split array
- Range Sum Query 2D

## When to Use
- Multiple range sum/product queries on static array
- Problems asking for subarray sums efficiently
- When you need to find equilibrium points
- 2D matrix range sum queries

## Pattern Recognition
- "Find sum of subarray from index i to j"
- "Multiple queries for range sums"
- "Find pivot index where left sum equals right sum"
- "Calculate rectangle sum in 2D matrix"

## Implementation Tips
1. **1D Prefix Sum**: prefix[i] = prefix[i-1] + arr[i]
2. **Range Sum**: sum(i,j) = prefix[j] - prefix[i-1] (handle i=0 case)
3. **2D Prefix Sum**: prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + matrix[i][j]
