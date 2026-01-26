/**
 * 10 distinct, visually distinguishable colors for puzzles.
 * These colors are designed to be as different from each other as possible.
 * White is intentionally excluded (white means "no color" in puzzle contexts).
 *
 * Colors are indexed 0-9 to map directly to digits.
 */

const COLORS = [
  { index: 0, hex: '#E53935', name: 'Red' },
  { index: 1, hex: '#FB8C00', name: 'Orange' },
  { index: 2, hex: '#FDD835', name: 'Yellow' },
  { index: 3, hex: '#7CB342', name: 'Lime' },
  { index: 4, hex: '#43A047', name: 'Green' },
  { index: 5, hex: '#00ACC1', name: 'Teal' },
  { index: 6, hex: '#1E88E5', name: 'Blue' },
  { index: 7, hex: '#5E35B1', name: 'Indigo' },
  { index: 8, hex: '#8E24AA', name: 'Purple' },
  { index: 9, hex: '#D81B60', name: 'Pink' },
];

// Simple array of hex values for quick access
const COLOR_HEX = COLORS.map(c => c.hex);

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COLORS, COLOR_HEX };
}
