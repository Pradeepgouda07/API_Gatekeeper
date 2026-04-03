# API Gatekeeper

API Gatekeeper is a lightweight Express.js middleware service designed to protect APIs from abuse and suspicious activity using rate limiting, pattern detection, and request logging.

## 🔒 Features

### Rate Limiting
Implements a sliding window algorithm to restrict each IP to a maximum of **10 requests per 60 seconds**, preventing spam and abuse.

### Pattern Detection
Scans incoming request payloads and blocks requests containing suspicious phrases such as:
- "wire transfer"
- "inheritance"
- "urgent crypto"

### 📝 Request Logging
All blocked requests are logged with:
- IP address
- Reason (rate limit / suspicious pattern)
- Timestamp

Logs are stored in a lightweight JSON file.

---

## 🧠 Architecture

The application follows a modular middleware-based design:

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
**Testing**

You can test the API using tools like Thunder Client or Postman.
