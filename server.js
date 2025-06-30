const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static images
app.use('/images', express.static(path.join(__dirname, 'images')));

// Serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log("Request served by node app");
});

// Start the server
app.listen(port, () => {
    console.log(`Node app is listening on port ${port}`);
});
