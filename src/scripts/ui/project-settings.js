import updateSidebarProjects from './sidebar-projects-updater';
import { updateDefaultProjects } from '../logic/default-projects';
import { switchProject } from './project-switching';
import { getProject, removeProject } from '../logic/project-manager';

function enableProjectRemoval() {
  document
    .querySelector('.project-remove-btn')
    .addEventListener('click', () => {
      const removedProject = getProject(
        document.querySelector('.sidebar__project--active').dataset.projectId
      );

      removeProject(removedProject);
      updateDefaultProjects();
      updateSidebarProjects();
      switchProject(document.querySelector('.home'));
    });
}

export { enableProjectRemoval };
