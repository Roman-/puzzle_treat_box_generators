# Final Plan 2: Color + Size Based Label Haystack

## Concept
Address the "academic" criticism of pure numeric comparison by combining color AND visual properties. Instead of "find smallest number" (math), use "find the SMALLEST RED label" (visual search + color filtering).

## Key Improvement Over Interpretation 2
- Don't compare numeric values (too mathy)
- Compare VISUAL SIZE of labels
- Add color as a filter to reduce candidates
- E.g., "Find the smallest RED label" - child must:
  1. Identify all red labels (color filtering)
  2. Compare their visual sizes
  3. Read the smallest red one

## Addressing Critique Issues

### Not academic
- Visual size comparison is intuitive, not mathematical
- Color filtering makes it a two-step visual game
- No numeric comparison needed

### Leverage color
- Color is used as a primary filter mechanism
- Multiple labels share the same color, but vary in size
- The target is defined by color + relative size

### Clear semantics
- "smallest" and "biggest" refer to VISUAL SIZE, not numeric value
- Avoid confusion by making size differences obvious (2x-3x variation)

## Visual Design
```
┌────────────────────────────────────────────┐
│        Find the smallest BLUE label        │
├────────────────────────────────────────────┤
│                                            │
│    7392        2847                        │
│   (small,blue)  (big,red)                  │
│                    1234    9405            │
│                 (tiny,blue) (med,green)    │
│    8127                                    │
│   (big,blue)     6291                      │
│                 (small,red)                │
└────────────────────────────────────────────┘
```
Here, 1234 is the smallest blue label (the answer).

## Mechanics
1. Several labels share the target color (e.g., 3 blue labels)
2. These have different visual sizes (font sizes)
3. The smallest/biggest among them is the answer
4. Other colors are distractors

## Controls
1. Canvas W/H
2. Code input + 🎲
3. Total number of labels (15-40)
4. Number of target-color labels (3-6)
5. Size variance (how different sizes can be)
6. Rotation variance
7. Rule type: smallest/biggest
8. Color selector (or random)

## Implementation Details

### Size Levels
- Define 3-5 distinct size levels (e.g., 50%, 75%, 100%, 125%, 150% of base)
- Answer gets the extreme size (smallest or biggest)
- Other same-color labels get middle sizes
- Ensure answer is clearly distinguishable

### Label Distribution
- X labels in target color (one is answer, others are decoys)
- Remaining labels in random other colors (full distractors)

## Files
- `index_v2.html` - Single self-contained HTML file
