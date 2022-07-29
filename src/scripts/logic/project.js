export class Project {
  tasks = [];

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  get name() {
    return this.name;
  }

  get color() {
    return this.color;
  }

  get taskCount() {
    return this.tasks.length;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(task) {
    this.tasks = this.tasks.filter((arrTask) => arrTask !== task);
  }
}
