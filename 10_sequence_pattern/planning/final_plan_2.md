# Final Plan 2: Vertical Columns with Pattern Completion

## Addressing the Critique
Instead of multiple independent patterns (confusing), use a **single visual pattern** displayed as aligned vertical columns where each column represents one digit position.

## Revised Concept
Display columns of circles/shapes where each column follows the same color/shape pattern. The bottom row shows "?" for each column. The child follows each column's pattern to determine what goes in the "?" position—but all columns use the same pattern, just starting with different values.

Actually, simpler: **Each column shows a countdown/count-up or simple arithmetic progression to the answer digit.**

## Visual Layout
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│      Col 1      Col 2      Col 3      Col 4                   │
│                                                                │
│        4          5          6          7                      │
│        3          4          5          6                      │
│        2          3          4          5                      │
│        ?          ?          ?          ?                      │
│                                                                │
│      (1)        (2)        (3)        (4)  ← answers          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

## Key Design Decisions

### 1. Consistent Pattern Type
All columns use the SAME progression type (e.g., all counting down by 1). This unifies the puzzle visually and cognitively.

### 2. Visual Column Alignment
Columns are clearly separated and aligned. Each column is obviously independent but follows the same rule.

### 3. Answer Position is Always Bottom
The "?" is always at the bottom of each column, making extraction order obvious (left to right).

### 4. Simple Progressions
Use patterns that are trivially recognizable:
- Counting down: 5, 4, 3, ?
- Counting up: 1, 2, 3, ?
- Even numbers: 2, 4, 6, ?
- Skip counting: 1, 3, 5, ?

## Mechanics
1. For code "1234", create 4 columns
2. Each column shows a simple progression ending at its target digit
3. Column 1 ends at 1, Column 2 ends at 2, etc.
4. The progression (counting down, up, etc.) is the same for all columns
5. Child follows each column's pattern, reads answers left-to-right

## Generator Controls
- **Canvas W, H**: Size
- **Code**: The target digits
- **Pattern type**: Countdown, count-up, even, odd, etc.
- **Steps shown**: How many numbers visible before the "?" (3-6)
- **Element style**: Plain digits, circles with digits, squares
- **Column spacing**: Gap between columns
- **Row spacing**: Gap between rows
- **Element size**: Relative sizing

## Why This Works

### Instant Affordance ✓
Vertical columns with "?" at bottom—obvious to fill in each column, read left-to-right.

### Creative > Academic ✓
Simple progressions feel like puzzles, not math homework.

### Minimal Text ✓
No text needed. Visual structure is self-explanatory.

### Visual Clarity ✓
Clean grid of aligned elements. High contrast.

### Unambiguous ✓
Each column has one answer. Left-to-right reading is natural.

### Scales with N ✓
3-5 columns for 3-5 digit codes. Layout adjusts naturally.

### Child-Solvable ✓
"What comes next?" in a simple sequence is age-appropriate.

### Generator-Friendly ✓
Given target digit and pattern type, generate N preceding values.

## Progression Options
- **Countdown**: 4-3-2-? = 1
- **Count-up**: Works but need ceiling (7-8-9-? = 0? wrap around)
- **Skip-2**: 1-3-5-? = 7
- **Even down**: 8-6-4-? = 2
- **Odd down**: 9-7-5-? = 3
