# Final Plan 2: Row/Column Matching Grids

## Concept

Each panel shows a 3×3 grid where each ROW contains identical colors (horizontal stripes). One cell shows "?" and the child simply looks at the other cells in the same row to find the answer. No math, just visual matching.

## Key Improvements from Critique

1. **No arithmetic** - just "find the matching color in this row"
2. **Stripe pattern is visually obvious** - rows of same color
3. **Extremely simple rule** - if row is all red, missing cell is red
4. **Toggle between row-match and column-match** patterns

## Visual Layout

### Row-Match Mode (Horizontal Stripes)
```
┌─────────────────────────────────────────────────────────────┐
│  ● 0  ● 1  ● 2  ● 3  ● 4  ● 5  ● 6  ● 7  ● 8  ● 9          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐             │
│  │ 3 │ 3 │ 3 │   │ 7 │ 7 │ 7 │   │ 2 │ 2 │ 2 │   ← all same│
│  ├───────────┤   ├───────────┤   ├───────────┤             │
│  │ 8 │ ? │ 8 │   │ 1 │ 1 │ ? │   │ ? │ 6 │ 6 │   ← all same│
│  ├───────────┤   ├───────────┤   ├───────────┤             │
│  │ 5 │ 5 │ 5 │   │ 4 │ 4 │ 4 │   │ 0 │ 0 │ 0 │   ← all same│
│  └───────────┘   └───────────┘   └───────────┘             │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Answers: 8, 1, 6 (same as other cells in row)
```

### Column-Match Mode (Vertical Stripes)
```
┌───────────┐
│ 3 │ 8 │ 5 │  ← all different
├───┼───┼───┤
│ 3 │ ? │ 5 │  ← same as above/below
├───┼───┼───┤
│ 3 │ 8 │ 5 │  ← all different
└───────────┘

Answer: 8 (same as other cells in column)
```

## Solving Mechanics

1. Child looks at the grid
2. Notices rows (or columns) are all the same color
3. Finds the "?" cell
4. Looks at other cells in the same row/column
5. The answer is whatever color those cells are

## Cell Display Modes (User Toggle)

- **Color only**: Colored squares with subtle grid lines
- **Digit only**: Numbers (pattern still visible as same numbers)
- **Color + Digit**: Both (default)

## Pattern Types (Select)

1. **Rows match**: Each row is a single color (horizontal stripes)
2. **Columns match**: Each column is a single color (vertical stripes)
3. **Random**: Randomly pick row or column for each panel

## Pattern Generation Logic

```javascript
function generateStripedGrid(answerDigit, mode) {
  // mode: 'row' or 'column'

  if (mode === 'row') {
    // Pick 3 random colors for 3 rows
    // One row's color = answerDigit
    // Place "?" somewhere in that row
  } else {
    // Pick 3 random colors for 3 columns
    // One column's color = answerDigit
    // Place "?" somewhere in that column
  }
}
```

## Parameters

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| cellSize | range | 20-80% | 50 | Cell size as % of available height |
| patternMode | select | row/column/random | row | Stripe direction |
| displayMode | select | color/digit/both | both | What cells show |
| panelSpacing | range | 10-50 | 30 | Gap between panels |
| gridBorder | range | 1-5 | 2 | Grid line thickness |
| gridSize | select | 2x3/3x3/3x4 | 3x3 | Grid dimensions |

## Why This Works

1. **Instant Affordance**: Stripes are immediately visible - "match the stripe"
2. **Creative > Academic**: Visual matching, zero math
3. **Unambiguous**: Row is clearly all same color, answer is obvious
4. **Child-Solvable**: Extremely simple rule
5. **Visual Clarity**: Bold color stripes, high contrast
6. **Scales with N**: Each panel is independent
7. **Failure-proof**: No ambiguous edge cases
