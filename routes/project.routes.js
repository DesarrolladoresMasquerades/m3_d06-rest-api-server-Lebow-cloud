const { router } = require("../app");
const express = require("express");
const router = express.router();
const Project = require("../models/Project.model");

router.put("/:projectId", (req, res) => {
  Project.findByIdAndUpdate(req.params.projectId, req.body, { new: true })
    .populate("task")
    .then((editedProject) => res.json(editedProject))
    .catch((error) => res.json(error));
});

router.delete("/:projectId", (req, res) => {
  Project.findByIdAndDelete(req.params.projectId)

    .then((deletedProject) => res.json(deletedProject))
    .catch((error) => res.json(error));
});

router.get("/:projectId", (req, res) => {
  Project.findById(req.params.projectId)
    .populate("task")
    .then((project) => res.json(project))
    .catch((error) => res.json(error));
});

router.get("/", (res, req, next) => {
  Project.find()
    .populate("task")
    .then((projects) => {
      res.json(projects);
    })
    .catch((error) => res.json(error));
});

router.post("/", (req, res, next) => {
  Project.create(req.body)
    .then((newProject) => res.jason(newProject))
    .catch((error) => res.json(error));
});

module.exports = router;
