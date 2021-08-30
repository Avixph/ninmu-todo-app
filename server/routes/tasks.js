const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/tasks", controllers.createItem);

router.get("/tasks", controllers.getAllItems);

router.get("/tasks/:id", controllers.getItemByID);

/*******/
router.get("/tasks/title/:title", controllers.getTaskByTitle);
/*******/

router.post("/tasks/:id", controllers.updateItem);

router.delete("/tasks/:id", controllers.deleteItem);

module.exports = router;
