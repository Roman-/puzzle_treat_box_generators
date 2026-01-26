# Color Sequence Circles

Each digit is encoded as the color of the bottom circle in a column of overlapping circles. The child must identify the repeating color pattern and determine what color comes next, then look up the corresponding digit in the legend.

![Example](color_sequence_circles_9484.png)

### Implementation notes
- Uses a shared 10-color palette from `shared/colors.js`
- The digit-to-color mapping is shuffled for each puzzle, so digit 0 won't always be the same color
- Difficulty levels control pattern complexity (from simple alternating to complex multi-color sequences)
- Variable column heights via min circles and variance parameters
- X-jitter adds horizontal randomness to circle positions for visual variety
- Legend order can optionally be shuffled
