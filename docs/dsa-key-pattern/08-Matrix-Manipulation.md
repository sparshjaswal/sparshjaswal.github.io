# Matrix Manipulation

## Description
Problems involving 2D arrays (matrices) are often solved using row-column traversal or manipulation based on matrix properties.

## Time Complexity
O(m×n)

## Space Complexity
O(1) to O(m×n)

## Key Concepts
- **In-place Rotation**: Rotate matrix without extra space
- **Spiral Traversal**: Traverse matrix in spiral pattern
- **Layer-by-layer**: Process matrix in concentric layers
- **Row/Column Operations**: Modify entire rows or columns based on conditions

## Key Problems
- Rotate Image
- Spiral Matrix
- Set Matrix Zeroes
- Game of Life

## When to Use
- 2D array transformation problems
- Matrix traversal in specific patterns
- Problems requiring rotation, transposition, or reflection
- Cellular automaton type problems

## Pattern Recognition
- "Rotate matrix by 90 degrees"
- "Traverse matrix in spiral order"
- "Set entire row/column to zero"
- "Transform matrix based on neighbor states"

## Common Techniques

### Matrix Rotation
1. **Transpose**: Swap matrix[i][j] with matrix[j][i]
2. **Reverse Rows**: Reverse each row for clockwise rotation

### Spiral Traversal
1. Define boundaries: top, bottom, left, right
2. Traverse: right → down → left → up
3. Shrink boundaries after each direction

### In-place Modifications
- Use matrix values to store state information
- Use specific values as markers
- Process in multiple passes if needed

### Layer Processing
- Process outermost layer first
- Move inward layer by layer
- Useful for rotation and spiral problems
