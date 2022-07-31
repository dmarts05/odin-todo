import { getProjects } from '../logic/project-manager';
import { enableProjectSwitching } from './project-switching';

const sidebarProjects = document.querySelector('.sidebar__projects');

function createSidebarProjectStructure(project) {
  const projectStructure = document.createElement('li');
  projectStructure.classList.add('sidebar__project');
  projectStructure.dataset.projectId = project.id;

  projectStructure.innerHTML = `
  <div class="sidebar__project__left">
    <i class="sidebar__icon fa-solid fa-circle" style ="color: ${project.color}"></i>
    <p class="sidebar__project-name">${project.name}</p>
  </div>
  <div class="sidebar__project__right">
    <p class="sidebar__project-count">${project.taskCount}</p>
  </div>
  `;

  return projectStructure;
}

function removeSidebarProjects() {
  let project = sidebarProjects.lastElementChild;

  while (project) {
    sidebarProjects.removeChild(project);
    project = sidebarProjects.lastElementChild;
  }
}

function updateSidebarProjects() {
  const projects = getProjects();

  removeSidebarProjects();

  projects.forEach((project) => {
    const projectStructure = createSidebarProjectStructure(project);

    sidebarProjects.appendChild(projectStructure);
  });

  enableProjectSwitching();
}

export default updateSidebarProjects;
