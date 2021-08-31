const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/tasks", controllers.createTask);

router.get("/tasks", controllers.getAllTasks);

router.get("/tasks/:id", controllers.getTaskById);

router.post("/tasks/:id", controllers.updateTask);

router.delete("/tasks/:id", controllers.deleteTask);

module.exports = router;
