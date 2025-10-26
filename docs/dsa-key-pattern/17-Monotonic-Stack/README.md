# Monotonic Stack

## Description
A monotonic stack helps solve range queries by maintaining a stack of elements in increasing or decreasing order.

## Time Complexity
O(n)

## Space Complexity
O(n)

## Key Concepts
- **Monotonic Property**: Stack maintains elements in strictly increasing/decreasing order
- **Next Greater/Smaller**: Find next greater or smaller element for each array element
- **Range Queries**: Efficiently solve problems involving ranges and comparisons
- **Previous/Next Elements**: Track relationships between elements

## Key Problems
- Next Greater Element II
- Next Greater Node in Linked List
- Daily Temperatures
- Online Stock Span
- Maximum Width Ramp
- Largest Rectangle in Histogram

## When to Use
- Finding next/previous greater or smaller elements
- Range-based problems with comparisons
- Problems involving spans, widths, or areas
- When you need to track relationships between elements

## Pattern Recognition
- "Next greater/smaller element"
- "Temperature span problems"
- "Largest rectangle in histogram"
- "Maximum/minimum in ranges"
- "Stock span problems"

## Types of Monotonic Stacks

### Increasing Stack (Non-decreasing)
- Maintains elements in increasing order
- Used for finding next smaller elements
- Pop elements when current element is smaller

### Decreasing Stack (Non-increasing)
- Maintains elements in decreasing order
- Used for finding next greater elements
- Pop elements when current element is larger

## Algorithm Pattern
1. **Initialize**: Empty stack
2. **For each element**:
   - While stack is not empty AND stack.top() violates monotonic property:
     - Pop from stack and process relationship
   - Push current element to stack
3. **Final processing**: Handle remaining elements in stack

## Applications
- **Next Greater Element**: Use decreasing stack
- **Next Smaller Element**: Use increasing stack
- **Largest Rectangle**: Classic histogram problem using increasing stack
- **Sliding Window Maximum**: Can be solved using monotonic deque
