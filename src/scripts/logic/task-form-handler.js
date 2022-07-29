import { Task } from './task';

function getTaskName() {
  return document.getElementById('task-name').value;
}

function getTaskProject() {
  return document.getElementById('task-project').value;
}

function getTaskDueDate() {
  return document.getElementById('task-due-date').value;
}

function getTaskPriority() {
  return document.getElementById('task-priority').value;
}

function getCreatedTask() {
  return new Task(
    getTaskName(),
    getTaskProject(),
    getTaskDueDate(),
    getTaskPriority()
  );
}

export default getCreatedTask;
