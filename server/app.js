const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const routes = require("./routes/tasks");

// const db = require("./db");
// db.on("error", console.error.bind(console, "MongoDB Connection Error:"));

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(logger("dev"));

app.use("/api", routes);

module.exports = app;
