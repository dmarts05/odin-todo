import { Task } from './task';

function getTaskName() {
  return document.getElementById('task-name').value;
}

function getTaskProjectId() {
  return document.getElementById('task-project').value;
}

function getTaskDueDate() {
  return document.getElementById('task-due-date').valueAsDate;
}

function getTaskPriority() {
  return document.querySelector(
    'input[type="radio"][name="task-priority"]:checked'
  ).value;
}

function getCreatedTask() {
  return new Task(getTaskName(), getTaskDueDate(), getTaskPriority());
}

export { getTaskProjectId, getCreatedTask };
