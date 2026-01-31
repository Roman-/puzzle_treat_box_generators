# Final Plan 1: Color-Based Label Haystack

## Concept
A visual search puzzle where multiple N-digit numbers are scattered across the canvas. Each label is drawn in a specific color. One instruction tells the child which color to find. The label in that color is the answer.

## Addressing Critique Issues

### Non-overlapping placement
- Use a grid-based placement algorithm with random jitter
- Divide canvas into cells, place one label per cell with small random offset
- Ensure minimum distance between label centers

### Readable rotations
- Limit rotation to ±30 degrees maximum
- Optionally allow 0° rotation for easier reading

### Distinct colors
- Use the shared 10-color palette
- Use only one instance of the target color
- Ensure distractors use clearly different colors from the target
- Stick to basic color names: Red, Blue, Green, Yellow, Orange, Purple, Pink, Brown, Grey, Aqua

### Single match guarantee
- Generator ensures exactly ONE label has the target color
- All distractor labels randomly use other colors

## Visual Design
```
┌────────────────────────────────────────────┐
│           Find the RED number              │
├────────────────────────────────────────────┤
│                                            │
│    7392      2847       5621               │
│         (blue)  (green)   (yellow)         │
│                                            │
│    3810      1234       9405               │
│    (purple)   (RED)    (orange)            │
│                                            │
│    8127      6291       7856               │
│    (pink)   (brown)    (grey)              │
│                                            │
└────────────────────────────────────────────┘
```

## Controls
1. Canvas W/H
2. Code input + 🎲
3. Number of labels (10-40)
4. Label size (% of canvas)
5. Rotation variance (0-30°)
6. Color rule selector (or random)
7. Grid jitter amount

## Implementation Details

### Label Generation
```javascript
// Generate N distractor numbers (random, different from answer)
// Place answer label with target color
// Place distractor labels with random non-target colors
// Use grid placement with jitter for positioning
```

### Color Rule
- Randomly select one of 10 colors as the target
- Display rule: "Find the [COLOR] number"
- Only the answer label uses target color

### Collision Avoidance
- Divide canvas (below rule area) into grid cells
- Shuffle cell order for random-feeling placement
- Place labels centered in cells with small random offset
- Ensures no overlap while maintaining scattered appearance

## Files
- `index_v1.html` - Single self-contained HTML file with embedded JS
- Uses `../shared/colors.js` for color definitions
