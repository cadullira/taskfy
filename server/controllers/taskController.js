const Task = require('../models/taskModel');

const getTasks = async (req, res) => {
    res.json({message: 'Buscar todas as tarefas'});
};

const createTask = async (req, res) => {
    res.json({message: 'Criar tarefa'});
};

const updateTask = async (req, res) => {
    res.json({message: `Atualizar tarefa com ID: ${req.params.id}`});
};

const deleteTask = async (req, res) => {
    res.json({message: `Deletar tarefa com ID: ${req.params.id}`});
}

module.exports = {
    getTasks,
    createTask,
    updateTask,
    deleteTask
}