import { getProjects } from '../logic/project-manager';

function removeTaskFormProjects() {
  const projectSelectInput = document.getElementById('task-project');
  let project = projectSelectInput.lastElementChild;

  while (project) {
    projectSelectInput.removeChild(project);
    project = projectSelectInput.lastElementChild;
  }
}

function updateTaskFormProjects() {
  const projectSelectInput = document.getElementById('task-project');
  const projects = getProjects();

  removeTaskFormProjects();

  projects.forEach((project) => {
    if (project.canAddTasks) {
      const projectOption = document.createElement('option');
      projectOption.value = project.id;
      projectOption.textContent = project.name;
      projectSelectInput.appendChild(projectOption);
    }
  });
}

export default updateTaskFormProjects;
