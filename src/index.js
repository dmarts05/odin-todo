import './styles/index.scss';
import fixVhOnMobile from './scripts/ui/misc/vh-fix-mobile';
import enableThemeToggling from './scripts/ui/toggles/theme-toggles';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/ui/toggles/sidebar-toggling.js';
import enableProjectSorting from './scripts/ui/misc/drag-n-drop-sort-projects';
import enableTaskSorting from './scripts/ui/misc/drag-n-drop-sort-tasks';
import {
  switchProject,
  enableDefaultProjectSwitching,
} from './scripts/ui/toggles/project-switching';
import { AddModal } from './scripts/ui/modals/add-modal';
import { TaskModal } from './scripts/ui/modals/task-modal';
import { ProjectModal } from './scripts/ui/modals/project-modal';
import { SortTasksModal } from './scripts/ui/modals/sort-tasks-modal.js';
import {
  addDefaultProjects,
  updateDefaultProjects,
} from './scripts/logic/default-projects';
import enableHomeProjectBtn from './scripts/ui/toggles/home-project-btn';
import updateSidebarProjects from './scripts/ui/updaters/sidebar-projects-updater';
import { enableProjectRemoval } from './scripts/ui/toggles/project-settings';
import { loadProjectsFromStorage } from './scripts/utils/storage';

// Load app data
loadProjectsFromStorage();

// Enable app basic functionality
fixVhOnMobile();
enableThemeToggling();
enableSidebarToggling();
showSidebarAtWidth(700);
enableProjectSorting();
enableTaskSorting();
enableHomeProjectBtn(700);
enableDefaultProjectSwitching();
enableProjectRemoval();
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
