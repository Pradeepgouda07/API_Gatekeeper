const express = require("express");
const app = express();

const apiRoutes = require("./routes/api");

app.use(express.json());

// Routes
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.send("API Gatekeeper Running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});