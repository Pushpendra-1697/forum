const { Schema, model } = require("mongoose");

const taskSchema = new Schema(
    {
        project_id: {
            type: Schema.Types.ObjectId, ref: "project", required: true
        },
        content: { type: String, required: true },
        task: String,
    },
    { versionKey: false, timestamps: true }
);

const TaskModel = model("task", taskSchema);

module.exports = TaskModel;