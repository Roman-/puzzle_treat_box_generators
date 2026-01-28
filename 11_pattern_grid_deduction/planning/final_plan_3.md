# Final Plan 3: 2×2 Tile Completion

## Concept

Each panel shows a 2×2 grid with 3 filled cells and 1 "?" cell. The child must identify the relationship between cells (all same, or simple 2-color pattern) and deduce the missing one. Extremely simple grids for maximum clarity.

## Key Improvements from Critique

1. **Minimal grid size (2×2)** - only 4 cells total, very clean
2. **Only two pattern types**:
   - All four cells same color (trivially easy)
   - Two colors in symmetric arrangement
3. **No multi-step patterns** - relationship is immediately visible
4. **Very child-friendly** - almost impossible to fail

## Visual Layout

```
┌─────────────────────────────────────────────────────────────┐
│  ● 0  ● 1  ● 2  ● 3  ● 4  ● 5  ● 6  ● 7  ● 8  ● 9          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│    ┌─────────┐     ┌─────────┐     ┌─────────┐             │
│    │  3  │ 3 │     │  7  │ 2 │     │  5  │ 5 │             │
│    ├─────┼───┤     ├─────┼───┤     ├─────┼───┤             │
│    │  ?  │ 3 │     │  2  │ ? │     │  5  │ ? │             │
│    └─────────┘     └─────────┘     └─────────┘             │
│                                                             │
│    All same        Diagonal        All same                │
│    Answer: 3       Answer: 7       Answer: 5               │
│                                                             │
│    ┌─────────┐     (if 5 digits)                           │
│    │  1  │ 4 │                                             │
│    ├─────┼───┤                                             │
│    │  4  │ ? │                                             │
│    └─────────┘                                             │
│    X-pattern                                               │
│    Answer: 1                                               │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

## Pattern Types

### Type A: All Same (Easiest)
```
A │ A       A │ A       A │ ?
──┼──   or  ──┼──   or  ──┼──
A │ ?       ? │ A       A │ A

Answer: A (obviously)
```

### Type B: Diagonal Match
```
A │ B       B │ A
──┼──   or  ──┼──
B │ ?       ? │ B

Answer: A (diagonals match)
```

### Type C: Horizontal Pairs
```
A │ A       B │ B
──┼──   or  ──┼──
B │ ?       A │ ?

Answer: B or A (rows match)
```

### Type D: Vertical Pairs
```
A │ B       A │ B
──┼──   or  ──┼──
A │ ?       ? │ B

Answer: B or A (columns match)
```

## Solving Mechanics

1. Child sees 3 colored cells and 1 "?"
2. Notices the relationship (all same? pairs? diagonal?)
3. Deduces missing cell based on pattern
4. Reads digit from cell or looks up color in legend

## Difficulty Levels

| Level | Pattern Types | Description |
|-------|---------------|-------------|
| Easy | All Same only | Just match the color |
| Medium | All Same + Pairs | Rows or columns match |
| Hard | All + Diagonal | Requires diagonal thinking |

## Cell Display Modes

- **Color only**: Colored squares
- **Digit only**: Numbers in cells
- **Color + Digit**: Both (default)

## Pattern Generation Logic

```javascript
function generate2x2Grid(answerDigit, level) {
  // Level 1: All same - just fill with answerDigit
  // Level 2: Pairs - create row or column pairs
  // Level 3: Diagonal - create diagonal pattern

  // Always ensure the "?" position reveals answerDigit
}
```

## Parameters

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| cellSize | range | 30-90% | 60 | Cell size relative to panel |
| difficulty | select | easy/medium/hard | medium | Pattern complexity |
| displayMode | select | color/digit/both | both | What cells show |
| panelSpacing | range | 10-50 | 40 | Gap between panels |
| gridBorder | range | 1-5 | 2 | Grid line thickness |

## Why This Works

1. **Instant Affordance**: 3 cells visible, pattern obvious
2. **Creative > Academic**: Visual pattern matching, no math
3. **Unambiguous**: With only 4 cells, pattern is clear
4. **Child-Solvable**: Extremely simple - even a 4-year-old can do it
5. **Visual Clarity**: Large cells, simple layout
6. **Scales with N**: Just add more 2×2 panels
7. **Failure-proof**: Few edge cases possible
8. **Generator-friendly**: Very simple to implement
