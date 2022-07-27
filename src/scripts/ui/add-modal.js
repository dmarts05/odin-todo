import { Modal } from './modal';

export class AddModal extends Modal {
  constructor(toggleId, modalClass) {
    super(toggleId, modalClass);
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `<div class="${this.modalClass}__items">
      <h2 class="${this.modalClass}__title">What do you want to add?</h2>
      <div class="${this.modalClass}__buttons">
        <button class="${this.modalClass}__button" id="task-modal-toggle">Task</button>
        <button class="${this.modalClass}__button" id="project-modal-toggle">Project</button>
      </div>
    </div>`;

    return modalStructure;
  }
}
