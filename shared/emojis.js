/**
 * Curated, child-safe emoji lexicon with bilingual names (EN/RU).
 * 98 emojis across 6 categories: animals, vehicles, food, nature, sports, objects.
 *
 * Ported from mystery-box-generators/src/resources/emoji-lexicon.ts + emojis.ts
 */

const EMOJI_LEXICON = [
  { emoji: '🐶', category: 'animals', names: { en: { singular: 'dog', count: 'dogs' }, ru: { singular: 'собака', count: 'собак' } } },
  { emoji: '🐱', category: 'animals', names: { en: { singular: 'cat', count: 'cats' }, ru: { singular: 'кошка', count: 'кошек' } } },
  { emoji: '🐭', category: 'animals', names: { en: { singular: 'mouse', count: 'mice' }, ru: { singular: 'мышь', count: 'мышей' } } },
  { emoji: '🐹', category: 'animals', names: { en: { singular: 'hamster', count: 'hamsters' }, ru: { singular: 'хомяк', count: 'хомяков' } } },
  { emoji: '🐰', category: 'animals', names: { en: { singular: 'rabbit', count: 'rabbits' }, ru: { singular: 'кролик', count: 'кроликов' } } },
  { emoji: '🦊', category: 'animals', names: { en: { singular: 'fox', count: 'foxes' }, ru: { singular: 'лиса', count: 'лис' } } },
  { emoji: '🐻', category: 'animals', names: { en: { singular: 'bear', count: 'bears' }, ru: { singular: 'медведь', count: 'медведей' } } },
  { emoji: '🐼', category: 'animals', names: { en: { singular: 'panda', count: 'pandas' }, ru: { singular: 'панда', count: 'панд' } } },
  { emoji: '🐯', category: 'animals', names: { en: { singular: 'tiger', count: 'tigers' }, ru: { singular: 'тигр', count: 'тигров' } } },
  { emoji: '🦁', category: 'animals', names: { en: { singular: 'lion', count: 'lions' }, ru: { singular: 'лев', count: 'львов' } } },
  { emoji: '🐮', category: 'animals', names: { en: { singular: 'cow', count: 'cows' }, ru: { singular: 'корова', count: 'коров' } } },
  { emoji: '🐸', category: 'animals', names: { en: { singular: 'frog', count: 'frogs' }, ru: { singular: 'лягушка', count: 'лягушек' } } },
  { emoji: '🐵', category: 'animals', names: { en: { singular: 'monkey', count: 'monkeys' }, ru: { singular: 'обезьяна', count: 'обезьян' } } },
  { emoji: '🐔', category: 'animals', names: { en: { singular: 'chicken', count: 'chickens' }, ru: { singular: 'курица', count: 'куриц' } } },
  { emoji: '🐧', category: 'animals', names: { en: { singular: 'penguin', count: 'penguins' }, ru: { singular: 'пингвин', count: 'пингвинов' } } },
  { emoji: '🦆', category: 'animals', names: { en: { singular: 'duck', count: 'ducks' }, ru: { singular: 'утка', count: 'уток' } } },
  { emoji: '🦉', category: 'animals', names: { en: { singular: 'owl', count: 'owls' }, ru: { singular: 'сова', count: 'сов' } } },
  { emoji: '🦄', category: 'animals', names: { en: { singular: 'unicorn', count: 'unicorns' }, ru: { singular: 'единорог', count: 'единорогов' } } },
  { emoji: '🐢', category: 'animals', names: { en: { singular: 'turtle', count: 'turtles' }, ru: { singular: 'черепаха', count: 'черепах' } } },
  { emoji: '🐙', category: 'animals', names: { en: { singular: 'octopus', count: 'octopuses' }, ru: { singular: 'осьминог', count: 'осьминогов' } } },
  { emoji: '🦋', category: 'animals', names: { en: { singular: 'butterfly', count: 'butterflies' }, ru: { singular: 'бабочка', count: 'бабочек' } } },
  { emoji: '🐝', category: 'animals', names: { en: { singular: 'bee', count: 'bees' }, ru: { singular: 'пчела', count: 'пчёл' } } },
  { emoji: '🐌', category: 'animals', names: { en: { singular: 'snail', count: 'snails' }, ru: { singular: 'улитка', count: 'улиток' } } },
  { emoji: '🐠', category: 'animals', names: { en: { singular: 'fish', count: 'fish' }, ru: { singular: 'рыба', count: 'рыб' } } },

  { emoji: '🚗', category: 'vehicles', names: { en: { singular: 'car', count: 'cars' }, ru: { singular: 'машина', count: 'машин' } } },
  { emoji: '🚌', category: 'vehicles', names: { en: { singular: 'bus', count: 'buses' }, ru: { singular: 'автобус', count: 'автобусов' } } },
  { emoji: '🚜', category: 'vehicles', names: { en: { singular: 'tractor', count: 'tractors' }, ru: { singular: 'трактор', count: 'тракторов' } } },
  { emoji: '🚲', category: 'vehicles', names: { en: { singular: 'bicycle', count: 'bicycles' }, ru: { singular: 'велосипед', count: 'велосипедов' } } },
  { emoji: '🚆', category: 'vehicles', names: { en: { singular: 'train', count: 'trains' }, ru: { singular: 'поезд', count: 'поездов' } } },
  { emoji: '🚁', category: 'vehicles', names: { en: { singular: 'helicopter', count: 'helicopters' }, ru: { singular: 'вертолёт', count: 'вертолётов' } } },
  { emoji: '⛵', category: 'vehicles', names: { en: { singular: 'sailboat', count: 'sailboats' }, ru: { singular: 'парусник', count: 'парусников' } } },
  { emoji: '🚀', category: 'vehicles', names: { en: { singular: 'rocket', count: 'rockets' }, ru: { singular: 'ракета', count: 'ракет' } } },
  { emoji: '🚕', category: 'vehicles', names: { en: { singular: 'taxi', count: 'taxis' }, ru: { singular: 'такси', count: 'такси' } } },
  { emoji: '🚙', category: 'vehicles', names: { en: { singular: 'SUV', count: 'SUVs' }, ru: { singular: 'внедорожник', count: 'внедорожников' } } },

  { emoji: '🍎', category: 'food', names: { en: { singular: 'apple', count: 'apples' }, ru: { singular: 'яблоко', count: 'яблок' } } },
  { emoji: '🍐', category: 'food', names: { en: { singular: 'pear', count: 'pears' }, ru: { singular: 'груша', count: 'груш' } } },
  { emoji: '🍊', category: 'food', names: { en: { singular: 'orange', count: 'oranges' }, ru: { singular: 'апельсин', count: 'апельсинов' } } },
  { emoji: '🍋', category: 'food', names: { en: { singular: 'lemon', count: 'lemons' }, ru: { singular: 'лимон', count: 'лимонов' } } },
  { emoji: '🍌', category: 'food', names: { en: { singular: 'banana', count: 'bananas' }, ru: { singular: 'банан', count: 'бананов' } } },
  { emoji: '🍉', category: 'food', names: { en: { singular: 'watermelon', count: 'watermelons' }, ru: { singular: 'арбуз', count: 'арбузов' } } },
  { emoji: '🍇', category: 'food', names: { en: { singular: 'grape', count: 'grapes' }, ru: { singular: 'виноградина', count: 'виноградин' } } },
  { emoji: '🍓', category: 'food', names: { en: { singular: 'strawberry', count: 'strawberries' }, ru: { singular: 'клубника', count: 'клубник' } } },
  { emoji: '🍒', category: 'food', names: { en: { singular: 'cherry', count: 'cherries' }, ru: { singular: 'вишня', count: 'вишен' } } },
  { emoji: '🍍', category: 'food', names: { en: { singular: 'pineapple', count: 'pineapples' }, ru: { singular: 'ананас', count: 'ананасов' } } },
  { emoji: '🥝', category: 'food', names: { en: { singular: 'kiwi', count: 'kiwis' }, ru: { singular: 'киви', count: 'киви' } } },
  { emoji: '🥕', category: 'food', names: { en: { singular: 'carrot', count: 'carrots' }, ru: { singular: 'морковка', count: 'морковок' } } },
  { emoji: '🌽', category: 'food', names: { en: { singular: 'corn cob', count: 'corn cobs' }, ru: { singular: 'початок кукурузы', count: 'початков кукурузы' } } },
  { emoji: '🍅', category: 'food', names: { en: { singular: 'tomato', count: 'tomatoes' }, ru: { singular: 'помидор', count: 'помидоров' } } },
  { emoji: '🥔', category: 'food', names: { en: { singular: 'potato', count: 'potatoes' }, ru: { singular: 'картофелина', count: 'картофелин' } } },
  { emoji: '🥦', category: 'food', names: { en: { singular: 'broccoli', count: 'broccoli' }, ru: { singular: 'брокколи', count: 'брокколи' } } },
  { emoji: '🥒', category: 'food', names: { en: { singular: 'cucumber', count: 'cucumbers' }, ru: { singular: 'огурец', count: 'огурцов' } } },
  { emoji: '🍕', category: 'food', names: { en: { singular: 'pizza', count: 'pizzas' }, ru: { singular: 'пицца', count: 'пицц' } } },
  { emoji: '🍔', category: 'food', names: { en: { singular: 'burger', count: 'burgers' }, ru: { singular: 'бургер', count: 'бургеров' } } },
  { emoji: '🍟', category: 'food', names: { en: { singular: 'fries', count: 'fries' }, ru: { singular: 'картошка фри', count: 'порций картошки фри' } } },
  { emoji: '🌭', category: 'food', names: { en: { singular: 'hot dog', count: 'hot dogs' }, ru: { singular: 'хот-дог', count: 'хот-догов' } } },
  { emoji: '🌮', category: 'food', names: { en: { singular: 'taco', count: 'tacos' }, ru: { singular: 'тако', count: 'тако' } } },
  { emoji: '🌯', category: 'food', names: { en: { singular: 'burrito', count: 'burritos' }, ru: { singular: 'буррито', count: 'буррито' } } },
  { emoji: '🍿', category: 'food', names: { en: { singular: 'popcorn', count: 'popcorn buckets' }, ru: { singular: 'попкорн', count: 'вёдер попкорна' } } },
  { emoji: '🍪', category: 'food', names: { en: { singular: 'cookie', count: 'cookies' }, ru: { singular: 'печенька', count: 'печенек' } } },
  { emoji: '🍩', category: 'food', names: { en: { singular: 'donut', count: 'donuts' }, ru: { singular: 'пончик', count: 'пончиков' } } },
  { emoji: '🧁', category: 'food', names: { en: { singular: 'cupcake', count: 'cupcakes' }, ru: { singular: 'капкейк', count: 'капкейков' } } },
  { emoji: '🍰', category: 'food', names: { en: { singular: 'cake', count: 'cakes' }, ru: { singular: 'торт', count: 'тортов' } } },
  { emoji: '🍫', category: 'food', names: { en: { singular: 'chocolate bar', count: 'chocolate bars' }, ru: { singular: 'шоколадка', count: 'шоколадок' } } },
  { emoji: '🍭', category: 'food', names: { en: { singular: 'lollipop', count: 'lollipops' }, ru: { singular: 'леденец', count: 'леденцов' } } },
  { emoji: '🍨', category: 'food', names: { en: { singular: 'ice cream', count: 'ice creams' }, ru: { singular: 'мороженое', count: 'порций мороженого' } } },

  { emoji: '🌸', category: 'nature', names: { en: { singular: 'flower', count: 'flowers' }, ru: { singular: 'цветок', count: 'цветов' } } },
  { emoji: '🍀', category: 'nature', names: { en: { singular: 'clover', count: 'clovers' }, ru: { singular: 'клевер', count: 'клеверов' } } },
  { emoji: '🌴', category: 'nature', names: { en: { singular: 'palm tree', count: 'palm trees' }, ru: { singular: 'пальма', count: 'пальм' } } },
  { emoji: '🌵', category: 'nature', names: { en: { singular: 'cactus', count: 'cactuses' }, ru: { singular: 'кактус', count: 'кактусов' } } },
  { emoji: '🌈', category: 'nature', names: { en: { singular: 'rainbow', count: 'rainbows' }, ru: { singular: 'радуга', count: 'радуг' } } },
  { emoji: '🌙', category: 'nature', names: { en: { singular: 'moon', count: 'moons' }, ru: { singular: 'луна', count: 'лун' } } },
  { emoji: '🌞', category: 'nature', names: { en: { singular: 'sun', count: 'suns' }, ru: { singular: 'солнце', count: 'солнц' } } },
  { emoji: '🌊', category: 'nature', names: { en: { singular: 'wave', count: 'waves' }, ru: { singular: 'волна', count: 'волн' } } },

  { emoji: '🏀', category: 'sports', names: { en: { singular: 'basketball', count: 'basketballs' }, ru: { singular: 'баскетбольный мяч', count: 'баскетбольных мячей' } } },
  { emoji: '🎾', category: 'sports', names: { en: { singular: 'tennis ball', count: 'tennis balls' }, ru: { singular: 'теннисный мяч', count: 'теннисных мячей' } } },
  { emoji: '🏐', category: 'sports', names: { en: { singular: 'volleyball', count: 'volleyballs' }, ru: { singular: 'волейбольный мяч', count: 'волейбольных мячей' } } },
  { emoji: '🏂', category: 'sports', names: { en: { singular: 'snowboarder', count: 'snowboarders' }, ru: { singular: 'сноубордист', count: 'сноубордистов' } } },
  { emoji: '🛹', category: 'sports', names: { en: { singular: 'skateboard', count: 'skateboards' }, ru: { singular: 'скейтборд', count: 'скейтбордов' } } },
  { emoji: '🎯', category: 'sports', names: { en: { singular: 'target', count: 'targets' }, ru: { singular: 'мишень', count: 'мишеней' } } },
  { emoji: '🏆', category: 'sports', names: { en: { singular: 'trophy', count: 'trophies' }, ru: { singular: 'кубок', count: 'кубков' } } },

  { emoji: '🎁', category: 'objects', names: { en: { singular: 'gift', count: 'gifts' }, ru: { singular: 'подарок', count: 'подарков' } } },
  { emoji: '🎈', category: 'objects', names: { en: { singular: 'balloon', count: 'balloons' }, ru: { singular: 'шарик', count: 'шариков' } } },
  { emoji: '🧸', category: 'objects', names: { en: { singular: 'teddy bear', count: 'teddy bears' }, ru: { singular: 'плюшевый мишка', count: 'плюшевых мишек' } } },
  { emoji: '📘', category: 'objects', names: { en: { singular: 'book', count: 'books' }, ru: { singular: 'книга', count: 'книг' } } },
  { emoji: '📏', category: 'objects', names: { en: { singular: 'ruler', count: 'rulers' }, ru: { singular: 'линейка', count: 'линеек' } } },
  { emoji: '📎', category: 'objects', names: { en: { singular: 'paperclip', count: 'paperclips' }, ru: { singular: 'скрепка', count: 'скрепок' } } },
  { emoji: '🔍', category: 'objects', names: { en: { singular: 'magnifying glass', count: 'magnifying glasses' }, ru: { singular: 'лупа', count: 'луп' } } },
  { emoji: '🔒', category: 'objects', names: { en: { singular: 'lock', count: 'locks' }, ru: { singular: 'замок', count: 'замков' } } },
  { emoji: '⏰', category: 'objects', names: { en: { singular: 'alarm clock', count: 'alarm clocks' }, ru: { singular: 'будильник', count: 'будильников' } } },
  { emoji: '🧭', category: 'objects', names: { en: { singular: 'compass', count: 'compasses' }, ru: { singular: 'компас', count: 'компасов' } } },
  { emoji: '🔑', category: 'objects', names: { en: { singular: 'key', count: 'keys' }, ru: { singular: 'ключ', count: 'ключей' } } },
  { emoji: '📝', category: 'objects', names: { en: { singular: 'memo', count: 'memos' }, ru: { singular: 'записка', count: 'записок' } } },
];

