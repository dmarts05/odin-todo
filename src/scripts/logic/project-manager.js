let projects = [];

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

function removeProject(project) {
  projects = projects.filter((arrProject) => arrProject !== project);
}

function sortProjects(sortMethod) {
  let sortedProjects = [];

  switch (sortMethod) {
    case 'manual':
      const sidebarProjectsIds = Array.from(
        document.querySelectorAll('.sidebar__project')
      ).map((sidebarProject) => sidebarProject.dataset.projectId);

      sidebarProjectsIds.forEach((sidebarProjectId) =>
        sortedProjects.push(getProject(sidebarProjectId))
      );
      break;

    default:
      sortedProjects = projects;
      break;
  }

  projects = sortedProjects;
}

export {
  getProject,
  getProjects,
  addProject,
  removeProject,
  getProjectWithTask,
  sortProjects,
};
