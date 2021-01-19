const express = require('express');
const errors = require('./error-handling');
const routes = require('./routes');

//Initializes Express
const app = express();

//Sets Pub as template engine
app.set('view engine', 'pug');
app.use('/static', express.static('public'));

//Initialized the route module
app.use(routes);

//Initializes the modules for handling errors
app.use(errors.notFound);
app.use(errors.otherErrors);


//Starts the server
app.listen(3000, () => console.log('Application running on port localhost:3000'));

