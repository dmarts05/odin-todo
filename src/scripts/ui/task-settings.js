import updateSidebarProjects from './sidebar-projects-updater';
import { updateDefaultProjects } from '../logic/default-projects';
import { updateProjectViewTasks } from './project-view-updater';
import { getProjectWithTask } from '../logic/project-manager';

function removeTask(e) {
  // Start slide transition
  document.querySelector('.project-view__tasks').classList.add('slide');

  const taskId = e.target.parentNode.parentNode.parentNode.dataset.taskId;

  const projectWithRemovedTask = getProjectWithTask(taskId);

  setTimeout(() => {
    projectWithRemovedTask.removeTask(projectWithRemovedTask.getTask(taskId));

    updateDefaultProjects();
    updateSidebarProjects();

    updateProjectViewTasks(projectWithRemovedTask.id);

    // End slide transition
    document.querySelector('.project-view__tasks').classList.remove('slide');
  }, 150);
}

function enableTaskRemoval() {
  const taskRemoveBtns = document.querySelectorAll('.task-remove-btn');

  taskRemoveBtns.forEach((taskRemoveBtn) => {
    taskRemoveBtn.addEventListener('click', removeTask);
  });
}

export { enableTaskRemoval };
