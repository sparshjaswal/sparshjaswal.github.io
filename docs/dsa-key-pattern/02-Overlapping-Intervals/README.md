# Overlapping Intervals

## Description
Intervals are often manipulated through sorting and merging based on their start and end times.

## Time Complexity
O(n log n) - due to sorting

## Space Complexity
O(1) to O(n) depending on implementation

## Key Concepts
- **Sorting**: Sort intervals by start time (or end time based on problem)
- **Merging**: Combine overlapping intervals into single intervals
- **Non-overlapping**: Count or find intervals that don't overlap
- **Interval Insertion**: Insert new interval while maintaining sorted order

## Key Problems
- Basic Merge: Merge Intervals
- Interval Insertion: Insert Interval
- My Calendar II
- Minimum Number of Arrows to Burst Balloons
- Non-overlapping Intervals

## When to Use
- Problems involving time intervals, meeting rooms, or ranges
- When you need to merge overlapping periods
- Scheduling conflicts or optimization problems
- Range queries or interval manipulations

## Pattern Recognition
- "Merge overlapping intervals"
- "Find minimum meeting rooms required"
- "Schedule meetings without conflicts"
- "Find gaps in intervals"
- "Insert interval into sorted list"

## Common Approaches
1. **Sort + Merge**: Sort by start time, then merge overlapping intervals
2. **Sort + Count**: Sort and count non-overlapping intervals
3. **Interval Tree**: For complex interval queries (advanced)