// Category names in order
const EMOJI_CATEGORY_NAMES = ['animals', 'vehicles', 'food', 'nature', 'sports', 'objects'];

// Pre-built category pools: { animals: ['🐶', ...], vehicles: ['🚗', ...], ... }
const EMOJI_CATEGORIES = {};
for (const cat of EMOJI_CATEGORY_NAMES) {
  EMOJI_CATEGORIES[cat] = EMOJI_LEXICON.filter(e => e.category === cat).map(e => e.emoji);
}

// Flat array of all emoji characters
const ALL_EMOJIS = EMOJI_LEXICON.map(e => e.emoji);

/**
 * Get the lexicon entry for an emoji.
 * @param {string} emoji
 * @returns {object|undefined}
 */
const getEmojiEntry = (emoji) => EMOJI_LEXICON.find(e => e.emoji === emoji);

/**
 * Get the localized name of an emoji.
 * @param {string} emoji
 * @param {'en'|'ru'} lang
 * @param {'singular'|'count'} form
 * @returns {string}
 */
const getEmojiName = (emoji, lang = 'en', form = 'singular') => {
  const entry = getEmojiEntry(emoji);
  if (!entry) return emoji;
  const localized = entry.names[lang] || entry.names.en;
  return localized[form] || entry.names.en[form];
};

