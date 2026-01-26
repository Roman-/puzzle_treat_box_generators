/**
 * 10 distinct, visually distinguishable colors for puzzles.
 * These colors are designed to be as different from each other as possible.
 * White is intentionally excluded (white means "no color" in puzzle contexts).
 *
 * Colors are indexed 0-9 to map directly to digits.
 */

const COLORS = [
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

// Simple array of hex values for quick access
const COLOR_HEX = COLORS.map(c => c.hex);

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COLORS, COLOR_HEX };
}
