# Basic Data Structures

This section provides an in-depth look at the foundational data structures essential for programming and problem-solving. Here, you'll find detailed descriptions, operations, examples, and practice questions for each structure.

## 1. Arrays
- **Description:** Arrays are collections of elements stored at contiguous memory locations. They allow random access and efficient traversal.
- **Common Operations:** Insertion, deletion, traversal, searching, updating
- **Example:**
  ```python
  arr = [1, 2, 3, 4, 5]
  print(arr[2])  # Output: 3
  ```
- **Practice Questions:**
  - Find the maximum element in an array
  - Reverse an array
  - Remove duplicates from a sorted array

## 2. Strings
- **Description:** Strings are sequences of characters. They are widely used for text processing.
- **Common Operations:** Concatenation, substring, searching, comparison
- **Example:**
  ```python
  s = "hello"
  print(s.upper())  # Output: HELLO
  ```
- **Practice Questions:**
  - Check if a string is a palindrome
  - Find the first non-repeating character
  - Implement strstr (substring search)

## 3. Linked Lists
- **Description:** Linked lists are linear data structures where elements (nodes) point to the next node. Useful for dynamic memory allocation.
- **Common Operations:** Insertion, deletion, traversal, reversal
- **Example:**
  ```python
  class Node:
      def __init__(self, data):
          self.data = data
          self.next = None
  ```
- **Practice Questions:**
  - Reverse a linked list
  - Detect a cycle in a linked list
  - Merge two sorted linked lists

## 4. Stacks
- **Description:** Stacks are LIFO (Last-In-First-Out) data structures. Useful for undo operations, parsing, and backtracking.
- **Common Operations:** Push, pop, peek, isEmpty
- **Example:**
  ```python
  stack = []
  stack.append(1)
  stack.pop()
  ```
- **Practice Questions:**
  - Implement a stack using arrays
  - Evaluate a postfix expression
  - Check for balanced parentheses

## 5. Queues
- **Description:** Queues are FIFO (First-In-First-Out) data structures. Used in scheduling, buffering, and BFS algorithms.
- **Common Operations:** Enqueue, dequeue, front, isEmpty
- **Example:**
  ```python
  from collections import deque
  queue = deque()
  queue.append(1)
  queue.popleft()
  ```
- **Practice Questions:**
  - Implement a queue using stacks
  - Circular queue implementation
  - Generate binary numbers from 1 to N

---

Explore each section for more details, code samples, and additional practice problems!