# Interpretation 3: Progressive Fill Patterns

## Concept

Each digit panel shows a grid with a visual fill pattern (stripes, checkerboard, spiral, etc.) where colors follow a progression. One cell is "?" and the child must identify the color sequence to determine the missing value.

## Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│  [Color Legend Bar: 0=Red, 1=Blue, 2=Green, ...]        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌───────────────┐   ┌───────────────┐                 │
│  │ 0 │ 1 │ 2 │ 3 │   │ 0 │ 2 │ 4 │ 6 │                 │
│  ├───┼───┼───┼───┤   ├───┼───┼───┼───┤                 │
│  │ 1 │ 2 │ 3 │ 4 │   │ 1 │ 3 │ 5 │ 7 │                 │
│  ├───┼───┼───┼───┤   ├───┼───┼───┼───┤                 │
│  │ 2 │ 3 │ 4 │ ? │   │ 2 │ 4 │ 6 │ ? │                 │
│  └───────────────┘   └───────────────┘                 │
│  (Diagonal +1)        (Diagonal +2)                     │
│                                                         │
│  ┌───────────────┐   ┌───────────────┐                 │
│  │ 5 │ 5 │ 5 │ 5 │   │ 1 │ 2 │ 1 │ 2 │                 │
│  ├───┼───┼───┼───┤   ├───┼───┼───┼───┤                 │
│  │ 4 │ 4 │ 4 │ 4 │   │ 3 │ 4 │ 3 │ 4 │                 │
│  ├───┼───┼───┼───┤   ├───┼───┼───┼───┤                 │
│  │ ? │ 3 │ 3 │ 3 │   │ 1 │ 2 │ ? │ 2 │                 │
│  └───────────────┘   └───────────────┘                 │
│  (Row constant,       (2×2 tile repeat)                 │
│   decreasing)                                           │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Pattern Types Used

1. **Row Progression**: Each row has values increasing by N
2. **Column Progression**: Each column has values increasing by N
3. **Diagonal Progression**: Values increase along diagonals
4. **Constant Rows/Columns**: Each row or column is a single repeated value
5. **Tile Repeat**: A 2×2 pattern repeats across the grid
6. **Checkerboard**: Alternating pattern

## Grid Sizes

- 3×3 minimum for clear pattern visibility
- 4×4 for more complex patterns
- 3×4 or 4×3 rectangular options

## Solving Mechanics

1. Child scans the grid
2. Identifies the fill pattern (horizontal, vertical, diagonal)
3. Traces the pattern to where "?" appears
4. Determines the value based on pattern continuation
5. Verifies by checking consistency with other cells

## Cell Display Options

- **Color only**: Colored cells, rely on pattern recognition
- **Digit only**: Numbers (easier for arithmetic patterns)
- **Color + Digit**: Both visible

## Parameters

- Grid size
- Pattern type
- Step size for progressions
- Cell display mode
- Whether pattern is random or selectable
