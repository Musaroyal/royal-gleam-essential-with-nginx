const express = require('express');
const path = require('path');
const app = express();


const replicaApp = process.env.APP_NAME

app.use('/images', express.static(path.join(__dirname, 'images')));


app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`Request served by ${replicaApp}`);
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
