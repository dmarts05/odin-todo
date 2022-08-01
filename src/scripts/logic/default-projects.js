import { Project } from './project';
import { getProject, getProjects, addProject } from './project-manager';
import getToday from '../utils/today';

function updateTodayProjectTasks() {
  const todayProject = getProject('today');
  const projects = getProjects();

  const todayProjectTasks = [];

  projects.forEach((project) => {
    if (project.canAddTasks) {
      project.tasks.forEach((task) => {
        if (task.dueDate === getToday()) {
          todayProjectTasks.push(task);
        }
      });
    }
  });

  todayProjectTasks.forEach((task) => todayProject.addTask(task));
}

function updateAllProjectTasks() {
  const allProject = getProject('all');
  const projects = getProjects();

  const allProjectTasks = [];

  projects.forEach((project) => {
    if (project.canAddTasks) {
      Array.prototype.push.apply(allProjectTasks, project.tasks);
    }
  });

  allProjectTasks.forEach((task) => allProject.addTask(task));
}

function updateDefaultProjects() {
  updateTodayProjectTasks();
  updateAllProjectTasks();
}

function addDefaultProjects() {
  const inbox = new Project('INBOX', '#f6f6f6');
  inbox.id = 'inbox';

  const today = new Project('TODAY', '#f6f6f6');
  today.id = 'today';
  today.canAddTasks = false;

  const all = new Project('ALL', '#f6f6f6');
  all.id = 'all';
  all.canAddTasks = false;

  const defaultProjects = [inbox, today, all];

  defaultProjects.forEach((project) => addProject(project));
}

export { addDefaultProjects, updateDefaultProjects };
