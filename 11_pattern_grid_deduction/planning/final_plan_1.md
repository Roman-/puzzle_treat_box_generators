# Final Plan 1: Mirror Symmetry Grids (with Visual Axis)

## Concept

Each panel shows a 3×3 grid with clear VERTICAL mirror symmetry. A subtle visual line marks the symmetry axis. One cell on either side of the axis shows "?" and the child simply looks at its mirror counterpart to find the answer.

## Key Improvements from Critique

1. **Only vertical mirror symmetry** - removes guessing which symmetry type
2. **Visual axis line** - makes the rule instantly obvious
3. **3×3 grid** - large enough to establish pattern clearly
4. **Middle column is the axis** - clean, obvious division
5. **Color + Digit mode default** - reduces cognitive steps

## Visual Layout

```
┌─────────────────────────────────────────────────────────────┐
│  ● 0  ● 1  ● 2  ● 3  ● 4  ● 5  ● 6  ● 7  ● 8  ● 9          │
│  (Color legend with circles and digit labels)               │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌───┬───┬───┐   ┌───┬───┬───┐   ┌───┬───┬───┐             │
│  │ 3 │ 5 │ 3 │   │ 7 │ 2 │ 7 │   │ 1 │ 0 │ 1 │             │
│  ├───┼───┼───┤   ├───┼───┼───┤   ├───┼───┼───┤             │
│  │ 8 │ 1 │ ? │   │ 4 │ 9 │ ? │   │ 6 │ 3 │ ? │             │
│  ├───┼───┼───┤   ├───┼───┼───┤   ├───┼───┼───┤             │
│  │ 2 │ 6 │ 2 │   │ 0 │ 5 │ 0 │   │ 9 │ 8 │ 9 │             │
│  └───┴─│─┴───┘   └───┴─│─┴───┘   └───┴─│─┴───┘             │
│        │               │               │                    │
│     [axis]          [axis]          [axis]                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Answers: 8, 4, 6 (mirror of left column)
```

## Solving Mechanics

1. Child sees the vertical line (axis)
2. Notices left and right sides are mirrored
3. Finds "?" on right side
4. Looks at corresponding cell on left side
5. That's the answer (either read color or digit)

## Cell Display Modes (User Toggle)

- **Color only**: Colored squares, use legend to map to digit
- **Digit only**: Numbers in cells, no color (simpler)
- **Color + Digit**: Colored squares with white digit overlay (default, easiest)

## Pattern Generation Logic

```javascript
function generateMirrorGrid(answerDigit) {
  // Create 3x3 grid where column[0] mirrors column[2]
  // Middle column (axis) is free to be any value
  // Place "?" randomly on column 0 or 2
  // The mirror cell contains answerDigit
}
```

## Parameters

| Parameter | Type | Range | Default | Description |
|-----------|------|-------|---------|-------------|
| cellSize | range | 20-80% | 50 | Cell size as % of available height |
| showAxis | checkbox | - | true | Show symmetry axis line |
| axisStyle | select | line/dashed/gradient | line | Axis visualization style |
| displayMode | select | color/digit/both | both | What cells show |
| panelSpacing | range | 10-50 | 30 | Gap between panels |
| gridBorder | range | 1-5 | 2 | Grid line thickness |

## Why This Works

1. **Instant Affordance**: Axis line immediately shows "this is a mirror puzzle"
2. **Creative > Academic**: It's a visual matching game, not math
3. **Unambiguous**: Vertical mirror only = one possible answer
4. **Child-Solvable**: Just match left to right
5. **Visual Clarity**: Simple 3×3 grids with clear lines
6. **Scales with N**: Add more panels for more digits
