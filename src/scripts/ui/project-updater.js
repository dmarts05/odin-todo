import { getProjects } from '../logic/project-manager';

const sidebarProjects = document.querySelector('.sidebar__projects');

function createSidebarProjectStructure(
  projectName,
  projectColor,
  projectTaskCount
) {
  const projectStructure = document.createElement('li');
  projectStructure.classList.add('sidebar__project');

  projectStructure.innerHTML = `
  <div class="sidebar__project__left">
    <i class="sidebar__icon fa-solid fa-circle" style ="color: ${projectColor}"></i>
    <p class="sidebar__project-name">${projectName}</p>
  </div>
  <div class="sidebar__project__right">
    <p class="sidebar__project-count">${projectTaskCount}</p>
  </div>
  `;

  return projectStructure;
}

function removeSidebarProjects() {
  let project = sidebarProjects.lastElementChild;

  while (project) {
    sidebarProjects.remove(project);
    project = sidebarProjects.lastElementChild;
  }
}

function updateSidebarProjects() {
  const projects = getProjects();

  removeSidebarProjects();

  projects.forEach((project) => {
    const projectStructure = createSidebarProjectStructure(
      project.name,
      project.color,
      project.taskCount
    );

    sidebarProjects.appendChild(projectStructure);
  });
}

export default updateSidebarProjects;
