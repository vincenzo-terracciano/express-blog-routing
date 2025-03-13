const express = require('express');
const app = express();
const port = 3001;

// listening
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    
})

// homepage rout
app.get('/', (req, res) => {
    res.send('Welcome to our server')
})