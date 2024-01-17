import path from "node:path";
import bodyParser from 'body-parser';
import 'express-async-errors';

import express from "express";

const app = express();
const port = 3000;
const indexRouter = require('./routes');



app.use('/', express.static(path.join(__dirname, './public')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// parse application/json
app.use(bodyParser.json());


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'));

app.use('/', indexRouter);

app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack); // Log error stack trace
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Gamanza Challenge app listening on port ${port}`);
})