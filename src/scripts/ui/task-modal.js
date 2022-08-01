import { Modal } from './modal';
import { getTaskProjectId, getCreatedTask } from '../logic/task-form-handler';
import { getProject } from '../logic/project-manager';
import updateTaskFormProjects from './task-form-projects-updater';
import { updateProjectViewTasks } from './project-view-updater';
import updateSidebarProjects from './sidebar-projects-updater';
import { updateDefaultProjects } from '../logic/default-projects';
import { enableTaskRemoval } from './task-settings';

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
      <div class="${this.modalClass}__form-group">
        <label class="${this.modalClass}__label" for="task-name">Name:</label>
        <input class="${this.modalClass}__text-input" type="text" name="task-name" id="task-name" required>
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

  enableSubmitTask() {
    const submitTaskBtn = document.getElementById('submit-task');
    const taskForm = document.querySelector('.task-modal__form');

    submitTaskBtn.addEventListener('click', (e) => {
      // Check form without submitting it
      e.preventDefault();
      taskForm.reportValidity();

      if (taskForm.checkValidity()) {
        const task = getCreatedTask();
        const taskProject = getProject(getTaskProjectId());
        const activeProjectId = document.querySelector(
          '.sidebar__project--active'
        ).dataset.projectId;
        taskProject.addTask(task);
        updateDefaultProjects();
        updateProjectViewTasks(activeProjectId);
        updateSidebarProjects();
        enableTaskRemoval();
        super.hideModal();
        taskForm.reset();
      }
    });
  }
}
