import './styles/index.scss';
import fixVhOnMobile from './scripts/ui/vh-fix-mobile';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/ui/sidebar-toggle.js';
import enableProjectSorting from './scripts/ui/sort-projects';
import enableTaskSorting from './scripts/ui/sort-tasks';
import { Modal } from './scripts/ui/modal';

fixVhOnMobile();
enableSidebarToggling();
showSidebarAtWidth(700);
enableProjectSorting();
enableTaskSorting();

const addModal = new Modal('add-modal-toggle', 'add-modal');
addModal.enableModalToggling();
