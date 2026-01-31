/**
 * DIGIT_COLORS: 10 distinct colors for digit-to-color mapping puzzles.
 *
 * Purpose: Use in puzzles with reference tables (legends) that map digits 0-9
 * to colors. Examples: color sequence circles, pattern grid deduction.
 *
 * When creating a puzzle with a reference table, shuffle this array
 * before use so digit 0 doesn't always map to red. The shuffled mapping should
 * be displayed in the legend. This prevents children from memorizing a fixed
 * color-digit association across puzzles.
 *
 * Colors are indexed 0-9 for convenience, but the index should NOT be assumed
 * to correspond to any particular digit in the final puzzle.
 */
const DIGIT_COLORS = [
  { index: 0, hex: '#d40808', name: 'Red' },
  { index: 1, hex: '#0D47A1', name: 'Blue' },
  { index: 2, hex: '#43A047', name: 'Green' },
  { index: 3, hex: '#FDD835', name: 'Yellow' },
  { index: 4, hex: '#FB8C00', name: 'Orange' },
  { index: 5, hex: '#75118f', name: 'Purple' },
  { index: 6, hex: '#00CED1', name: 'Aqua' },
  { index: 7, hex: '#ff19d1', name: 'Pink' },
  { index: 8, hex: '#6D4C41', name: 'Brown' },
  { index: 9, hex: '#616161', name: 'Dark Grey' },
];

// Simple array of hex values for quick access by index
const DIGIT_COLOR_HEX = DIGIT_COLORS.map(c => c.hex);

/**
 * BASIC_COLORS: 5 pure, highly recognizable colors for visual search puzzles.
 *
 * Purpose: Use in puzzles where colors must be instantly identifiable by name
 * (e.g., "Find the RED number"). Limited to colors that every child knows
 * and can easily distinguish.
 *
 * Not for digit mapping - just for clear visual differentiation.
 */
const BASIC_COLORS = [
  { hex: '#FF0000', name: 'Red' },
  { hex: '#0000FF', name: 'Blue' },
  { hex: '#00AA00', name: 'Green' },
  { hex: '#FFCC00', name: 'Yellow' },
  { hex: '#FF00FF', name: 'Purple' },
];

// Simple array of hex values
const BASIC_COLOR_HEX = BASIC_COLORS.map(c => c.hex);

// Legacy aliases for backward compatibility
const COLORS = DIGIT_COLORS;
const COLOR_HEX = DIGIT_COLOR_HEX;

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DIGIT_COLORS, DIGIT_COLOR_HEX,
    BASIC_COLORS, BASIC_COLOR_HEX,
    COLORS, COLOR_HEX  // legacy
  };
}
