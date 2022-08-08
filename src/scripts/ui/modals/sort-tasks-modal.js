import { Modal } from './modal';
import { getProject } from '../../logic/project-manager';
import { getSortMethod } from '../../logic/sort-tasks-form-handler';
import { updateProjectViewTasks } from '../updaters/project-view-updater';

export class SortTasksModal extends Modal {
  constructor(toggleClass, modalClass) {
    super(toggleClass, modalClass);
    this.enableSubmitSortMethod();
    this.updateSelectedSortMethodForm();
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `
    <div class="${this.modalClass}__items">
      <h2 class="${this.modalClass}__title">Select sort method</h2>
      <form action="" class="${this.modalClass}__form">
        <div class="${this.modalClass}__form-group ${this.modalClass}__sort-method">
          <input class="${this.modalClass}__radio-input" type="radio" name="sort-method" id="sort-method-none" value="none" required>
          <label class="${this.modalClass}__label" for="sort-method-none">None</label>

          <input class="${this.modalClass}__radio-input" type="radio" name="sort-method" id="sort-method-name" value="name" required>
          <label class="${this.modalClass}__label" for="sort-method-name">Name</label>

          <input class="${this.modalClass}__radio-input" type="radio" name="sort-method" id="sort-method-priority" value="priority" required>
          <label class="${this.modalClass}__label" for="sort-method-priority">Priority</label>

          <input class="${this.modalClass}__radio-input" type="radio" name="sort-method" id="sort-method-due-date" value="due-date" required>
          <label class="${this.modalClass}__label" for="sort-method-due-date">Due Date</label>
        </div>

        <div class="${this.modalClass}__form-group ${this.modalClass}__submit">
          <button class="${this.modalClass}__button" id="submit-sort-method">Sort Tasks</button>
        </div>
      </form>
    </div>`;

    return modalStructure;
  }

  updateSelectedSortMethodForm() {
    const activeProject = getProject(
      document.querySelector('.sidebar__project--active').dataset.projectId
    );

    document.getElementById(
      `sort-method-${activeProject.sortMethod}`
    ).checked = true;
  }

  enableSubmitSortMethod() {
    const submitSortMethodBtn = document.getElementById('submit-sort-method');
    const sortTasksForm = document.querySelector('.sort-tasks-modal__form');

    submitSortMethodBtn.addEventListener('click', (e) => {
      // Check form without submitting it
      e.preventDefault();
      sortTasksForm.reportValidity();

      if (sortTasksForm.checkValidity()) {
        const activeProjectId = document.querySelector(
          '.sidebar__project--active'
        ).dataset.projectId;
        const activeProject = getProject(activeProjectId);
        const sortMethod = getSortMethod();

        activeProject.sortMethod = sortMethod;
        updateProjectViewTasks(activeProjectId);
        super.hideModal();
        sortTasksForm.reset();
        this.updateSelectedSortMethodForm();
      }
    });
  }
}
