# Final Plan 1: Single Sequence with Embedded Code

## Addressing the Critique
The key insight: Don't try to make the code emerge from pattern continuation. Instead, **the code IS the repeating pattern unit**.

## Revised Concept
The sequence shows a pattern that repeats, with some repetitions showing "?" marks. The child identifies what sequence repeats and that IS the code.

## Visual Layout
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│    1  2  3  4    1  2  3  4    ?  ?  ?  ?    1  2  3  4       │
│    ─────────    ─────────     ─────────     ─────────         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

## Key Design Decisions

### 1. Pattern = Code
The repeating unit is exactly the code. For code "1234":
- Pattern is "1234"
- Shown as: 1234 | 1234 | ???? | 1234

### 2. Visual Grouping
Group digits into clear blocks (underlines, boxes, or spacing) so the repeating unit is visually obvious.

### 3. Fixed Hidden Position
Always hide exactly ONE repetition (in the middle), so it's clear what to find.

### 4. Sufficient Context
Show at least 2 complete repetitions before and after the hidden section.

## Mechanics
1. Take the code (e.g., "1234")
2. Create groups: [1234] [1234] [????] [1234]
3. Visual grouping makes the pattern unit obvious
4. Child sees the repeating block and fills in the blanks

## Generator Controls
- **Canvas W, H**: Size controls
- **Code**: The pattern to repeat (this IS the code)
- **Number of repetitions**: How many times to show the pattern (min 4)
- **Hidden position**: Which repetition to hide (default: 3rd of 4)
- **Group spacing**: Distance between repetition groups
- **Digit spacing**: Distance between digits within a group
- **Digit size**: Relative to canvas height
- **Group indicator**: Underline, box, bracket, or spacing only
- **Show position markers**: Optional 1st, 2nd, 3rd, 4th labels

## Why This Works

### Instant Affordance ✓
Visual grouping shows repeating blocks. The "????" block is clearly one unit to fill.

### Creative > Academic ✓
It's pattern matching, not math. Like finding what's missing in a visual sequence.

### Minimal Text ✓
No text needed—the visual grouping is self-explanatory.

### Visual Clarity ✓
Clean groups with clear separation. High contrast.

### Unambiguous ✓
The code IS the pattern unit. If you identify the pattern, you have the code.

### Scales with N ✓
Works for 3-5 digit codes: [123][123][???][123] or [12345][12345][?????][12345]

### Child-Solvable ✓
"Find the pattern that repeats" is intuitive. Visual grouping makes it obvious.

### Generator-Friendly ✓
Trivial to generate: repeat the code N times, replace one with "?"s.

## Edge Cases Handled
- All digits same (1111): Pattern is "1111", still works
- Sequential (1234): Natural pattern
- Random (7382): Still clearly repeats as a unit
