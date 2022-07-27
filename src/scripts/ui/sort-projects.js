import Sortable from 'sortablejs/modular/sortable.core.esm.js';

function enableProjectSorting() {
  const projects = document.querySelector('.sidebar__projects');

  new Sortable(projects, {
    animation: 150,
    dragClass: 'hide',
  });
}

export default enableProjectSorting;
