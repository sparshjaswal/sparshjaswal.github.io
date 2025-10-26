# Reversal of Linked List (In-place)

## Description
Reversing a linked list in place without using extra space is key for problems that require in-place list manipulations.

## Time Complexity
O(n)

## Space Complexity
O(1)

## Key Concepts
- **Iterative Reversal**: Use three pointers (prev, current, next)
- **Recursive Reversal**: Reverse recursively with O(n) call stack
- **Partial Reversal**: Reverse only a portion of the linked list
- **Group Reversal**: Reverse nodes in groups of k

## Key Problems
- Reverse Linked List
- Reverse Nodes in k-Group
- Swap Nodes in Pairs

## When to Use
- Problems requiring linked list reversal
- Swapping or rearranging nodes in specific patterns
- Palindrome checking in linked lists
- Problems mentioning "reverse", "swap", or "rearrange" nodes

## Pattern Recognition
- "Reverse the entire linked list"
- "Reverse nodes in groups of k"
- "Swap every two adjacent nodes"
- "Reverse linked list between positions m and n"

## Key Techniques

### Basic Reversal (Iterative)
- Three pointers: prev, current, next
- Save next, reverse link, move pointers forward

### Basic Reversal (Recursive)
- Base case: null or single node
- Recursively reverse rest, then fix current node

### Partial Reversal
- Find the portion to reverse
- Reverse that portion
- Connect back to original list

### Group Reversal
- Process k nodes at a time
- Reverse each group
- Connect groups together
