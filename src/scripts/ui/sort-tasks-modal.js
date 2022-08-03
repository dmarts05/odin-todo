import { Modal } from './modal';

export class SortTasksModal extends Modal {
  constructor(toggleClass, modalClass) {
    super(toggleClass, modalClass);
    this.enableSubmitSortMethod();
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `
    <div class="${this.modalClass}__items">
      <h2 class="${this.modalClass}__title">Select sort method</h2>
      <form action="" class="${this.modalClass}__form">
        <div class="${this.modalClass}__form-group ${this.modalClass}__sort-method">
          <input class="${this.modalClass}__radio-input" type="radio" name="sort-method" id="sort-method-manual" value="manual" required checked>
          <label class="${this.modalClass}__label" for="sort-method-manual">Manual</label>

          <input class="${this.modalClass}__radio-input" type="radio" name="sort-method" id="sort-method-name" value="name" required>
          <label class="${this.modalClass}__label" for="sort-method-name">Name</label>

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

  enableSubmitSortMethod() {
    const submitSortMethodBtn = document.getElementById('submit-sort-method');
    const sortTasksForm = document.querySelector('.sort-tasks-modal__form');

    submitSortMethodBtn.addEventListener('click', (e) => {
      // Check form without submitting it
      e.preventDefault();
      sortTasksForm.reportValidity();

      if (sortTasksForm.checkValidity()) {
        super.hideModal();
      }
    });
  }
}
