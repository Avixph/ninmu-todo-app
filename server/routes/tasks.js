const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/tasks", function (req, res) {
  controllers.createTask;
});

router.get("/tasks", function (req, res) {
  controllers.getAllTasks;
});

router.get("/tasks/:id", function (req, res) {
  controllers.getTaskByID;
});

router.post("/tasks/:id", function (req, res) {
  controllers.updateTask;
});

router.delete("/tasks/:id", function (req, res) {
  controllers.deleteTask;
});

module.exports = router;
