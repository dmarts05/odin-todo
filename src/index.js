import './styles/index.scss';
import fixVhOnMobile from './scripts/ui/vh-fix-mobile';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/ui/sidebar-toggling.js';
import enableProjectSorting from './scripts/ui/drag-n-drop-sort-projects';
import enableTaskSorting from './scripts/ui/drag-n-drop-sort-tasks';
import {
  switchProject,
  enableDefaultProjectSwitching,
} from './scripts/ui/project-switching';
import { AddModal } from './scripts/ui/add-modal';
import { TaskModal } from './scripts/ui/task-modal';
import { ProjectModal } from './scripts/ui/project-modal';
import { SortTasksModal } from './scripts/ui/sort-tasks-modal.js';
import {
  addDefaultProjects,
  updateDefaultProjects,
} from './scripts/logic/default-projects';
import enableHomeProjectBtn from './scripts/ui/home-project-btn';
import updateSidebarProjects from './scripts/ui/sidebar-projects-updater';
import { enableProjectRemoval } from './scripts/ui/project-settings';

// Enable app basic functionality
fixVhOnMobile();
enableSidebarToggling();
showSidebarAtWidth(700);
enableProjectSorting();
enableTaskSorting();
addDefaultProjects();
enableHomeProjectBtn();
enableDefaultProjectSwitching();
enableProjectRemoval();

// Load app data
updateSidebarProjects(); // Enables project switching too
updateDefaultProjects();

// Create Modals
const addModal = new AddModal('add-modal-toggle', 'add-modal');
const taskModal = new TaskModal('task-modal-toggle', 'task-modal');
const projectModal = new ProjectModal('project-modal-toggle', 'project-modal');
const sortTasksModal = new SortTasksModal(
  'tasks-sort-toggle',
  'sort-tasks-modal'
);

// Set home project view
switchProject(document.querySelector('.home'));

export { taskModal };
