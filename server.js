// AYIKB — Node.js server
// Serves the static frontend now; add API routes / database below as you build the backend.

const path = require("path");
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON and form bodies (ready for future POST endpoints)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static frontend
app.use(express.static(path.join(__dirname, "frontend")));

// ---------------------------------------------------------------------------
// API routes (add backend endpoints here, e.g. app.post("/api/contact", ...))
// ---------------------------------------------------------------------------

// Simple health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "ayikb" });
});

// Fallback: send the home page for unknown non-API routes
app.get(/^(?!\/api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

app.listen(PORT, () => {
  console.log(`AYIKB server running at http://localhost:${PORT}`);
});
