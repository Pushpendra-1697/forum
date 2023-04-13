const { Router } = require('express');
const TaskModel = require('../Models/task.model');
const taskRouter = Router();


taskRouter.get('/get', async (req, res) => {
    const query = req.query;
    try {
        const projects = await TaskModel.find(query);
        res.status(200).send({ msg: `Total no. of  Project ${projects.length}`, projects });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});


taskRouter.post('/', async (req, res) => {
    const payload = req.body;
    console.log(payload)
    try {
        const project = new TaskModel(payload);
        await project.save();
        res.status(201).send({ msg: 'Task added Successfully', project });
    } catch (err) {
        res.status(404).send({ msg: "Project failed" });
    }
});

module.exports = { taskRouter }