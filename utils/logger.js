const fs = require("fs");
const path = require("path");

const logFile = path.join(__dirname, "../data/logs.json");

function logBlocked(ip, reason) {
  const log = {
    ip,
    reason,
    time: new Date().toISOString()
  };

  let data = [];

  try {
    data = JSON.parse(fs.readFileSync(logFile));
  } catch (err) {}

  data.push(log);

  fs.writeFileSync(logFile, JSON.stringify(data, null, 2));
}

module.exports = logBlocked;