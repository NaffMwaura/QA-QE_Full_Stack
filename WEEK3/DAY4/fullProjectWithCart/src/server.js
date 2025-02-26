const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allows frontend to access backend
app.use(express.json()); // Allows JSON request handling

// Serve the books.json file as an API
app.get("/books", (req, res) => {
    fs.readFile("books.json", "utf8", (err, data) => {
        if (err) {
            res.status(500).json({ error: "Error reading books file" });
        } else {
            res.json(JSON.parse(data)); // Sends book data as JSON
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

