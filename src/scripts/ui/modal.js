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

  hideModalByClickingOutside() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains(`${this.modalClass}`)) {
        this.hideModal();
      }
    });
  }

  enableModalToggling() {
    this.toggle.addEventListener('click', this.showModal.bind(this));
    this.hideModalByClickingOutside();
  }
}
