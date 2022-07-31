import './styles/index.scss';
import fixVhOnMobile from './scripts/ui/vh-fix-mobile';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/ui/sidebar-toggling.js';
import enableProjectSorting from './scripts/ui/sort-projects';
import enableTaskSorting from './scripts/ui/sort-tasks';
import {
  enableProjectSwitching,
  switchProject,
} from './scripts/ui/project-switching';
import { AddModal } from './scripts/ui/add-modal';
import { TaskModal } from './scripts/ui/task-modal';
import { ProjectModal } from './scripts/ui/project-modal';
import addDefaultProjects from './scripts/logic/default-projects';
import enableHomeProjectBtn from './scripts/ui/home-project-btn';
import updateSidebarProjects from './scripts/ui/sidebar-projects-updater';
import updateTaskFormProjects from './scripts/ui/task-form-projects-updater';

// Enable app basic functionality
fixVhOnMobile();
enableSidebarToggling();
showSidebarAtWidth(700);
enableProjectSorting();
enableTaskSorting();
addDefaultProjects();
enableHomeProjectBtn();

// Load app data
updateSidebarProjects(); // Enables project switching too

// Create Modals
const addModal = new AddModal('add-modal-toggle', 'add-modal');
const taskModal = new TaskModal('task-modal-toggle', 'task-modal');
const projectModal = new ProjectModal('project-modal-toggle', 'project-modal');

// Set home project view
switchProject(document.querySelector('.home'));
