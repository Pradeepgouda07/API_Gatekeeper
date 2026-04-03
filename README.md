# API Gatekeeper

A lightweight Express.js API gateway that protects endpoints using rate limiting and suspicious pattern detection.

## Features

- **Rate Limiting** — blocks IPs exceeding 10 requests per 60 seconds
- **Pattern Detection** — rejects requests containing suspicious phrases in the body
- **Request Logging** — logs all blocked requests with IP, reason, and timestamp to a JSON file

## Project Structure

```
API_Gatekeeper/
├── config/
│   └── constants.js        # LIMIT, WINDOW, SUSPICIOUS_PATTERNS
├── data/
│   └── logs.json           # Blocked request logs
├── middleware/
│   ├── rateLimiter.js      # IP-based sliding window rate limiter
│   └── patternChecker.js   # Request body pattern scanner
├── routes/
│   └── api.js              # POST /api/check route
├── utils/
│   └── logger.js           # Logs blocked requests to logs.json
└── server.js               # Entry point
```

## Getting Started

**Install dependencies**
```bash
npm install
```

**Run the server**
```bash
node server.js
```

Server runs on `http://localhost:3000`

## API

### `POST /api/check`

Runs the request through rate limiter and pattern checker.

**Request**
```json
{ "message": "hello world" }
```

**Responses**

| Status | Meaning |
|--------|---------|
| `200` | Request allowed |
| `403` | Rate limit exceeded or suspicious content detected |

## Configuration

Edit `config/constants.js` to adjust:

```js
const LIMIT = 10;           // max requests per window
const WINDOW = 60 * 1000;  // window duration in ms

const SUSPICIOUS_PATTERNS = [
  "wire transfer",
  "inheritance",
  "urgent crypto"
];
```
