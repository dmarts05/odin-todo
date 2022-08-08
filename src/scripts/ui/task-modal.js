import { Modal } from './modal';
import { getTaskProjectId, getCreatedTask } from '../logic/task-form-handler';
import { getProject, getProjectWithTask } from '../logic/project-manager';
import updateTaskFormProjects from './task-form-projects-updater';
import { updateProjectViewTasks } from './project-view-updater';
import updateSidebarProjects from './sidebar-projects-updater';
import { updateDefaultProjects } from '../logic/default-projects';

export class TaskModal extends Modal {
  constructor(toggleClass, modalClass) {
    super(toggleClass, modalClass);
    updateTaskFormProjects();
    this.enableSubmitTask();
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `<div class="${this.modalClass}__items">
    <h2 class="${this.modalClass}__title">Add task</h2>
    <form action="" class="${this.modalClass}__form ${this.modalClass}__name">
      <div class="${this.modalClass}__form-group ${this.modalClass}__name">
        <label class="${this.modalClass}__label" for="task-name">Name:</label>
        <input class="${this.modalClass}__text-input" type="text" name="task-name" id="task-name" maxlength="500" required></input>
      </div>

      <div class="${this.modalClass}__form-group ${this.modalClass}__project">
        <label for="task-project" class="${this.modalClass}__label">Project:</label>
        <select class="${this.modalClass}__select" name="task-project" id="task-project" required>
        </select>
      </div>

      <div class="${this.modalClass}__form-group ${this.modalClass}__due-date">
        <label for="task-due-date" class="${this.modalClass}__label">Due Date:</label>
        <input type="date" name="task-due-date" id="task-due-date" required>
      </div>

      <div class="${this.modalClass}__form-group ${this.modalClass}__priority">
        <span class="${this.modalClass}__label">Priority:</span>

        <input class="${this.modalClass}__radio-input" type="radio" name="task-priority" id="task-priority-none" value="none" required checked>
        <label class="${this.modalClass}__label" for="task-priority-none">None</label>

        <input class="${this.modalClass}__radio-input" type="radio" name="task-priority" id="task-priority-low" value="low" required>
        <label class="${this.modalClass}__label" for="task-priority-low">Low</label>

        <input class="${this.modalClass}__radio-input" type="radio" name="task-priority" id="task-priority-medium" value="medium" required>
        <label class="${this.modalClass}__label" for="task-priority-medium">Medium</label>

        <input class="${this.modalClass}__radio-input" type="radio" name="task-priority" id="task-priority-high" value="high" required>
        <label class="${this.modalClass}__label" for="task-priority-high">High</label>
      </div>

      <div class="${this.modalClass}__form-group ${this.modalClass}__submit">
        <button class="${this.modalClass}__button" id="submit-task">Add task</button>
      </div>
    </form>
  </div>`;

    return modalStructure;
  }

  enableSwitchFormMode() {
    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        const taskForm = document.querySelector(`.${this.modalClass}__form`);

        const taskModalTitle = document.querySelector(
          `.${this.modalClass}__title`
        );
        const taskFormSubmitBtn = document.getElementById('submit-task');

        if (e.target.classList.contains('edit-task-modal-toggle')) {
          taskModalTitle.textContent = 'Edit task';
          taskFormSubmitBtn.textContent = 'Edit task';

          const taskId =
            e.target.parentNode.parentNode.parentNode.dataset.taskId;
          const taskProject = getProjectWithTask(taskId);
          const task = taskProject.getTask(taskId);

          taskForm.dataset.taskId = taskId;

          const taskFormName = document.getElementById('task-name');
          const taskFormProject = document.getElementById('task-project');
          const taskFormDueDate = document.getElementById('task-due-date');
          const taskFormPriority = document.querySelector(
            `input[type="radio"][name="task-priority"][value="${task.priority}"]`
          );

          taskFormName.value = task.name;
          taskFormProject.value = taskProject.id;
          taskFormDueDate.valueAsDate = task.dueDate;
          taskFormPriority.checked = true;
        } else {
          taskForm.dataset.taskId = '';

          taskModalTitle.textContent = 'Add task';
          taskFormSubmitBtn.textContent = 'Add task';

          taskForm.reset();
          this.selectActiveProjectByDefault();
        }
      });
    });
  }

  selectActiveProjectByDefault() {
    const activeProjectId = document.querySelector('.sidebar__project--active')
      .dataset.projectId;

    const selectedProject =
      activeProjectId === 'today' || activeProjectId === 'all'
        ? 'inbox'
        : activeProjectId;

    document.querySelector(`.${this.modalClass}__select`).value =
      selectedProject;
  }

  enableSubmitTask() {
    const submitTaskBtn = document.getElementById('submit-task');
    const taskForm = document.querySelector(`.${this.modalClass}__form`);

    submitTaskBtn.addEventListener('click', (e) => {
      // Check form without submitting it
      e.preventDefault();
      taskForm.reportValidity();

      if (taskForm.checkValidity()) {
        const task = getCreatedTask();
        const taskFormId = taskForm.dataset.taskId;

        const taskFormProject = getProject(getTaskProjectId());
        const activeProjectId = document.querySelector(
          '.sidebar__project--active'
        ).dataset.projectId;

        // Check if a task is being edited
        if (taskFormId) {
          const taskProject = getProjectWithTask(taskFormId);
          task.id = taskProject.getTask(taskFormId).id;

          taskProject.removeTask(taskProject.getTask(taskFormId));
        }

        taskFormProject.addTask(task);
        updateDefaultProjects();
        updateProjectViewTasks(activeProjectId);
        updateSidebarProjects();
        super.hideModal();
      }
    });
  }
}
