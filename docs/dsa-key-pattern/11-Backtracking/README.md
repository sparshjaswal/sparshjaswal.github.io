# Backtracking

## Description
Backtracking helps in problems where you need to explore all potential solutions, such as solving puzzles, generating combinations, or finding paths.

## Time Complexity
O(b^d) where b is branching factor and d is depth

## Space Complexity
O(d) for recursion stack

## Key Concepts
- **Explore and Backtrack**: Try a choice, if it doesn't work, undo and try next
- **Decision Tree**: Each choice creates a branch in the solution tree
- **Pruning**: Skip branches that can't lead to valid solutions
- **State Management**: Track current state and undo changes when backtracking

## Key Problems
- Permutation II
- Combination Sum
- Generate Parenthesis
- N-Queens
- Sudoku Solver
- Palindrome Partitioning
- Word Search

## When to Use
- Generate all possible combinations/permutations
- Solve constraint satisfaction problems (puzzles)
- Find all valid arrangements or paths
- Problems with multiple choices at each step

## Pattern Recognition
- "Find all possible..."
- "Generate all combinations/permutations"
- "Solve puzzle" (Sudoku, N-Queens)
- "Count number of ways"
- "Find all valid paths/arrangements"

## Backtracking Template
1. **Base Case**: Check if current solution is complete
2. **Make Choice**: Try each possible choice
3. **Recurse**: Continue with the choice made
4. **Backtrack**: Undo the choice and try next option

## Common Patterns

### Combination/Subset Generation
- Choose or don't choose each element
- Maintain current combination

### Permutation Generation
- Try each unused element at current position
- Track used elements

### Constraint Satisfaction
- Try each possible value
- Check if choice violates constraints
- Backtrack if constraint violated

### Path Finding
- Try each possible direction/move
- Mark visited, recurse, unmark when backtracking
