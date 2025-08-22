const express = require('express');
const router = express.Router();
const {
    getTasks,
    createTask,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

// rotas encadeadas para /api/tasks
router.route('/').get(getTasks).post(createTask);

// rotas encadeadas para /api/tasks/:id
router.route('/:id').put(updateTask).delete(deleteTask);

module.exports = router;
