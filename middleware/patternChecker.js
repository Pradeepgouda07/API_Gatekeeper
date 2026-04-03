const { SUSPICIOUS_PATTERNS } = require("../config/constants");
const logBlocked = require("../utils/logger");

function patternChecker(req, res, next) {
  const body = JSON.stringify(req.body || {}).toLowerCase();
  const flagged = SUSPICIOUS_PATTERNS.some(pattern =>
    body.includes(pattern)
  );

  if (flagged) {
    logBlocked(req.ip, "suspicious_pattern");
    return res.status(403).json({ error: "Suspicious content" });
  }

  next();
}

module.exports = patternChecker;