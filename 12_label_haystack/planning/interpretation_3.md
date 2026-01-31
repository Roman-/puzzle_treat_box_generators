# Interpretation 3: Multi-Criteria Label Selection

## Core Concept
Scatter multiple N-digit numbers across the canvas with different visual attributes. Each label can vary in color, size, rotation, and style. The child must find the label matching a specific criterion from a set of possible rules.

## Mechanics
- Canvas shows many N-digit labels with varying visual properties:
  - Color (10 possible colors)
  - Size (small, medium, large)
  - Style (bold, italic, outlined)
  - Background shape (circle, square, none)
- A randomly selected rule determines which label is the answer
- Rules could be: "Find the PURPLE number", "Find the BIGGEST label", "Find the CIRCLED number"

## Visual Layout
```
┌─────────────────────────────────────────┐
│       "Find the CIRCLED number"         │
│─────────────────────────────────────────│
│    7392        2847                     │
│        5621        ⭕1234⭕      9405    │
│  3810               8127                │
│        ▢4523▢   6291         7856       │
│   1982       3076        5234           │
│        8745         2109                │
└─────────────────────────────────────────┘
```
Here 1234 is circled (the answer), 4523 is in a square (distractor with different shape).

## Rule Types
1. **Color-based**: "Find the RED number"
2. **Size-based**: "Find the BIGGEST label" / "Find the SMALLEST label"
3. **Style-based**: "Find the BOLD number" / "Find the OUTLINED number"
4. **Shape-based**: "Find the CIRCLED number" / "Find the BOXED number"
5. **Numeric**: "Find the smallest/largest NUMBER" (semantic smallest value, not visual size)

## Digit Extraction
- The label matching the rule criterion IS the complete answer
- Child reads comprehension + visual scanning

## Scaling
- Works for any N from 3-5 digits
- Complexity can increase by adding more visual variations
- Number of distractors adjustable

## Controls
- Number of distractor labels
- Rule type selection
- Which visual properties to vary
- Label size range
- Rotation variance

## Text Required
- One instruction line stating the selection criterion
