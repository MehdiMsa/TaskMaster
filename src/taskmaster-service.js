// src/taskmaster-service.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let todoList = [];

// Get all tasks
app.get('/tasks', (req, res) => {
  res.json(todoList);
});

// Add a new task
app.post('/tasks', (req, res) => {
  const newTask = req.body;
  newTask.id = todoList.length + 1;
  todoList.push(newTask);
  res.status(201).json(newTask);
});

app.listen(port, () => {
  console.log(`TaskMaster service listening at http://localhost:${port}`);
});
