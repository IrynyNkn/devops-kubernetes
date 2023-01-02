'use strict'

const express = require('express')

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('<h3>Hi there, I am simple node js server :)</h3>');
});

app.listen(PORT, HOST);
console.log(`Server is running successfully on ${HOST}:${PORT}`);