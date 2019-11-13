//1. require express
const express = require('express');
const app = express();
const port = 3000;

//2. listen to request 
app.listen(port, function() {
    console.log(`Express is listening on port ${port}`);
});

//3. 