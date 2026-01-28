# Initial Description: Pattern Grid Deduction Puzzle

## Raw User Input

Each digit is encoded as the missing colored cell in a pattern-based grid.
N panels are shown, each with a different pattern type where one cell is replaced with a "?" mark on white BG. The solver must identify the pattern rule and deduce what color (digit) belongs in the missing cell.

Patterns: vertical mirror symmetry, horizontal mirror symmetry, vertical+horizontal, progression grid, row+column sum, etc.

Reference table on top maps color to digit.

To make easier, add parameter checkmark on what cell looks like: just color, just digit or color+digit.

- A color reference bar at the top shows the digit-to-color correspondence (if colors are used)
- Uses the shared 10-color palette from `shared/colors.js` for digit-to-color mapping

## Key Elements Identified

1. **Multiple Panels**: N panels (matching code length, 3-5 digits)
2. **Pattern-Based Grids**: Each panel shows a grid with a logical pattern
3. **Missing Cell**: One cell marked with "?" that the solver must deduce
4. **Pattern Types**:
   - Vertical mirror symmetry
   - Horizontal mirror symmetry
   - Both vertical + horizontal symmetry
   - Progression grid (numbers increasing in pattern)
   - Row + column sum rules
5. **Color-to-Digit Mapping**: Reference bar at top using shared colors
6. **Display Options**: Cell can show just color, just digit, or color + digit
