"use strict";
const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    let halloWorld = 'Hallo World';
    res.send(halloWorld);
});
app.listen(port, () => {
    console.log(`Сервер запущен на порту: ${port}`);
});
