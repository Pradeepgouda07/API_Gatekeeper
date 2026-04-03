const { LIMIT, WINDOW } = require("../config/constants");
const logBlocked = require("../utils/logger");

const requests = {};

function rateLimiter(req, res, next) {
  const ip = req.ip;
  const now = Date.now();

  if (!requests[ip]) requests[ip] = [];

  requests[ip] = requests[ip].filter(t => now - t < WINDOW);
  requests[ip].push(now);

  if (requests[ip].length > LIMIT) {
    logBlocked(ip, "rate_limit");
    return res.status(403).json({ error: "Too many requests" });
  }

  next();
}

module.exports = rateLimiter;