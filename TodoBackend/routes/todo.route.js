const express = require("express");
const Todo = require("../models/todo.model");

// Basic Todo api

const app = express.Router();
app.get("/", async (req, res) => {
  let todo = await Todo.find();
  res.send(todo);
});

// Get by id api
app.get("/:id", async (req, res) => {
  let id = req.params.id;
  let todo = await Todo.findById(id);
  res.send(todo);
});

// POst REquest api

app.post("/", async (req, res) => {
  try {
    const todo = await Todo.create({ ...req.body });
    res.send(todo);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

// Update APi
// app.get("/:id", async (req, res) => {
//   let id = req.params.id;
//   try {
//     let todo = await Todo.findByIdAndUpdate(id, { ...req.body }, { new: true });
//     res.send(todo);
//   } catch (error) {
//     res.status(404).send(error.message);
//   }
// });

// // Delete Todo APi

// app.get("/:id", async (req, res) => {
//   let id = req.params.id;
  
//   try {
//     let todo = await Todo.findByIdAndDelete(id);
//     if (todo) {
//       res.send("Todo deleted Successfully");
//     } else {
//       res.send("Cannot delete it");
//     }
//   } catch (e) {
//     res.status(404).send(e.message);
//   }
// });

module.exports = app;
