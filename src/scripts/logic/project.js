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

  set tasks(projectTasks) {
    this._tasks = projectTasks;
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

  sortTasks(sortMethod) {
    let sortedTasks = [];

    switch (sortMethod) {
      case 'due-date':
        break;

      case 'manual':
        const projectViewTasksIds = Array.from(
          document.querySelectorAll('.project-view__task')
        ).map((projectViewTask) => projectViewTask.dataset.taskId);

        projectViewTasksIds.forEach((projectViewTaskId) =>
          sortedTasks.push(this.getTask(projectViewTaskId))
        );
        break;
      default:
        sortedTasks = this.tasks;
        break;
    }

    this.tasks = sortedTasks;
  }
}
