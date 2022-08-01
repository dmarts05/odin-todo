import Sortable from 'sortablejs/modular/sortable.core.esm.js';

function enableProjectSorting() {
  const projects = document.querySelector('.sidebar__projects');

  new Sortable(projects, {
    handle: '.sidebar__project__grip',
    animation: 150,
    dragClass: 'hide',
    onSort: () => {
      //TODO prevent autoclick when sorting projects
    },
  });
}

export default enableProjectSorting;
