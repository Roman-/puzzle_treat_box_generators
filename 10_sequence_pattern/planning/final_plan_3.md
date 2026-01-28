# Final Plan 3: Train Cars with Repeating Pattern

## Addressing the Critique
The circular design had direction problems. Instead, use a **linear train metaphor** where direction and order are unambiguous.

## Revised Concept
Display a horizontal "train" of connected cars. Each car contains a digit. The train shows a repeating pattern, with N consecutive cars having their digits hidden (showing "?" instead). The child identifies the pattern and fills in the hidden cars.

Like Final Plan 1, but with a playful visual metaphor that makes it more engaging for kids.

## Visual Layout
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│   ╔═══╗   ╔═══╗   ╔═══╗   ╔═══╗   ╔═══╗   ╔═══╗   ╔═══╗      │
│   ║ 1 ║───║ 2 ║───║ 3 ║───║ ? ║───║ ? ║───║ ? ║───║ 1 ║──→   │
│   ╚═╦═╝   ╚═╦═╝   ╚═╦═╝   ╚═╦═╝   ╚═╦═╝   ╚═╦═╝   ╚═╦═╝      │
│     ○ ○     ○ ○     ○ ○     ○ ○     ○ ○     ○ ○     ○ ○       │
│                                                                │
│                     The train carries: 1 2 3 1 2 3 ...        │
│                     Missing cars: ? ? ? = 1 2 3               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

(Note: The text at bottom would NOT be shown—it's just for illustration)

## Key Design Decisions

### 1. Train Direction is Clear
An arrow at the end, or an engine at the front, makes reading direction unambiguous (left-to-right).

### 2. Pattern = Code (Like Plan 1)
The repeating pattern unit IS the code. Simple and unambiguous.

### 3. Playful Visual Style
Train cars feel like toys, not worksheets. Kids engage more naturally.

### 4. Connected Cars Show Sequence
The connectors between cars reinforce that this is one continuous sequence, not separate items.

## Mechanics
1. Take code "123"
2. Create pattern: 1-2-3-1-2-3-1-2-3-...
3. Show as train cars with connectors
4. Replace one repetition's worth with "?" cars
5. Child identifies the repeating cargo pattern

## Generator Controls
- **Canvas W, H**: Size
- **Code**: The pattern/code (1234)
- **Total cars**: How many train cars to show
- **Hidden position**: Which repetition to hide
- **Car style**: Rounded rectangle, boxcar, fancy
- **Car size**: Width and height relative to canvas
- **Car spacing/connector length**: Gap between cars
- **Wheel size**: Size of the train wheels
- **Show direction arrow**: Arrow at end indicating direction
- **Color scheme**: Car color, wheel color, connector color

## Why This Works

### Instant Affordance ✓
A train is read left-to-right. Missing cargo needs to be identified. Intuitive.

### Creative > Academic ✓
It's a train puzzle! Kids love trains. Doesn't feel like school.

### Minimal Text ✓
No text needed. The visual metaphor is universally understood.

### Visual Clarity ✓
Clean train car shapes, clear connectors, obvious gaps where "?" appears.

### Unambiguous ✓
Train direction is clear. Pattern = code. No interpretation variance.

### Scales with N ✓
3-5 digit codes mean 3-5 hidden cars. Adjust total train length accordingly.

### Child-Solvable ✓
"What cargo is the train carrying?" is engaging and simple.

### Generator-Friendly ✓
Draw N cars, put digits/? in them, connect them. Straightforward.

## Visual Variations
- **Basic**: Simple rectangles with wheels
- **Boxcar**: More detailed train car shapes
- **Modern**: Sleek container cars
- **Fun**: Colorful cars with rounded corners
