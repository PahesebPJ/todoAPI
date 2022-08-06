const router = require('express').Router();

const taskController = require('../controllers/taskController');

router.get('/task',taskController.getAllTasks);
router.get('/task/:id',taskController.getTaskById);

module.exports = router;