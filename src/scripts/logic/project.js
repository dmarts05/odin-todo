import generateId from '../utils/id-generator';

export class Project {
  tasks = [];
  id = generateId();
  canAddTasks = true;

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  set name(projectName) {
    projectName = projectName.trim().toUpperCase();

    if (projectName === '') {
      throw 'Project name cannot be empty';
    }

    this._name = projectName;
  }

  set color(projectColor) {
    this._color = projectColor;
  }

  set canAddTasks(projectCanAddTasks) {
    this._canAddTasks = projectCanAddTasks;
  }

  get name() {
    return this._name;
  }

  get color() {
    return this._color;
  }

  get tasks() {
    return this._tasks;
  }

  get taskCount() {
    return this.tasks.length;
  }

  get id() {
    return this._id;
  }

  get canAddTasks() {
    return this._canAddTasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((arrTask) => arrTask !== task);
  }

  getTask(taskId) {
    return this.tasks.find((task) => task.id === taskId);
  }
}
