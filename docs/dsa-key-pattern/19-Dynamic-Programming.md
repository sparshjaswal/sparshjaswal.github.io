# Dynamic Programming

## Description
Dynamic Programming solves complex problems by breaking them down into simpler subproblems and storing results to avoid redundant calculations.

## Categories

## Take / Not take (DP)
**Description:** Solve optimization problems like selecting items with the max/min value under certain constraints.

**Time Complexity:** O(n × target)  
**Space Complexity:** O(n × target)

**Key Problems:**
- House Robber II
- Target Sum
- Partition Equal Subset Sum
- Ones and Zeroes
- Last Stone Weight II

**Pattern:** For each item, decide whether to take it or not. Optimize based on constraints.

## Infinite Supply (DP)
**Description:** Similar to the 0/1 knapsack, but items can be chosen multiple times.

**Time Complexity:** O(n × amount)  
**Space Complexity:** O(amount)

**Key Problems:**
- Coin Change
- Coin Change II
- Perfect Squares
- Minimum Cost For Tickets

**Pattern:** Each item can be used unlimited times. Build solution incrementally.

## Longest Increasing Subsequence
**Description:** Find the longest subsequence of a given sequence where the elements are in ascending order.

**Time Complexity:** O(n log n)  
**Space Complexity:** O(n)

**Key Problems:**
- Longest Increasing Subsequence
- Largest Divisible Subset
- Maximum Length of Pair Chain
- Number of LIS
- Longest String Chain

**Pattern:** Use patience sorting or DP with binary search optimization.

## DP on Grids
**Description:** Dynamic Programming on matrices involves solving problems that can be broken down into smaller overlapping subproblems within a matrix.

**Time Complexity:** O(m × n)  
**Space Complexity:** O(m × n)

**Key Problems:**
- Unique Paths II
- Minimum Path Sum
- Triangle
- Minimum Falling Path Sum
- Maximal Square
- Cherry Pickup
- Dungeon Game

**Pattern:** Build solution cell by cell, often considering paths from top and left.

## DP on Strings
**Description:** Problems involving 2 strings, focus on what happens when the last characters match or don't match.

**Time Complexity:** O(m × n) where m and n are string lengths  
**Space Complexity:** O(m × n)

**Key Problems:**
- Longest Common Subsequence
- Longest Palindromic Subsequence
- Palindromic Substrings
- Longest Palindromic Substrings
- Edit Distance
- Minimum ASCII Delete Sum for Two Strings
- Distinct Subsequences
- Shortest Common Supersequence
- Wildcard Matching

**Pattern:** Compare characters and decide based on match/mismatch.

## DP on Stocks
**Description:** Maximize profit from buying and selling stocks over time while considering constraints.

**Time Complexity:** O(n)  
**Space Complexity:** O(1) to O(n)

**Key Problems:**
- Buy and Sell Stocks II
- Buy and Sell Stocks III
- Buy and Sell Stocks IV
- Buy and Sell Stocks with Cooldown
- Buy and Sell Stocks with Transaction fee

**Pattern:** Track states (holding/not holding stock, transactions used).

## Partition DP (MCM)
**Description:** Divide sequence into partitions optimally. Explore all possible partitions and combine results.

**Time Complexity:** O(n³)  
**Space Complexity:** O(n²)

**Key Problems:**
- Partition array for Maximum Sum
- Burst Balloons
- Minimum Cost to Cut a Stick
- Palindrome Partitioning II

**Pattern:** Try all possible partition points and combine optimal solutions of subproblems.

https://leetcode.com/discuss/post/458695/dynamic-programming-patterns-by-aatalyk-pmgr/
https://leetcode.com/discuss/post/662866/dp-for-beginners-problems-patterns-sampl-atdb/
