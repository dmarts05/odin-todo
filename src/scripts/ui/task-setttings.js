import { getProject } from '../logic/project-manager';
import updateSidebarProjects from './sidebar-projects-updater';
import { updateDefaultProjects } from '../logic/default-projects';
import { updateProjectViewTasks } from './project-view-updater';
import { getProjectWithTask } from '../logic/project-manager';

function removeTask(e) {
  const taskId = e.target.parentNode.parentNode.parentNode.dataset.taskId;

  const projectWithRemovedTask = getProjectWithTask(taskId);

  projectWithRemovedTask.removeTask(projectWithRemovedTask.getTask(taskId));

  updateDefaultProjects();
  updateSidebarProjects();
  updateProjectViewTasks(
    document.querySelector('.sidebar__project--active').dataset.projectId
  );
}

function enableTaskRemoval() {
  const taskRemoveBtns = document.querySelectorAll('.task-remove-btn');

  taskRemoveBtns.forEach((taskRemoveBtn) => {
    taskRemoveBtn.addEventListener('click', removeTask);
  });
}

export { enableTaskRemoval };
