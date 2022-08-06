const router = require('express').Router();

const project = require('../controllers/projectController');

router.get('/project/:id',project.project);