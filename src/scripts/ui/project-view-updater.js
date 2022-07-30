import { getProject } from '../logic/project-manager';

function createProjectViewTaskStructure(task) {
  const taskStructure = document.createElement('div');
  taskStructure.classList.add('project-view__task');
  taskStructure.dataset.taskId = task.id;

  const taskChecked = task.checked ? 'checked' : '';

  taskStructure.innerHTML = `
  <div class="project-view__task__top">
    <i class="project-view__task__grip fa-solid fa-grip-vertical"></i>
    <div class="check-wrapper">
      <input
        class="project-view__task__check"
        type="checkbox"
        name="task-check-1"
        id="task-check-1"
        ${taskChecked}
      />
    </div>
    <p class="project-view__task__task-name compact">
      ${task.name}
    </p>
  </div>
  <div class="project-view__task__bottom">
    <p class="project-view__task__due-date">${task.dueDate}</p>
    <div class="project-view__task__settings">
      <i class="project-view__task__icon fa-solid fa-pen task-modal-toggle"></i>
      <i class="project-view__task__icon fa-solid fa-trash"></i>
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

  // Check if given id is the same as the currently showing project
  if (
    document.querySelector('.sidebar__project--active').dataset.projectId ===
    projectId
  ) {
    removeProjectViewTasks();

    project.tasks.forEach((task) =>
      projectViewTasks.appendChild(createProjectViewTaskStructure(task))
    );
  }
}

function updateProjectViewTitle(projectId) {
  const projectViewTitle = document.querySelector('.project-view__title');
  const project = getProject(projectId);

  projectViewTitle.textContent = project.name;
}

export { updateProjectViewTasks, updateProjectViewTitle };
