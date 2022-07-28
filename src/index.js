import './styles/index.scss';
import fixVhOnMobile from './scripts/ui/vh-fix-mobile';
import {
  enableSidebarToggling,
  showSidebarAtWidth,
} from './scripts/ui/sidebar-toggle.js';
import enableProjectSorting from './scripts/ui/sort-projects';
import enableTaskSorting from './scripts/ui/sort-tasks';
import enableCompactTextToggling from './scripts/ui/toggle-compact-text';
import { AddModal } from './scripts/ui/add-modal';
import { TaskModal } from './scripts/ui/task-modal';
import { ProjectModal } from './scripts/ui/project-modal';

// Enable app basic functionality
fixVhOnMobile();
enableSidebarToggling();
showSidebarAtWidth(700);
enableProjectSorting();
enableTaskSorting();
enableCompactTextToggling(700, ['project-view__task__task-name']);

// Create Modals
const addModal = new AddModal('add-modal-toggle', 'add-modal');
const taskModal = new TaskModal('task-modal-toggle', 'task-modal');
const projectModal = new ProjectModal('project-modal-toggle', 'project-modal');
