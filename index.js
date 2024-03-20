// index.js

const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    // Read the contents of the node_modules folder
    fs.readdir(path.join(__dirname, 'node_modules'), (err, files) => {
        if (err) {
            return res.status(500).send('Error reading node_modules folder');
        }
        // Send the list of files as JSON response
        res.json({ files });
    });
});

// Import and start the server from app.js
const appInstance = require('./app'); // Assuming app.js is in the same directory
appInstance.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
