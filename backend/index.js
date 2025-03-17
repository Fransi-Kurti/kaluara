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
app.get("/api/books", async (req, res) => {
  try {
    const books = await fs.readFile("./data/books.json", "utf8");
    res.json(JSON.parse(books));
  } catch (error) {
    console.error("Error reading books file:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Fetch a single book by ID
app.get("/api/books/:bookId", async (req, res) => {
  try {
    const books = await fs.readFile("./data/books.json", "utf8");
    const booksArray = JSON.parse(books);
    
    // Find the book with the given ID
    const book = booksArray.find(b => b.id === req.params.bookId);
    
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    
    res.json(book);
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(3000, () => console.log(`Server is running on port 3000`));
