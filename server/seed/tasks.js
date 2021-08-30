const db = require("../db");
const Task = require("../models/task");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const tasks = [
    {
      title: "Feed cat",
      task_Detail: "Give Mr. Mittens 16oz of wet food.",
    },
    {
      title: "Weightlifting",
      task_Detail: "Go to gym and secure squat-rack.",
    },
    {
      title: "Get coffee wtih friend",
      task_Detail: "Meet at Starbucks 5th avenue, order mocha vanilla frappe.",
    },
  ];
  await Task.insertMany(tasks);
  console.log("Created some tasks");
};

const run = async () => {
  await main();
  db.close();
};

run();
