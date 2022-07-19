import Sortable from 'sortablejs/modular/sortable.core.esm.js';

function enableTaskSorting() {
  const tasks = document.querySelector('.project-view__tasks');

  new Sortable(tasks, {
    handle: '.project-view__task__grip',
    animation: 150,
  });
}

export default enableTaskSorting;
