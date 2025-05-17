const express = require("express");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "https://code-reviewer-backend-2.onrender.com/", // ✅ your actual frontend Render URL
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

// Your existing routes
app.use("/ai", require("./routes/aiRoute")); // Example

module.exports = app;
