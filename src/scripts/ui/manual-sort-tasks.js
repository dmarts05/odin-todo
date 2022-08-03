import Sortable from 'sortablejs/modular/sortable.core.esm.js';
import { getProject } from '../logic/project-manager';

function enableTaskSorting() {
  const tasks = document.querySelector('.project-view__tasks');

  new Sortable(tasks, {
    handle: '.project-view__task__grip',
    animation: 150,
    dragClass: 'hide',
    onSort: () =>
      getProject(
        document.querySelector('.sidebar__project--active').dataset.projectId
      ).sortTasks('manual'),
  });
}

export default enableTaskSorting;
