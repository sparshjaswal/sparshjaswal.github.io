# Bitwise XOR

## Description
XOR is a powerful bitwise operator that can solve problems like finding single numbers or efficiently pairing elements.

## Time Complexity
O(n)

## Space Complexity
O(1)

## Key Concepts
- **XOR Properties**: a ⊕ a = 0, a ⊕ 0 = a, XOR is commutative and associative
- **Cancel Out Pairs**: XOR of identical numbers equals 0
- **Bit Manipulation**: Work with individual bits for efficient solutions
- **Toggle Operation**: XOR with 1 flips the bit

## Key Problems
- Missing Number
- Single Number II
- Single Number III
- Find the Original array of Prefix XOR
- XOR Queries of a Subarray

## When to Use
- Finding single/unique elements when others appear in pairs
- Problems involving bit manipulation
- Canceling out paired elements efficiently
- Toggle operations on bits

## Pattern Recognition
- "Every element appears twice except one"
- "Find missing number"
- "Toggle bits based on condition"
- "XOR operations on subarrays"
- "Find unique elements"

## XOR Properties & Tricks

### Basic Properties
- a ⊕ a = 0 (self XOR is 0)
- a ⊕ 0 = a (XOR with 0 is identity)
- XOR is commutative: a ⊕ b = b ⊕ a
- XOR is associative: (a ⊕ b) ⊕ c = a ⊕ (b ⊕ c)

### Common Techniques
- **Find Single Number**: XOR all elements, pairs cancel out
- **Missing Number**: XOR all numbers and indices
- **Bit Flipping**: XOR with mask to flip specific bits
- **Two Single Numbers**: Use XOR and bit manipulation to separate

### Advanced Applications
- **Prefix XOR**: Similar to prefix sum but with XOR
- **XOR Queries**: Answer range XOR queries efficiently
- **Bit Manipulation Tricks**: Check power of 2, count set bits, etc.
