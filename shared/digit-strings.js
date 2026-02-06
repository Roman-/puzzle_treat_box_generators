/**
 * Digit string encodings: 23 different ways to represent digits 0-9.
 * Useful for puzzles that encode digits as words, symbols, braille, morse, etc.
 *
 * Ported from mystery-box-generators/src/resources/text.ts
 */

const DIGIT_WORDS = {
  en: ['zero','one','two','three','four','five','six','seven','eight','nine'],
  ru: ['ноль','один','два','три','четыре','пять','шесть','семь','восемь','девять'],
};

const DIGIT_STRING_MAP = {
  'numbers':               ['0','1','2','3','4','5','6','7','8','9'],
  '🇬🇧 word':              DIGIT_WORDS.en,
  '🇷🇺 слово':             DIGIT_WORDS.ru,
  'braille':               ['⠚','⠁','⠃','⠉','⠙','⠑','⠋','⠛','⠓','⠊'],
  'morse':                 ['-----','.----','..---','...--','....-','.....','-....','--...','---..','----.'],
  'roman numeral':         ['N','I','II','III','IV','V','VI','VII','VIII','IX'],
  'eastern arabic numeral':['٠','١','٢','٣','٤','٥','٦','٧','٨','٩'],
  'binary':                ['0','1','10','11','100','101','110','111','1000','1001'],
  'BCD':                   ['0000','0001','0010','0011','0100','0101','0110','0111','1000','1001'],
  'fullwidth':             ['０','１','２','３','４','５','６','７','８','９'],
  'superscript':           ['⁰','¹','²','³','⁴','⁵','⁶','⁷','⁸','⁹'],
  'subscript':             ['₀','₁','₂','₃','₄','₅','₆','₇','₈','₉'],
  'circled':               ['⓪','①','②','③','④','⑤','⑥','⑦','⑧','⑨'],
  'double-circled':        ['⓿','⓵','⓶','⓷','⓸','⓹','⓺','⓻','⓼','⓽'],
  'circled filled':        ['⓿','❶','❷','❸','❹','❺','❻','❼','❽','❾'],
  'double-struck':         ['𝟘','𝟙','𝟚','𝟛','𝟜','𝟝','𝟞','𝟟','𝟠','𝟡'],
  'keycap':                ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣'],
  'Mayan':                 ['○','•','••','•••','••••','—','—•','—••','—•••','—••••'],
  'A1Z26 mod 10':          ['J','A','B','C','D','E','F','G','H','I'],
  '🇬🇧 ordinals':          ['zeroth','first','second','third','fourth','fifth','sixth','seventh','eighth','ninth'],
  'tally marks':           ['∅','|','||','|||','||||','||||/','||||/|','||||/||','||||/|||','||||/||||'],
  'keyboard symbols':      [')','!','@','#','$','%','^','&','*','('],
  'prime factors':         ['0','1','2','3','2*2','5','2*3','7','2*2*2','3*3'],
};

// Array of all encoding type names
const DIGIT_STRING_TYPES = Object.keys(DIGIT_STRING_MAP);

/**
 * Spell a single digit (0-9) as a word in the given language.
 * @param {'en'|'ru'} lang
 * @param {number} n
 * @returns {string}
 */
const spellDigit = (lang, n) => {
  const list = DIGIT_WORDS[lang] || DIGIT_WORDS.en;
  const d = Math.max(0, Math.min(9, Math.floor(n)));
  return list[d];
};

/**
 * Spell a 4-digit code as an array of words.
 * @param {'en'|'ru'} lang
 * @param {string} code - e.g. "1234"
 * @returns {string[]}
 */
const spellCode = (lang, code) => {
  const list = DIGIT_WORDS[lang] || DIGIT_WORDS.en;
  const safe = (code || '').padEnd(4, '0').slice(0, 4);
  return [...safe].map(ch => list[isNaN(+ch) ? 0 : +ch]);
};

/**
 * Encode a digit using a specific encoding type.
 * @param {string} type - Key from DIGIT_STRING_MAP
 * @param {number} digit - 0-9
 * @returns {string}
 */
const encodeDigit = (type, digit) => {
  const map = DIGIT_STRING_MAP[type];
  if (!map) return String(digit);
  return map[Math.max(0, Math.min(9, Math.floor(digit)))];
};

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    DIGIT_WORDS, DIGIT_STRING_MAP, DIGIT_STRING_TYPES,
    spellDigit, spellCode, encodeDigit
  };
}
