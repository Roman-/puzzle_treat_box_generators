# Interpretation 3: Circular/Cyclic Pattern Wheel

## Concept
Display the pattern as a circular arrangement (like a clock face or wheel), where elements flow around in a cycle. Some positions on the wheel show "?" and the child must complete the cycle.

## Visual Layout
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│              1                                      │
│           ?     2                                   │
│         ?         5                                 │
│         ?         1                                 │
│           ?     2                                   │
│              5                                      │
│                                                     │
│         (Arrow showing clockwise direction)         │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Mechanics
1. Arrange digits in a circle/wheel formation
2. The sequence follows around the circle (clockwise)
3. Some consecutive positions are replaced with "?"
4. Child traces the pattern around the circle to find what's missing
5. The hidden values (read in order) form the code

## How Code is Encoded
- The circular arrangement contains a repeating pattern
- N consecutive positions are marked with "?"
- Reading those positions in sequence order gives the code

## Generator Controls
- Canvas size (W, H)
- Code input
- Pattern to repeat
- Circle radius
- Element size
- Direction indicator style
- Number of total positions on wheel
- Starting angle offset
- Font and styling

## Scaling (3-5 digits)
Hide 3, 4, or 5 consecutive positions on the wheel.
