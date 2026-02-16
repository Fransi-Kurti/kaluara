const fs = require("node:fs/promises");
const bodyParser = require('body-parser');
const express = require("express");

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Load all books
app.get("/api/releases", async (req, res) => {
  try {
    const releases = await fs.readFile("./data/releases.json", "utf8");
    res.json(JSON.parse(releases));
  } catch (error) {
    console.error("Error reading release file:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Fetch a single book by ID
app.get("/api/releases/:releaseId", async (req, res) => {
  try {
    const releases = await fs.readFile("./data/releases.json", "utf8");
    const releasesArray = JSON.parse(releases);
    
    // Find the book with the given ID
    const release = releasesArray.find(r => r.id === req.params.releaseId);
    
    if (!release) {
      return res.status(404).json({ message: "Release not found" });
    }
    
    res.json(release);
  } catch (error) {
    console.error("Error fetching release:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
