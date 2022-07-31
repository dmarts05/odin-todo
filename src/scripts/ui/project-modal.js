import { Modal } from './modal';
import getCreatedProject from '../logic/project-form-handler';
import { addProject } from '../logic/project-manager';
import updateSidebarProjects from './sidebar-projects-updater';
import updateTaskFormProjects from './task-form-projects-updater';

export class ProjectModal extends Modal {
  constructor(toggleClass, modalClass) {
    super(toggleClass, modalClass);
    this.enableSubmitProject();
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `<div class="${this.modalClass}__items">
    <h2 class="${this.modalClass}__title">Add project</h2>
    <form action="" class="${this.modalClass}__form">
      <div class="${this.modalClass}__form-group">
        <label class="${this.modalClass}__label" for="project-name">Name:</label>
        <input class="${this.modalClass}__text-input" type="text" name="project-name" id="project-name" required>
      </div>

      <div class="${this.modalClass}__form-group ${this.modalClass}__color">
        <label class="${this.modalClass}__label" for="project-color">Color:</label>
        <input type="color" name="project-color" id="project-color" value="#f6f6f6" required>
      </div>

      <div class="${this.modalClass}__form-group ${this.modalClass}__submit">
        <button class="${this.modalClass}__button" id="submit-project">Add project</button>
      </div>
    </form>
  </div>`;

    return modalStructure;
  }

  enableSubmitProject() {
    const submitProjectBtn = document.getElementById('submit-project');
    const projectForm = document.querySelector('.project-modal__form');

    submitProjectBtn.addEventListener('click', (e) => {
      // Check form without submitting it
      e.preventDefault();
      projectForm.reportValidity();

      if (projectForm.checkValidity()) {
        const project = getCreatedProject();
        addProject(project);
        updateSidebarProjects();
        updateTaskFormProjects();
        super.hideModal();
        projectForm.reset();
      }
    });
  }
}
