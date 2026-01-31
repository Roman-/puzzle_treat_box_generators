# Interpretation 2: Smallest/Largest Label Selection

## Core Concept
Scatter multiple N-digit numbers across the canvas. All labels have the same digit count. The child must find the numerically smallest (or largest) label among all visible labels.

## Mechanics
- Canvas shows many N-digit labels scattered at random positions and angles
- All labels have exactly N digits (same as answer length)
- The instruction says "Find the SMALLEST number" or "Find the LARGEST number"
- The answer is whichever label has the smallest/largest numeric value
- All other labels are random N-digit numbers that are larger/smaller than the answer

## Visual Layout
```
┌─────────────────────────────────────────┐
│       "Find the SMALLEST number"        │
│─────────────────────────────────────────│
│    7392        2847                     │
│        ╱5621╲     1234        9405      │
│  3810           ╲8127╱                  │
│        4523   6291         7856         │
│   1982      ╲3076╱    5234              │
│        8745         2109                │
└─────────────────────────────────────────┘
```
If the answer is 1234, it would be the smallest number shown (all others would be >= 1235).

## Digit Extraction
- Child must scan all labels, compare them numerically
- The smallest (or largest) one IS the complete answer
- Reading comprehension: understanding "smallest" vs "largest"

## Scaling
- Works for any N from 3-5 digits
- More labels = harder visual search and more comparisons needed
- Can vary the numeric "spread" of distractors

## Controls
- Number of distractor labels (e.g., 10-50)
- Label size
- Rotation variance
- Rule type: smallest vs largest
- Minimum gap between answer and closest distractor (to avoid confusion)

## Text Required
- One instruction line: "Find the SMALLEST number" or "Find the LARGEST number"
