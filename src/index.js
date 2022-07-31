import './styles/index.scss';
import fixVhOnMobile from './scripts/ui/vh-fix-mobile';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/ui/sidebar-toggling.js';
import enableProjectSorting from './scripts/ui/sort-projects';
import enableTaskSorting from './scripts/ui/sort-tasks';
import { enableProjectSwitching } from './scripts/ui/project-switching';
import { AddModal } from './scripts/ui/add-modal';
import { TaskModal } from './scripts/ui/task-modal';
import { ProjectModal } from './scripts/ui/project-modal';
import addDefaultProjects from './scripts/logic/default-projects';
import enableHomeProjectBtn from './scripts/ui/home-project-btn';

// Enable app basic functionality
fixVhOnMobile();
enableSidebarToggling();
showSidebarAtWidth(700);
enableProjectSorting();
enableTaskSorting();
addDefaultProjects();
enableProjectSwitching();
enableHomeProjectBtn();

// Create Modals
const addModal = new AddModal('add-modal-toggle', 'add-modal');
const taskModal = new TaskModal('task-modal-toggle', 'task-modal');
const projectModal = new ProjectModal('project-modal-toggle', 'project-modal');

// Set home project view
document.querySelector('.home-btn').click();
