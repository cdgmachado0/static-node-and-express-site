const express = require('express');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const routes = require('routes');
app.use(routes);


// Handling errors
app.use((req, res, next) => {
    const err = new Error("Page doesn't exist. Check the URL.");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    let error = '';
    if (err.status !== 404) {
        err.message = 'There was an internal problem. Try again later.';
        err.status = err.status || 500;
        error = 'error';
    } else {
        error = 'page-not-found';
    }
    console.log(err.message, err.status);
    res.render(error, { err })
});


// Start server
app.listen(3000, () => console.log('Application running on port localhost:3000'));

