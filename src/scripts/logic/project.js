import generateId from '../utils/id-generator';
import { compareAsc } from 'date-fns';

export class Project {
  id = generateId();
  tasks = [];
  canAddTasks = true;
  sortMethod = 'none';

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

  set sortMethod(projectSortMethod) {
    this._sortMethod = projectSortMethod;
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

  sortTasks(method) {
    let sortedTasks = [];

    switch (method || this.sortMethod) {
      case 'drag-n-drop':
        const projectViewTasksIds = Array.from(
          document.querySelectorAll('.project-view__task')
        ).map((projectViewTask) => projectViewTask.dataset.taskId);

        projectViewTasksIds.forEach((projectViewTaskId) =>
          sortedTasks.push(this.getTask(projectViewTaskId))
        );
        break;

      case 'name':
        sortedTasks = this.tasks.sort((a, b) => a.name.localeCompare(b.name));
        break;

      case 'priority':
        this.sortTasks('name');
        this.tasks.forEach((task) => {
          if (task.priority === 'high') {
            sortedTasks.push(task);
          }
        });

        this.tasks.forEach((task) => {
          if (task.priority === 'medium') {
            sortedTasks.push(task);
          }
        });

        this.tasks.forEach((task) => {
          if (task.priority === 'low') {
            sortedTasks.push(task);
          }
        });

        this.tasks.forEach((task) => {
          if (task.priority === 'none') {
            sortedTasks.push(task);
          }
        });
        break;

      case 'due-date':
        this.sortTasks('name');
        sortedTasks = this.tasks.sort((a, b) =>
          compareAsc(a.dueDate, b.dueDate)
        );
        break;

      default:
        sortedTasks = this.tasks;
        break;
    }

    this.tasks = sortedTasks;
  }
}
