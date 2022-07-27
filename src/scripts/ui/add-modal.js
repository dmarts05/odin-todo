import { Modal } from './modal';

export class AddModal extends Modal {
  constructor(toggleId, modalClass) {
    super(toggleId, modalClass);
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `<div class="add-modal__items">
      <h2 class="add-modal__title">What do you want to add?</h2>
      <div class="add-modal__buttons">
        <button class="add-modal__button" id="task-modal-toggle">Task</button>
        <button class="add-modal__button" id="project-modal-toggle">Project</button>
      </div>
    </div>`;

    return modalStructure;
  }
}
