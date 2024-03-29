import updateSidebarProjects from '../updaters/sidebar-projects-updater';
import { updateDefaultProjects } from '../../logic/default-projects';
import { updateProjectViewTasks } from '../updaters/project-view-updater';
import { getProjectWithTask } from '../../logic/project-manager';
import { taskModal } from '../../..';
import { saveProjectsToStorage } from '../../utils/storage';

function removeTask(e) {
  if (confirm('Do you really want to remove this task?')) {
    // Start slide transition
    document.querySelector('.project-view__tasks').classList.add('slide');

    const taskId = e.target.parentNode.parentNode.parentNode.dataset.taskId;

    const projectWithRemovedTask = getProjectWithTask(taskId);

    setTimeout(() => {
      projectWithRemovedTask.removeTask(projectWithRemovedTask.getTask(taskId));

      updateDefaultProjects();
      updateSidebarProjects();

      updateProjectViewTasks(
        document.querySelector('.sidebar__project--active').dataset.projectId
      );

      saveProjectsToStorage();

      // End slide transition
      document.querySelector('.project-view__tasks').classList.remove('slide');
    }, 150);
  }
}

function enableTaskRemoval() {
  const taskRemoveBtns = document.querySelectorAll('.task-remove-btn');

  taskRemoveBtns.forEach((taskRemoveBtn) => {
    taskRemoveBtn.addEventListener('click', removeTask);
  });
}

function enableTaskEditing() {
  taskModal.toggles = 'task-modal-toggle';
  taskModal.enableSwitchFormMode();
}

export { enableTaskRemoval, enableTaskEditing };
