const { Router } = require('express');
const ProjectModel = require('../Models/project.model');
const projectRouter = Router();

projectRouter.post('/', async (req, res) => {
    const payload = req.body;
    try {
        const project = new ProjectModel(payload);
        await project.save();
        res.status(201).send({ msg: 'Project added Successfully', users: project });
    } catch (err) {
        res.status(404).send({ msg: "Project failed" });
    }
});

module.exports = { projectRouter }