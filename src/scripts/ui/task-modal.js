import { Modal } from './modal';

export class TaskModal extends Modal {
  constructor(toggleId, modalClass) {
    super(toggleId, modalClass);
  }

  createModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    modalStructure.innerHTML = `<div class="task-modal__items">
    <h2 class="task-modal__title">Add task</h2>
    <form action="" class="task-modal__form">
      <div class="task-modal__form-group">
        <label class="task-modal__label" for="task-name">Name:</label>
        <input class="task-modal__text-input" type="text" name="task-name" id="task-name" required>
      </div>

      <div class="task-modal__form-group task-modal__name">
        <label for="task-project" class="task-modal__label">Project:</label>
        <select class="task-modal__select" name="task-project" id="task-project" required>
          <option value="project-inbox">INBOX</option>
        </select>
      </div>

      <div class="task-modal__form-group task-modal__due-date">
        <label for="task-due-date" class="task-modal__label">Due Date:</label>
        <input type="date" name="task-due-date" id="task-due-date" required>
      </div>

      <div class="task-modal__form-group task-modal__priority">
        <span class="task-modal__label">Priority:</span>

        <input class="task-modal__radio-input" type="radio" name="task-priority" id="task-priority-none" value="task-priority-none" required checked>
        <label class="task-modal__label" for="task-priority-none">None</label>

        <input class="task-modal__radio-input" type="radio" name="task-priority" id="task-priority-low" value="task-priority-low" required>
        <label class="task-modal__label" for="task-priority-low">Low</label>

        <input class="task-modal__radio-input" type="radio" name="task-priority" id="task-priority-medium" value="task-priority-medium" required>
        <label class="task-modal__label" for="task-priority-medium">Medium</label>

        <input class="task-modal__radio-input" type="radio" name="task-priority" id="task-priority-high" value="task-priority-high" required>
        <label class="task-modal__label" for="task-priority-high">High</label>
      </div>

      <div class="task-modal__form-group task-modal__submit">
        <button class="task-modal__button" id="submit-task">Add task</button>
      </div>
    </form>
  </div>`;

    return modalStructure;
  }
}
