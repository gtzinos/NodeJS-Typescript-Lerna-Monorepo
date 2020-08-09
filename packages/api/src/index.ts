const express = require('express');
const logger = require('@geotzinos/logger');

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/greeting', (req: any, res: any) => {
    logger.info('/greeting was called');
    res.send({
        message: `Hello, ${req.query.name || 'World'}!`
    });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))