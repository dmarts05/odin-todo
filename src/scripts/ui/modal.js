export class Modal {
  constructor(toggleId, modalClass) {
    this.toggle = document.getElementById(`${toggleId}`);
    this.modal = document.getElementsByClassName(`${modalClass}`)[0];
    this.modalClass = modalClass;
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
    this.toggle.addEventListener('click', this.showModal.bind(this));
    this.toggle.addEventListener('click', this.hideOtherModals.bind(this));
    this.hideModalByClickingOutside();
  }
}
