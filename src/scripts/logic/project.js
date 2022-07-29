export class Project {
  tasks = [];

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((arrTask) => arrTask !== task);
  }
}
