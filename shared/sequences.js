/**
 * Sequence generation utilities for pattern-based puzzles.
 * Adapted from sequence_maker for use in vanilla JavaScript puzzle generators.
 */

// Helper functions
const randomElement = arr => arr[Math.floor(Math.random() * arr.length)];

const shuffle = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const shuffled = array => shuffle(array.slice());

// Pattern definitions by difficulty level
// Each pattern is an array of indices (0, 1, 2, etc.) that repeat cyclically
const patterns = [
  {
    level: 0,
    patterns: [[0]]  // Single repeating element: A A A A...
  },
  {
    level: 1,
    patterns: [[0, 1]]  // Two alternating: A B A B...
  },
  {
    level: 2,
    patterns: [
      [0, 1, 2],      // Three cycling: A B C A B C...
      [0, 1, 1],      // A B B A B B...
      [0, 0, 1],      // A A B A A B...
      [1, 1, 0, 0]    // B B A A B B A A...
    ]
  },
  {
    level: 3,
    patterns: [
      [0, 0, 0, 1],       // A A A B...
      [0, 1, 2, 3],       // Four cycling: A B C D...
      [0, 0, 1, 2],       // A A B C...
      [0, 1, 1, 2],       // A B B C...
      [0, 1, 2, 2],       // A B C C...
      [0, 1, 2, 1],       // A B C B...
      [0, 1, 0, 2],       // A B A C...
      [0, 0, 1, 1, 2, 2]  // A A B B C C...
    ]
  },
  {
    level: 4,
    patterns: [
      [0, 1, 2, 3, 4],    // Five cycling
      [0, 1, 0, 1, 1],    // A B A B B...
      [0, 1, 0, 1, 2],    // A B A B C...
      [0, 1, 0, 2, 1],    // A B A C B...
      [0, 1, 2, 0, 2],    // A B C A C...
      [0, 1, 2, 1, 2],    // A B C B C...
      [0, 1, 2, 3, 0],    // A B C D A...
      [0, 1, 2, 3, 1],    // A B C D B...
      [0, 1, 2, 3, 2],    // A B C D C...
      [0, 1, 2, 3, 3],    // A B C D D...
    ]
  },
];

/**
 * Get a random pattern from the specified difficulty level.
 * @param {number} level - Difficulty level (0-4)
 * @returns {number[]} - Pattern array
 */
const getRandomPattern = (level) => {
  if (level >= patterns.length) {
    console.error("getRandomPattern: level not found", level);
    return [0];
  }
  return randomElement(patterns[level].patterns);
};

/**
 * Generate a sequence of indices by repeating a pattern.
 * @param {number} level - Difficulty level (0-4)
 * @param {number} length - Desired sequence length
 * @returns {number[]} - Array of pattern indices
 */
const generateSequence = (level, length) => {
  const pattern = getRandomPattern(level);
  const sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(pattern[i % pattern.length]);
  }
  return sequence;
};

/**
 * Generate a sequence with symbols substituted for indices.
 * @param {number} level - Difficulty level (0-4)
 * @param {number} length - Desired sequence length
 * @param {any[]} symbols - Array of symbols to use (will be shuffled)
 * @returns {any[]} - Array of symbols following the pattern
 */
const generateSymbolSequence = (level, length, symbols) => {
  const sequence = generateSequence(level, length);
  const shuffledSymbols = shuffled(symbols);
  return sequence.map(index => shuffledSymbols[index]);
};

/**
 * Generate a sequence using specific symbols (no shuffling).
 * @param {number} level - Difficulty level (0-4)
 * @param {number} length - Desired sequence length
 * @param {any[]} symbols - Array of symbols to use (in order)
 * @returns {any[]} - Array of symbols following the pattern
 */
const generateOrderedSequence = (level, length, symbols) => {
  const sequence = generateSequence(level, length);
  return sequence.map(index => symbols[index]);
};

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    patterns,
    randomElement,
    shuffle,
    shuffled,
    getRandomPattern,
    generateSequence,
    generateSymbolSequence,
    generateOrderedSequence
  };
}
