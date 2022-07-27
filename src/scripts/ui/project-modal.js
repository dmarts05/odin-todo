import { Modal } from './modal';

export class ProjectModal extends Modal {
  constructor(toggleId, modalClass) {
    super(toggleId, modalClass);
  }

  getModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `<div class="project-modal__items">
    <h2 class="project-modal__title">Add project</h2>
    <form action="" class="project-modal__form">
      <div class="project-modal__form-group">
        <label class="project-modal__label" for="project-name">Name:</label>
        <input class="project-modal__text-input" type="text" name="project-name" id="project-name" required>
      </div>

      <div class="project-modal__form-group project-modal__color">
        <label class="project-modal__label" for="project-color">Color:</label>
        <input type="color" name="project-color" id="project-color" value="#f6f6f6" required>
      </div>

      <div class="project-modal__form-group project-modal__submit">
        <button class="project-modal__button" id="submit-project">Add project</button>
      </div>
    </form>
  </div>`;

    return modalStructure;
  }
}
