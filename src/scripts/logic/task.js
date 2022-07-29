export class Task {
  checked = false;

  constructor(name, project, dueDate, priority) {
    this.name = name;
    this.project = project;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
