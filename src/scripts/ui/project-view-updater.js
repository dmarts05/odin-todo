import { getProject } from '../logic/project-manager';
import { getDefaultProjectsIds } from '../logic/default-projects';

function toggleTaskCheckedStatus(e) {
  const activeProject = getProject(
    document.querySelector('.sidebar__project--active').dataset.projectId
  );

  const task = activeProject.getTask(
    e.target.closest('.project-view__task').dataset.taskId
  );

  task.toggleChecked();

  const taskName = e.target.parentNode.parentNode.querySelector(
    '.project-view__task__task-name'
  );

  taskName.classList.toggle('line-through');
}

function createProjectViewTaskStructure(task) {
  const taskStructure = document.createElement('div');
  taskStructure.classList.add('project-view__task');
  taskStructure.dataset.taskId = task.id;

  const taskLineThrough = task.checked ? 'line-through' : '';
  const taskChecked = task.checked ? 'checked' : '';

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
    <p class="project-view__task__due-date">${task.dueDate}</p>
    <div class="project-view__task__settings">
      <i class="project-view__task__icon fa-solid fa-pen task-modal-toggle"></i>
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
  // Start fade transition
  document.querySelector('.project-view').classList.add('fade');

  const projectViewTasks = document.querySelector('.project-view__tasks');
  const project = getProject(projectId);

  let isShowingId =
    document.querySelector('.sidebar__project--active').dataset.projectId ===
    projectId;

  // Check if given id is the same as the currently showing project
  if (isShowingId) {
    removeProjectViewTasks();

    project.tasks.forEach((task) =>
      projectViewTasks.appendChild(createProjectViewTaskStructure(task))
    );
  }

  // Add event listener that toggles checked status for every task
  const tasksCheckBoxes = document.querySelectorAll(
    '.project-view__task__check'
  );
  tasksCheckBoxes.forEach((taskCheckBox) => {
    taskCheckBox.addEventListener('click', toggleTaskCheckedStatus);
  });

  setTimeout(() => {
    // End fade transition
    document.querySelector('.project-view').classList.remove('fade');
  }, 150);
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
