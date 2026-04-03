const express = require("express");
const router = express.Router();

const rateLimiter = require("../middleware/rateLimiter");
const patternChecker = require("../middleware/patternChecker");

router.post("/check", rateLimiter, patternChecker, (req, res) => {
  return res.status(200).json({ message: "Request allowed" });
});

module.exports = router;