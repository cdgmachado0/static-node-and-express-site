const express = require('express');
const { projects } = require('./data.json');

const app = express();

app.set('view engine', 'pug');
app.use('/static', express.static('public'));


app.get('/', (req, res) => {
    res.render('index', { projects });
})

app.get('/about', (req, res) => {
    res.render('about');
});




app.listen(3000, () => console.log('Application running on port localhost:3000'));

