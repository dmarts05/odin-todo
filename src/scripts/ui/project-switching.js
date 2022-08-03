import {
  updateProjectViewTasks,
  updateProjectViewHeader,
} from './project-view-updater';

function autoToggleSidebarSwitchingProject(sidebarProject, autoSwitchWidth) {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

  if (width <= autoSwitchWidth) {
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

function switchProject(sidebarProject) {
  // Start fade transition
  document.querySelector('.project-view').classList.add('fade');

  if (sidebarProject.classList.contains('sidebar__project')) {
    removeSidebarProjectsActiveClass();
    sidebarProject.classList.add('sidebar__project--active');

    const projectId = sidebarProject.dataset.projectId;
    updateProjectViewHeader(projectId);
    updateProjectViewTasks(projectId);
  }

  setTimeout(() => {
    // End fade transition
    document.querySelector('.project-view').classList.remove('fade');
  }, 150);
}

function enableDefaultProjectSwitching() {
  const defaultSidebarProjects = document.querySelectorAll(
    '.sidebar__default-projects .sidebar__project'
  );

  defaultSidebarProjects.forEach((sidebarProject) => {
    sidebarProject.addEventListener('click', (e) => {
      switchProject(e.target.closest('.sidebar__project'));
    });
    sidebarProject.addEventListener('click', (e) => {
      autoToggleSidebarSwitchingProject(
        e.target.closest('.sidebar__project'),
        700
      );
    });
  });
}

function enableProjectSwitching() {
  const sidebarProjects = document.querySelectorAll(
    '.sidebar__projects .sidebar__project'
  );

  sidebarProjects.forEach((sidebarProject) => {
    sidebarProject.addEventListener('click', (e) => {
      switchProject(e.target.closest('.sidebar__project'));
    });
    sidebarProject.addEventListener('click', (e) => {
      autoToggleSidebarSwitchingProject(
        e.target.closest('.sidebar__project'),
        700
      );
    });
  });
}

export { enableDefaultProjectSwitching, enableProjectSwitching, switchProject };
