const { Router } = require('express');
const ProjectModel = require('../Models/project.model');
const projectRouter = Router();


projectRouter.get('/get', async (req, res) => {
    const query = req.query;
    try {
        const projects = await ProjectModel.find(query);
        res.status(200).send({ msg: `Total no. of  Project ${projects.length}`, projects });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});


projectRouter.post('/', async (req, res) => {
    const payload = req.body;
    try {
        const project = new ProjectModel(payload);
        await project.save();
        res.status(201).send({ msg: 'Project added Successfully', project });
    } catch (err) {
        res.status(404).send({ msg: "Project failed" });
    }
});

module.exports = { projectRouter }