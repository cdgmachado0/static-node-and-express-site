const express = require('express');
const router = express.Router();
const { projects } = require('./data.json');


// Routes
router.get('/', (req, res) => {
    res.render('index', { projects });
})

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/project/:id', (req, res) => {
    const { id } = req.params;
    const project = projects.find(project => project.id === +id);
    res.render('project', { project })
});


module.exports = router;