# Greedy

## Description
Greedy algorithms make local optimal choices at each step, which lead to a global optimal solution for problems like scheduling and resource allocation.

## Time Complexity
O(n log n) typically due to sorting

## Space Complexity
O(1) to O(n)

## Key Concepts
- **Local Optimal Choice**: Make the best choice at each step
- **Greedy Choice Property**: Local optimal choices lead to global optimum
- **No Backtracking**: Once a choice is made, it's never reconsidered
- **Sorting Often Required**: Many greedy problems require initial sorting

## Key Problems
- Jump Game II
- Gas Station
- Bag of Tokens
- Boats to Save People
- Wiggle Subsequence
- Car Pooling
- Candy
- https://leetcode.com/discuss/post/669996/greedy-for-beginners-problems-sample-sol-rf7c/
- https://leetcode.com/discuss/post/3972722/top-greedy-questions-helpful-for-oa-and-17zbd/

## When to Use
- Optimization problems where greedy choice leads to optimal solution
- Scheduling and resource allocation problems
- Problems where you can prove greedy approach works
- When optimal substructure and greedy choice properties hold

## Pattern Recognition
- "Minimum/maximum number of..."
- "Optimal scheduling/allocation"
- "Interval scheduling problems"
- "Activity selection problems"
- Problems where local best choice seems to work

## Common Greedy Strategies

### Activity Selection
- Sort by end time
- Select activity that ends earliest and doesn't conflict

### Interval Scheduling
- Sort intervals by start/end time
- Greedily select non-overlapping intervals

### Fractional Knapsack
- Sort by value-to-weight ratio
- Take items in order of ratio

### Huffman Coding
- Build optimal prefix-free codes
- Always merge two least frequent nodes

## Proving Greedy Works
1. **Greedy Choice Property**: Show that local optimal choice leads to global optimum
2. **Optimal Substructure**: Show that optimal solution contains optimal solutions to subproblems
3. **Exchange Argument**: Show that any optimal solution can be transformed to greedy solution

## When Greedy Fails
- 0/1 Knapsack (need DP)
- Longest Path in general graphs
- Graph coloring with minimum colors
