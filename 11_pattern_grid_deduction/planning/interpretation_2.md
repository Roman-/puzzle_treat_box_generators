# Interpretation 2: Mathematical Rule Grids

## Concept

Each digit panel shows a grid where numbers follow mathematical rules (row sums, column sums, multiplication tables, etc.). One cell is "?" and the child must apply the rule to find the missing value.

## Visual Layout

```
┌─────────────────────────────────────────────────────────┐
│  [Color Legend Bar: 0=Red, 1=Blue, 2=Green, ...]        │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────────┐   ┌─────────────┐   ┌─────────────┐   │
│  │  1  │  2  │ 3 │   │  2  │  2  │ 4 │   │  3  │  1  │ 4 │
│  ├─────┼─────┼───┤   ├─────┼─────┼───┤   ├─────┼─────┼───┤
│  │  3  │  1  │ 4 │   │  1  │  3  │ 4 │   │  2  │  2  │ 4 │
│  ├─────┼─────┼───┤   ├─────┼─────┼───┤   ├─────┼─────┼───┤
│  │  4  │  3  │ ? │   │  3  │  5  │ ? │   │  5  │  3  │ ? │
│  └─────────────┘   └─────────────┘   └─────────────┘   │
│  (Row sum in      (Row sum)          (Row sum)          │
│   last column)                                          │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

## Pattern Types Used

1. **Row Sum**: Last cell = sum of row (with modulo 10 for single digit)
2. **Column Sum**: Bottom cell = sum of column (mod 10)
3. **Cross Sum**: Cell = sum of row + column header
4. **Difference**: Cell = difference between neighbors
5. **Sequence**: Numbers follow arithmetic progression

## Grid Configurations

- 3×3 with one "sum" column/row
- 2×3 simple grids
- 2×2 with visible pattern

## Solving Mechanics

1. Child examines the grid
2. Notices the mathematical relationship (e.g., rows sum to last column)
3. Applies the same rule to the row with "?"
4. Calculates the missing value
5. Maps to color using legend (optional)

## Cell Display Options

- **Color only**: Just colored squares (requires legend lookup for calculation)
- **Digit only**: Numbers shown directly
- **Color + Digit**: Both shown (easiest mode)

## Parameters

- Grid dimensions
- Rule type (sum, difference, sequence)
- Whether to show hint about the rule
- Cell size and spacing
- Modulo behavior for values > 9
