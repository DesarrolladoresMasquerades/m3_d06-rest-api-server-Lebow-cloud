const { router } = require("../app");
const express = require("express");
const router = express.router();
const Task = require("../models/Task.model");
const Project = require("../Project.model");

router.post("/", (req, res) => {
  Task.create(req.body)
    .then((newTask) => {
      Project.findByIdAndUpdate(
        newTask.project,
        {
          $push: { tasks: newTask._id },
        },
        { new: true }
      ).then(() => res.json(newTask));
    })
    .catch((err) => res.json(err));
});


router.put("/:taskId", (req,res)=>{
  Task.findByIdAndUpdate(req.params.taskId)
    .then(task=>{
      const oldProject = task.project
      const newProject = req.body.project
        Project.findByIdUpdate(oldProject, {$pull: {task: task._id}} )
          .then((__)=>{
            Project.findByIdAndUpdate(newProject, {$put:{task : task._id}})
          })
          const {title, description } = req.body    })  
          task.title
          task.description = description
          task.save().then((updatedTask)=>res.json(updatedTask))



    .then((updatedTask)=>res.json(updatedTask))
})