/**
 * Light/Dark/Primary color palettes with WCAG contrast helpers.
 * Useful for generating accessible color combinations in puzzles.
 *
 * Ported from mystery-box-generators/src/resources/colors.ts
 */

const LIGHT_COLORS = [
  '#FAFAFA', // light gray
  '#F1B1B1', // red tint
  '#F1D1B1', // orange tint
  '#F1F1B1', // yellow tint
  '#D1F1B1', // yellow-green tint
  '#B1F1B1', // green tint
  '#B1F1D1', // spring-green tint
  '#B1F1F1', // cyan tint
  '#B1D1F1', // azure tint
  '#B1B1F1', // blue/purple tint
  '#D1B1F1', // violet tint
  '#F1B1F1', // magenta/pink tint
];

const DARK_COLORS = [
  '#000000', // black
  '#5D1414', // red shade
  '#5D3814', // orange shade
  '#5D5D14', // yellow/olive shade
  '#385D14', // yellow-green shade
  '#145D14', // green shade
  '#145D38', // spring-green shade
  '#145D5D', // cyan/teal shade
  '#14385D', // azure/steel shade
  '#14145D', // blue/indigo shade
  '#38145D', // violet shade
  '#5D145D', // magenta shade
];

const PRIMARY_COLORS = [
  '#FF0000', // red
  '#00FF00', // green
  '#0000FF', // blue
  '#00FFFF', // cyan
  '#FF00FF', // magenta
  '#FFFF00', // yellow
  '#FF7F00', // orange
  '#7F00FF', // purple
  '#E0E0E0', // light gray (white replacement)
  '#303030', // dark gray (black replacement)
];

/** sRGB channel to linear */
function _toLinear(c) {
  const s = c / 255;
  return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
}

/**
 * Calculate relative luminance of a hex color (WCAG 2.0).
 * @param {string} hex - e.g. '#FF0000'
 * @returns {number}
 */
const relativeLuminance = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!m) return 0;
  const r = _toLinear(parseInt(m[1], 16));
  const g = _toLinear(parseInt(m[2], 16));
  const b = _toLinear(parseInt(m[3], 16));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

/**
 * Calculate contrast ratio between two hex colors.
 * @param {string} a
 * @param {string} b
 * @returns {number}
 */
const contrastRatio = (a, b) => {
  const L1 = relativeLuminance(a);
  const L2 = relativeLuminance(b);
  const [hi, lo] = L1 >= L2 ? [L1, L2] : [L2, L1];
  return (hi + 0.05) / (lo + 0.05);
};

/**
 * Find a readable [background, foreground] pair from candidate sets.
 * Defaults to WCAG AA for normal text (4.5:1 contrast ratio).
 * @param {string[]} bgCandidates
 * @param {string[]} fgCandidates
 * @param {number} [minRatio=4.5]
 * @returns {[string, string]}
 */
const findReadablePair = (bgCandidates, fgCandidates, minRatio = 4.5) => {
  const pairs = [];
  for (const bg of bgCandidates) {
    for (const fg of fgCandidates) {
      if (contrastRatio(bg, fg) >= minRatio) pairs.push([bg, fg]);
    }
  }
  if (pairs.length === 0) {
    // Fallback: pick the highest-contrast pair
    let best = [bgCandidates[0], fgCandidates[0]];
    let bestR = -1;
    for (const bg of bgCandidates) {
      for (const fg of fgCandidates) {
        const r = contrastRatio(bg, fg);
        if (r > bestR) { bestR = r; best = [bg, fg]; }
      }
    }
    return best;
  }
  return pairs[Math.floor(Math.random() * pairs.length)];
};

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LIGHT_COLORS, DARK_COLORS, PRIMARY_COLORS,
    relativeLuminance, contrastRatio, findReadablePair
  };
}
