# Interpretation 2: Multiple Parallel Sequences

## Concept
Display N separate rows (one per code digit), each showing its own repeating pattern with the final position hidden. Each row reveals one digit of the code. The child solves each pattern independently.

## Visual Layout
```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  Row 1:   3  7  3  7  3  7  3  ?    → answer: 7    │
│  Row 2:   1  1  1  1  1  1  1  ?    → answer: 1    │
│  Row 3:   9  2  9  2  9  2  9  ?    → answer: 2    │
│  Row 4:   5  8  4  5  8  4  5  ?    → answer: 8    │
│                                                     │
│  Code: 7 1 2 8                                      │
└─────────────────────────────────────────────────────┘
```

## Mechanics
1. For each digit in the code, create a unique repeating pattern
2. The pattern is designed so the final (hidden) position equals that code digit
3. Each row shows the pattern repeating with the last digit replaced by "?"
4. Child identifies each pattern, predicts the next digit
5. Reading the answers top-to-bottom gives the code

## How Code is Encoded
- Code "1234" produces 4 rows
- Each row's hidden digit matches the corresponding position in the code
- Pattern for row 1 ends with "1", pattern for row 2 ends with "2", etc.

## Generator Controls
- Canvas size (W, H)
- Code input
- Pattern complexity per row (length 2-5)
- Number of pattern repetitions shown
- Visual style (circles with digits inside, plain digits, colored blocks)
- Row spacing
- Digit/element size

## Scaling (3-5 digits)
Naturally scales: 3 digits = 3 rows, 5 digits = 5 rows.
