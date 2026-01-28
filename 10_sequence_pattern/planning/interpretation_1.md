# Interpretation 1: Linear Sequence with Hidden Digits

## Concept
Display a horizontal row of digits where a repeating pattern is partially visible, with some consecutive positions showing "?" instead of digits. The child identifies the repeating cycle and reads out the missing digits as the code.

## Visual Layout
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│   1  2  5  1  2  5  1  ?  ?  ?  ?  5  1  2  5  1   │
│                                                     │
└─────────────────────────────────────────────────────┘
```

## Mechanics
1. Generate a repeating pattern (e.g., "125", "37", "4829")
2. Create a long sequence by repeating the pattern multiple times
3. Replace N consecutive positions with "?" marks
4. The N hidden digits form the answer code
5. Child recognizes the pattern and extracts the missing digits

## How Code is Encoded
- The code digits are literally the missing values in the sequence
- For code "1234": hide 4 consecutive positions that would contain "1", "2", "3", "4"
- The pattern must be designed so these exact digits appear in sequence

## Generator Controls
- Canvas size (W, H)
- Code input (1234)
- Pattern length (2-5 digits per cycle)
- Total sequence length (how many digits shown)
- Position of hidden section (early, middle, late)
- Digit size
- Spacing between digits
- Font style

## Scaling (3-5 digits)
Works by hiding 3, 4, or 5 consecutive positions in the sequence.
