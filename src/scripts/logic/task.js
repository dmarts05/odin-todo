import generateId from '../utils/id-generator';
import { saveProjectsToStorage } from '../utils/storage';

export class Task {
  checked = false;
  id = generateId();

  constructor(name, dueDate, priority) {
    this.name = name;
    this.dueDate = dueDate;
    this.priority = priority;
  }

  set name(taskName) {
    taskName = taskName.trim();

    if (taskName === '') {
      throw 'Task name cannot be empty';
    }

    this._name = taskName;
  }

  set dueDate(taskDueDate) {
    this._dueDate = taskDueDate;
  }

  set priority(taskPriority) {
    this._priority = taskPriority;
  }

  set id(taskId) {
    this._id = taskId;
  }

  get name() {
    return this._name;
  }

  get dueDate() {
    return this._dueDate;
  }

  get priority() {
    return this._priority;
  }

  get checked() {
    return this._checked;
  }

  get id() {
    return this._id;
  }

  toggleChecked() {
    this.checked = !this.checked;
    saveProjectsToStorage();
  }
}
