const projects = [];

function getProject(id) {
  return projects.find((project) => project.id === id);
}

function getProjects() {
  return projects;
}

function addProject(project) {
  projects.push(project);
}

export { getProject, getProjects, addProject };
