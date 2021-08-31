const Task = require("../models/task");

const createTask = async (req, res) => {
  try {
    const task = await new Task(req.body);
    await task.save();
    return res.status(201).json({ task });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).send(`There was an error: ${error.message}`);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (task) {
      return res.status(200).json(task);
    }
    return res.status(404).send("Task not found 🛑");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndUpdate(id, req.body, { new: true }, (err, task) => {
      if (err) {
        res.status(500).send(err);
      }
      if (!task) {
        res.status(500).send("Task not found 🛑");
      }
      return res.status(200).json(task);
    });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Task.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Task deleted 🗑");
    }
    throw new Error("Task not found 🛑");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
