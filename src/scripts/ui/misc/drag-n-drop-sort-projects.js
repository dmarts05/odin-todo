import Sortable from 'sortablejs/modular/sortable.core.esm.js';
import { sortProjects } from '../../logic/project-manager';

function enableProjectSorting() {
  const projects = document.querySelector('.sidebar__projects');

  new Sortable(projects, {
    handle: '.sidebar__project__grip',
    animation: 150,
    ghotsCLass: 'disable',
    chosenClass: 'disable',
    dragClass: 'disable',
    onEnd: () => {
      sortProjects('manual');
    },
  });
}

export default enableProjectSorting;
