const projects = [];

function getProject(id) {
  return projects.find((project) => project.id === id);
}

function getProjectWithTask(taskId) {
  return projects.find(
    (project) => project.canAddTasks && project.getTask(taskId) !== null
  );
}

function getProjects() {
  return projects;
}

function addProject(project) {
  projects.push(project);
}

export { getProject, getProjects, addProject, getProjectWithTask };
