export class Project {
  tasks = [];

  constructor(name) {
    this.name = name;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((arrTask) => arrTask !== task);
  }
}
