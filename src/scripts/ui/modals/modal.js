export class Modal {
  constructor(toggleClass, modalClass) {
    this.modalClass = modalClass;

    this.injectModalToHTML(this.createModalStructure());

    this.toggles = toggleClass;
    this.modal = document.getElementsByClassName(`${this.modalClass}`)[0];
  }

  get toggles() {
    return this._toggles;
  }

  set toggles(toggleClass) {
    this._toggles = Array.from(
      document.getElementsByClassName(`${toggleClass}`)
    );
    this.enableModalToggling();
  }

  createModalStructure() {
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
    this.toggles.forEach((toggle) => {
      toggle.addEventListener('click', this.showModal.bind(this));
      toggle.addEventListener('click', this.hideOtherModals.bind(this));
    });

    this.hideModalByClickingOutside();
  }
}
