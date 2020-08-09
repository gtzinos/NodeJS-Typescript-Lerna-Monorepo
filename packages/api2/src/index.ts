const express = require('express');
import {logger} from '@tzinos/logger2';

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/greeting2', (req: any, res: any) => {
    logger.info('/greeting was called');
    res.send({
        message: `Hello, ${req.query.name || 'World'}!`
    });
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))