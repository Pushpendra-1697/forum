const { Schema, model } = require("mongoose");

const projectSchema = new Schema(
    {
        name: String
    },
    { versionKey: false, timestamps: true }
);

const ProjectModel = model("project", projectSchema);

module.exports = ProjectModel;