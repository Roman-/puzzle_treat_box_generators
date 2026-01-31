# Final Plan 3: Shape-Enclosed Label Haystack

## Concept
Simplify the multi-criteria approach to ONE clear visual property: labels enclosed in shapes. The rule is "Find the number in the CIRCLE" (or SQUARE, STAR, TRIANGLE). This is visually distinct and child-friendly.

## Key Improvement Over Interpretation 3
- Only ONE visual property varies (enclosing shape)
- All labels same color, same size
- Shape is the ONLY differentiator
- Simple vocabulary: circle, square, triangle, star

## Addressing Critique Issues

### Visual clarity
- Labels are all the same size and color (black)
- Only the enclosing shape differs
- Shapes are large and clear (not small decorations)
- Grid-based placement prevents overlap

### Child-friendly vocabulary
- Basic shapes every child knows: circle, square, triangle, star
- No complex terms like "outlined" or "bold"

### No ambiguity
- Each label has exactly ONE shape around it (or none)
- Only ONE label has the target shape
- Shape is unmistakable (large, clear borders)

### Not too complex
- Single property variation = simple to understand
- Visual search for a shape is intuitive

## Visual Design
```
┌────────────────────────────────────────────┐
│       Find the number in the CIRCLE        │
├────────────────────────────────────────────┤
│                                            │
│  ┌──────┐              △                   │
│  │ 7392 │    2847    ╱    ╲                │
│  └──────┘           ╱ 5621 ╲               │
│            ⬭       ╲      ╱                │
│         ╱    ╲      ╲    ╱                 │
│        │ 1234 │                 ☆          │
│         ╲    ╱      9405      ╱╲ 3810      │
│          ⬭                   ╱  ╲          │
│                              ☆            │
│  ┌──────┐     △                            │
│  │ 8127 │   ╱6291╲                         │
│  └──────┘                                  │
└────────────────────────────────────────────┘
```
Here, 1234 is in a circle (the answer).

## Shape Types
1. **Circle** - round border around label
2. **Square** - rectangular border
3. **Triangle** - triangular frame (pointing up)
4. **Star** - 5-pointed star outline
5. **None** - some labels have no shape (plain)

## Mechanics
1. One rule type: "Find the number in the [SHAPE]"
2. Only ONE label has that shape
3. Other labels have different shapes (or none)
4. The enclosed label is the answer

## Controls
1. Canvas W/H
2. Code input + 🎲
3. Number of labels (10-30)
4. Label size
5. Rotation variance (for labels and shapes)
6. Shape rule selector (circle/square/triangle/star)
7. Percentage of labels with shapes vs plain
8. Shape line thickness

## Implementation Details

### Shape Drawing
```javascript
// Draw shape around label based on type
// Size shape to comfortably fit the label with padding
// Use distinct colors for shape outlines (or single color)
```

### Distribution
- 1 label with target shape (answer)
- Some labels with other shapes (decoys)
- Some labels with no shape (noise)

## Files
- `index_v3.html` - Single self-contained HTML file
