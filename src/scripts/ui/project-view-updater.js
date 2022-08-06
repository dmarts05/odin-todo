import { getProject } from '../logic/project-manager';
import { getDefaultProjectsIds } from '../logic/default-projects';
import { enableTaskRemoval, enableTaskEditing } from './task-settings';
import formatTaskDate from '../utils/format-task-date';
import { isPast, isToday } from 'date-fns';

function toggleTaskCheckedStatus(e) {
  const taskWrapper = e.target.parentNode.parentNode.parentNode;

  const activeProjectId = document.querySelector('.sidebar__project--active')
    .dataset.projectId;
  const activeProject = getProject(activeProjectId);

  const task = activeProject.getTask(taskWrapper.dataset.taskId);

  task.toggleChecked();
  activeProject.sortTasks();
  updateProjectViewTasks(activeProjectId);

  const taskName = taskWrapper.querySelector('.project-view__task__task-name');

  taskWrapper.classList.toggle('project-view__task--checked');
  taskName.classList.toggle('project-view__task__task-name--checked');
}

function createProjectViewTaskStructure(task) {
  const taskStructure = document.createElement('div');
  taskStructure.classList.add('project-view__task');
  taskStructure.dataset.taskId = task.id;

  const taskLineThrough = task.checked
    ? 'project-view__task__task-name--checked'
    : '';
  const taskWrapperChecked = task.checked ? 'project-view__task--checked' : '';
  const taskChecked = task.checked ? 'checked' : '';
  const overdue =
    isPast(task.dueDate) && !isToday(task.dueDate) ? 'overdue' : '';

  const formattedDate = formatTaskDate(task.dueDate);

  if (taskWrapperChecked) {
    taskStructure.classList.add(taskWrapperChecked);
  }

  taskStructure.innerHTML = `
  <div class="project-view__task__top">
    <i class="project-view__task__grip fa-solid fa-grip-vertical"></i>
    <div class="check-wrapper">
      <input
        class="project-view__task__check ${task.priority}-priority"
        type="checkbox"
        name="task-check-1"
        id="task-check-1"
        ${taskChecked}
      />
    </div>
    <p class="project-view__task__task-name compact ${taskLineThrough}">
      ${task.name}
    </p>
  </div>
  <div class="project-view__task__bottom">
    <p class="project-view__task__due-date ${overdue}">${formattedDate}</p>
    <div class="project-view__task__settings">
      <i class="project-view__task__icon fa-solid fa-pen task-modal-toggle edit-task-modal-toggle"></i>
      <i class="project-view__task__icon fa-solid fa-trash task-remove-btn"></i>
    </div>
  </div>
  `;

  return taskStructure;
}

function removeProjectViewTasks() {
  const projectViewTasks = document.querySelector('.project-view__tasks');

  let task = projectViewTasks.lastElementChild;
  while (task) {
    projectViewTasks.removeChild(task);
    task = projectViewTasks.lastElementChild;
  }
}

function updateProjectViewTasks(projectId) {
  const projectViewTasks = document.querySelector('.project-view__tasks');
  const project = getProject(projectId);

  let isShowingId =
    document.querySelector('.sidebar__project--active').dataset.projectId ===
    projectId;

  // Check if given id is the same as the currently showing project
  if (isShowingId) {
    // Start slide transition
    document.querySelector('.project-view__tasks').classList.add('slide');

    // Sort tasks by project's sorting method
    project.sortTasks();

    removeProjectViewTasks();

    project.tasks.forEach((task) =>
      projectViewTasks.appendChild(createProjectViewTaskStructure(task))
    );

    enableTaskRemoval();
    enableTaskEditing();

    // End slide transition
    setTimeout(() => {
      document.querySelector('.project-view__tasks').classList.remove('slide');
    }, 150);
  }

  // Add event listener that toggles checked status for every task
  const tasksCheckBoxes = document.querySelectorAll(
    '.project-view__task__check'
  );
  tasksCheckBoxes.forEach((taskCheckBox) => {
    taskCheckBox.addEventListener('click', toggleTaskCheckedStatus);
  });
}

function updateProjectViewHeader(projectId) {
  // Check if given projectId points to a default project
  if (
    getDefaultProjectsIds().some(
      (defaultProjectId) => defaultProjectId === projectId
    )
  ) {
    // Disable edit and remove buttons for given project
    document.querySelector('.project-edit-btn').classList.add('hide');
    document.querySelector('.project-remove-btn').classList.add('hide');
  } else {
    // Enable edit and remove buttons for given project
    document.querySelector('.project-edit-btn').classList.remove('hide');
    document.querySelector('.project-remove-btn').classList.remove('hide');
  }

  const projectViewTitle = document.querySelector('.project-view__title');
  const project = getProject(projectId);

  projectViewTitle.textContent = project.name;
}

export { updateProjectViewTasks, updateProjectViewHeader };
