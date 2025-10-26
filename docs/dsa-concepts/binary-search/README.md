# Binary Search

## Overview
Binary Search is a highly efficient searching algorithm that works on sorted arrays/lists by repeatedly dividing the search interval in half. It's one of the most fundamental algorithms in computer science.

## How It Works
1. **Compare** the target value with the middle element
2. **If equal** - return the index
3. **If target is less** - search the left half
4. **If target is greater** - search the right half
5. **Repeat** until found or search space is empty

## Time Complexity
- **Best Case**: O(1) - target is the middle element
- **Average Case**: O(log n)
- **Worst Case**: O(log n)

## Space Complexity
- **Iterative**: O(1)
- **Recursive**: O(log n) - due to call stack

## Prerequisites
- **Array must be sorted** (ascending or descending order)
- **Random access** to elements (arrays work better than linked lists)

## Basic Implementation

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1; // Target not found
}
```

## Common Variations

### 1. **Find First Occurrence**
```javascript
function findFirst(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            right = mid - 1; // Continue searching left
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

### 2. **Find Last Occurrence**
```javascript
function findLast(arr, target) {
    let left = 0, right = arr.length - 1;
    let result = -1;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            result = mid;
            left = mid + 1; // Continue searching right
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```

## Common Problems
- **Search Insert Position**
- **Find Peak Element**
- **Search in Rotated Sorted Array**
- **Find Minimum in Rotated Sorted Array**
- **Median of Two Sorted Arrays**

## When to Use Binary Search
- ✅ Searching in sorted arrays
- ✅ Finding insertion points
- ✅ Range queries on sorted data
- ✅ Optimization problems (minimize/maximize)
- ✅ When you need O(log n) search time

## Common Pitfalls
- ❌ **Forgetting array is sorted requirement**
- ❌ **Integer overflow in mid calculation** (use `left + (right - left) / 2`)
- ❌ **Off-by-one errors** in boundary conditions
- ❌ **Infinite loops** due to incorrect boundary updates

## Additional Resources
- [LeetCode: 5 Variations of Binary Search](https://leetcode.com/discuss/post/1322500/5-variations-of-binary-search-a-self-not-lkqp/)
- [LeetCode: Binary Search for Beginners](https://leetcode.com/discuss/post/691825/binary-search-for-beginners-problems-pat-0hei/)

---

*Binary Search is a fundamental algorithm that every programmer should master. Its O(log n) time complexity makes it invaluable for efficient searching and optimization problems.*