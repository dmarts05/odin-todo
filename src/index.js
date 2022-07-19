import './styles/index.scss';
import fixVhOnMobile from './scripts/vh-fix-mobile';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/sidebar-toggle.js';
import enableProjectSorting from './scripts/sort-projects';
import enableTaskSorting from './scripts/sort-tasks';

fixVhOnMobile();
enableSidebarToggling();
showSidebarAtWidth(700);
enableProjectSorting();
enableTaskSorting();
