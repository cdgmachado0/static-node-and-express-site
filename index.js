const express = require('express');
const errors = require('./error-handling');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));

const routes = require('./routes');
app.use(routes);


// Handling errors
app.use(errors.notFound);
app.use(errors.otherErrors);


// Start server
app.listen(3000, () => console.log('Application running on port localhost:3000'));

