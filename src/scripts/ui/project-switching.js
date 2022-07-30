import {
  updateProjectViewTasks,
  updateProjectViewTitle,
} from './project-view-updater';

function autoToggleSidebarSwitchingProject(e, autoSwitchWidth) {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  if (width <= autoSwitchWidth) {
    const sidebarProject = e.target.closest('.sidebar__project');

    if (sidebarProject.classList.contains('sidebar__project')) {
      document.querySelector('.sidebar-toggle').click();
    }
  }
}

function removeSidebarProjectsActiveClass() {
  const sidebarProjects = Array.from(
    document.querySelectorAll('.sidebar__project')
  );

  sidebarProjects.forEach((sidebarProject) => {
    sidebarProject.classList.remove('sidebar__project--active');
  });
}

function switchProject(e) {
  const sidebarProject = e.target.closest('.sidebar__project');

  if (sidebarProject.classList.contains('sidebar__project')) {
    removeSidebarProjectsActiveClass();
    sidebarProject.classList.add('sidebar__project--active');

    const projectId = sidebarProject.dataset.projectId;
    updateProjectViewTitle(projectId);
    updateProjectViewTasks(projectId);
  }
}

function enableProjectSwitching() {
  const sidebarProjects = Array.from(
    document.querySelectorAll('.sidebar__project')
  );

  sidebarProjects.forEach((sidebarProject) => {
    sidebarProject.addEventListener('click', switchProject);
    sidebarProject.addEventListener('click', (e) => {
      autoToggleSidebarSwitchingProject(e, 700);
    });
  });
}

export default enableProjectSwitching;
