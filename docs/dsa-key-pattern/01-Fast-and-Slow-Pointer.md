# Fast and Slow Pointer

## Description
This technique uses two pointers moving at different speeds to solve problems involving cycles, such as finding the middle of a list, detecting loops, or checking for palindromes.

## Time Complexity
O(n)

## Space Complexity
O(1)

## Key Concepts
- **Two Pointer Technique**: Use two pointers that move at different speeds
- **Cycle Detection**: Fast pointer moves 2 steps, slow pointer moves 1 step
- **Middle Finding**: When fast pointer reaches end, slow pointer is at middle
- **Palindrome Checking**: Use fast/slow to find middle, then reverse and compare

## Key Problems
- Linked List Cycle II
- Remove nth Node from the End of List
- Find the Duplicate Number
- Palindrome Linked List

## When to Use
- Problems involving cycles in linked lists or arrays
- Finding middle elements without knowing the length
- Detecting palindromes in linked lists
- Problems where you need to traverse at different speeds

## Pattern Recognition
- "Find the middle of a linked list"
- "Detect if there's a cycle"
- "Find the start of a cycle"
- "Check if a linked list is a palindrome"
