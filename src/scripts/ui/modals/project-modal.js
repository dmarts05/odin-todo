import { Modal } from './modal';
import getCreatedProject from '../..//logic/project-form-handler';
import { addProject, getProject } from '../../logic/project-manager';
import updateSidebarProjects from '../updaters/sidebar-projects-updater';
import updateTaskFormProjects from '../updaters/task-form-projects-updater';
import { updateProjectViewHeader } from '../updaters/project-view-updater';

export class ProjectModal extends Modal {
  constructor(toggleClass, modalClass) {
    super(toggleClass, modalClass);
    this.enableSubmitProject();
    this.enableSwitchFormMode();
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `<div class="${this.modalClass}__items">
    <h2 class="${this.modalClass}__title">Add project</h2>
    <form action="" class="${this.modalClass}__form">
      <div class="${this.modalClass}__form-group">
        <label class="${this.modalClass}__label" for="project-name">Name:</label>
        <input class="${this.modalClass}__text-input" type="text" name="project-name" id="project-name" maxlenght="120" required>
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

  enableSwitchFormMode() {
    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', (e) => {
        const projectForm = document.querySelector(`.${this.modalClass}__form`);

        const projectModalTitle = document.querySelector(
          `.${this.modalClass}__title`
        );
        const projectFormSubmitBtn = document.getElementById('submit-project');

        if (e.target.classList.contains('edit-project-modal-toggle')) {
          projectModalTitle.textContent = 'Edit project';
          projectFormSubmitBtn.textContent = 'Edit project';

          const projectId = document.querySelector('.sidebar__project--active')
            .dataset.projectId;
          const project = getProject(projectId);

          projectForm.dataset.projectId = projectId;

          const projectFormName = document.getElementById('project-name');
          const projectFormColor = document.getElementById('project-color');

          projectFormName.value = project.name;
          projectFormColor.value = project.color;
        } else {
          projectForm.dataset.projectId = '';

          projectModalTitle.textContent = 'Add project';
          projectFormSubmitBtn.textContent = 'Add project';

          projectForm.reset();
        }
      });
    });
  }

  enableSubmitProject() {
    const submitProjectBtn = document.getElementById('submit-project');
    const projectForm = document.querySelector('.project-modal__form');

    submitProjectBtn.addEventListener('click', (e) => {
      // Check form without submitting it
      e.preventDefault();
      projectForm.reportValidity();

      if (projectForm.checkValidity()) {
        const formProject = getCreatedProject();
        let project;
        const projectFormId = projectForm.dataset.projectId;

        // Check if a task is being edited
        if (projectFormId) {
          project = getProject(projectFormId);
          project.name = formProject.name;
          project.color = formProject.color;
          updateProjectViewHeader(projectFormId);
        } else {
          project = getCreatedProject();
          addProject(project);
        }
        updateSidebarProjects();
        updateTaskFormProjects();
        super.hideModal();
        projectForm.reset();
      }
    });
  }
}
