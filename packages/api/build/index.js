"use strict";
const express = require('express');
const logger = require('@tzinos/logger');
const PORT = process.env.PORT || 8080;
const app = express();
app.get('/greeting2', (req, res) => {
    logger.info('/greeting was called');
    res.send({
        message: `Hello, ${req.query.name || 'World'}!`
    });
});
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
