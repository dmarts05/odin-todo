import Sortable from 'sortablejs/modular/sortable.core.esm.js';
import { getProject } from '../logic/project-manager';

function updateProjectTaskOrder() {
  const activeProject = getProject(
    document.querySelector('.sidebar__project--active').dataset.projectId
  );

  const projectViewTasksIds = Array.from(
    document.querySelectorAll('.project-view__task')
  ).map((projectViewTask) => projectViewTask.dataset.taskId);

  const sortedTasks = [];

  projectViewTasksIds.forEach((projectViewTaskId) =>
    sortedTasks.push(activeProject.getTask(projectViewTaskId))
  );

  activeProject.tasks = sortedTasks;
}

function enableTaskSorting() {
  const tasks = document.querySelector('.project-view__tasks');

  new Sortable(tasks, {
    handle: '.project-view__task__grip',
    animation: 150,
    dragClass: 'hide',
    onSort: updateProjectTaskOrder,
  });
}

export default enableTaskSorting;
