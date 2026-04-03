const LIMIT = 10;
const WINDOW = 60 * 1000;

const SUSPICIOUS_PATTERNS = [
  "wire transfer",
  "inheritance",
  "urgent crypto"
];

module.exports = { LIMIT, WINDOW, SUSPICIOUS_PATTERNS };
