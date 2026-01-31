# Interpretation 1: Color-Based Label Selection

## Core Concept
Scatter multiple N-digit numbers across the canvas in various positions and rotations. All labels have the same digit count as the answer. The child must find the label with a specific color (e.g., "Find the RED number").

## Mechanics
- Canvas shows many N-digit labels scattered at random positions and angles
- Each label is drawn in one of 10 possible colors
- A rule at the top says something like "Find the RED number"
- Only ONE label has that specified color - that's the answer
- All other labels are drawn in different colors (distractors)

## Visual Layout
```
┌─────────────────────────────────────────┐
│       "Find the RED number"             │
│─────────────────────────────────────────│
│    7392        2847                     │
│        ╱5621╲     1234        9405      │
│  3810           ╲8127╱                  │
│        4523   6291         7856         │
│   1982      ╲3076╱    5234              │
│        8745         2109                │
└─────────────────────────────────────────┘
```
Where "1234" is in red (the answer) and all others are in various other colors.

## Digit Extraction
- The single N-digit label matching the specified color IS the complete answer
- Child reads the number directly

## Scaling
- Works for any N from 3-5 digits
- More labels = harder to find the needle
- Can adjust label density and scatter parameters

## Controls
- Number of distractor labels (e.g., 10-50)
- Label size
- Rotation variance (how much labels can be tilted)
- Color rule (which color is the answer)

## Text Required
- One instruction line: "Find the [COLOR] number"
