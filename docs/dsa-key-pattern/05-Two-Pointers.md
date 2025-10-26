# Two Pointers

## Description
The two pointers technique involves having two different indices move through the input at different speeds to solve various array or linked list problems.

## Time Complexity
O(n)

## Space Complexity
O(1)

## Key Concepts
- **Opposite Direction**: Pointers start at opposite ends and move towards each other
- **Same Direction**: Both pointers move in the same direction at different speeds
- **Target Sum**: Use sorted array property to find pairs with target sum
- **Partitioning**: Separate elements based on certain criteria

## Key Problems
- Two Sum II - Input Array is Sorted
- Dutch National Flag: Sort Colors
- Next Permutation
- Bag of Tokens
- Container with Most Water
- Trapping Rain Water
- https://leetcode.com/discuss/post/1688903/solved-all-two-pointers-problems-in-100-z56cn/

## When to Use
- Sorted arrays where you need to find pairs or triplets
- Problems requiring partitioning or rearranging
- Optimizing brute force O(n²) solutions to O(n)
- Palindrome checking in arrays/strings

## Pattern Recognition
- "Find pair with target sum in sorted array"
- "Remove duplicates from sorted array"
- "Reverse or rearrange array elements"
- "Find three numbers that sum to target"
- "Separate elements based on condition"

## Common Approaches

### Opposite Direction (Converging)
- Start: left = 0, right = n-1
- Move pointers based on condition
- Used for: target sum, palindrome check, container problems

### Same Direction (Fast-Slow)
- Both pointers start from beginning
- Fast pointer moves ahead based on condition
- Used for: removing elements, partitioning

### Three Pointers
- Extension for three-sum type problems
- Fix one pointer, use two-pointer on remaining array
