export class Modal {
  constructor(toggleId, modalClass) {
    this.modalClass = modalClass;

    this.injectModalToHTML(this.getModalStructure());

    this.toggle = document.getElementById(`${toggleId}`);
    this.modal = document.getElementsByClassName(`${this.modalClass}`)[0];

    this.enableModalToggling();
  }

  getModalStructure() {
    const modalStructure = document.createElement('div');
    modalStructure.classList.add('modal-wrapper', `${this.modalClass}`);

    return modalStructure;
  }

  injectModalToHTML(modalStructure) {
    const wrapper = document.querySelector('body');
    wrapper.appendChild(modalStructure);
  }

  hideModal() {
    this.modal.classList.remove('modal-wrapper--active');
  }

  showModal() {
    this.modal.classList.add('modal-wrapper--active');
  }

  hideOtherModals() {
    document.querySelectorAll('.modal-wrapper').forEach((modal) => {
      if (modal !== this.modal) {
        modal.classList.remove('modal-wrapper--active');
      }
    });
  }

  hideModalByClickingOutside() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains(`${this.modalClass}`)) {
        this.hideModal();
      }
    });
  }

  enableModalToggling() {
    this.toggle.addEventListener('click', () => {
      this.showModal();
    });
    this.toggle.addEventListener('click', () => {
      this.hideOtherModals();
    });
    this.hideModalByClickingOutside();
  }
}
