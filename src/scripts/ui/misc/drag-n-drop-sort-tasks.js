import Sortable from 'sortablejs/modular/sortable.core.esm';
import { getProject } from '../../logic/project-manager';
import { updateProjectViewTasks } from '../updaters/project-view-updater';

function enableTaskSorting() {
  const tasks = document.querySelector('.project-view__tasks');

  new Sortable(tasks, {
    handle: '.project-view__task__grip',
    animation: 150,
    dragClass: 'hide',
    onSort: () => {
      const activeProjectId = document.querySelector(
        '.sidebar__project--active'
      ).dataset.projectId;

      const activeProject = getProject(activeProjectId);

      activeProject.sortMethod = 'none';
      activeProject.sortTasks('drag-n-drop');
      updateProjectViewTasks(activeProjectId);
    },
  });
}

export default enableTaskSorting;