/**
 * Build a "How many ___?" prompt.
 * @param {string} emoji
 * @param {'en'|'ru'} lang
 * @returns {string}
 */
const howManyPrompt = (emoji, lang = 'en') => {
  const noun = getEmojiName(emoji, lang, 'count');
  return lang === 'ru' ? `Сколько ${noun}?` : `How many ${noun}?`;
};

/**
 * Get an array of emojis for a category (or all if omitted).
 * @param {string} [category]
 * @returns {string[]}
 */
const getEmojiPool = (category) => {
  if (!category) return ALL_EMOJIS.slice();
  return (EMOJI_CATEGORIES[category] || []).slice();
};

/**
 * Pick a random emoji (optionally from a category).
 * @param {string} [category]
 * @returns {string}
 */
const pickEmoji = (category) => {
  const pool = getEmojiPool(category);
  return pool[Math.floor(Math.random() * pool.length)] || '❔';
};

/**
 * Pick N distinct emojis (optionally filtered by categories).
 * @param {number} n
 * @param {string[]} [categories] - Array of category names to filter by
 * @returns {string[]}
 */
const pickDistinctEmojis = (n, categories) => {
  const pool = (categories && categories.length
    ? EMOJI_LEXICON.filter(e => categories.includes(e.category))
    : EMOJI_LEXICON
  ).map(e => e.emoji);

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.max(0, Math.min(n, pool.length)));
};

/**
 * Search emojis by name substring.
 * @param {string} query
 * @param {'en'|'ru'} lang
 * @returns {object[]}
 */
const searchEmojiByName = (query, lang = 'en') => {
  const q = (query || '').trim().toLowerCase();
  if (!q) return [];
  return EMOJI_LEXICON.filter(entry => {
    const names = entry.names[lang] || entry.names.en;
    return names.singular.toLowerCase().includes(q) || names.count.toLowerCase().includes(q);
  });
};

// Export for ES modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    EMOJI_LEXICON, EMOJI_CATEGORIES, EMOJI_CATEGORY_NAMES, ALL_EMOJIS,
    getEmojiEntry, getEmojiName, howManyPrompt,
    getEmojiPool, pickEmoji, pickDistinctEmojis, searchEmojiByName
  };
}
