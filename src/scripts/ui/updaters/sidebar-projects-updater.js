import { getProjects } from '../../logic/project-manager';
import { enableProjectSwitching } from '../toggles/project-switching';

const sidebarProjects = document.querySelector('.sidebar__projects');

function createSidebarProjectStructure(project) {
  const projectStructure = document.createElement('li');
  projectStructure.classList.add('sidebar__project');
  projectStructure.dataset.projectId = project.id;

  projectStructure.innerHTML = `
  <div class="sidebar__project__left">
    <i class="sidebar__project__grip sidebar__icon fa-solid fa-grip-vertical"></i>
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
  const activeProjectId = document.querySelector('.sidebar__project--active')
    .dataset.projectId;

  removeSidebarProjects();

  projects.forEach((project) => {
    if (project.canAddTasks && project.id !== 'inbox') {
      const projectStructure = createSidebarProjectStructure(project);

      if (project.id === activeProjectId) {
        projectStructure.classList.add('sidebar__project--active');
      }

      sidebarProjects.appendChild(projectStructure);
    } else {
      // Update task count of default projects
      const defaultSidebarProjects = document.querySelectorAll(
        '.sidebar__default-projects .sidebar__project'
      );
      defaultSidebarProjects.forEach((defaultSidebarProject) => {
        if (defaultSidebarProject.dataset.projectId === project.id) {
          defaultSidebarProject.querySelector(
            '.sidebar__project-count'
          ).textContent = project.taskCount;
        }
      });
    }
  });

  enableProjectSwitching();
}

export default updateSidebarProjects;
