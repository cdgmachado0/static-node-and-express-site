const express = require('express');
const { projects } = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index', { projects });
})

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const project = projects.find(project => project.id === +id);
    res.render('project', { project })
});


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
}); //finished with handling errors but get an error when quite the server. Check


// Start server
app.listen(3000, () => console.log('Application running on port localhost:3000'));

