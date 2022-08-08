import { Project } from './project';
import { getProject, getProjects, addProject } from './project-manager';
import { isToday } from 'date-fns';

const defaultProjects = [];

const inbox = new Project('INBOX', '#f6f6f6');
inbox.id = 'inbox';
defaultProjects.push(inbox);

const today = new Project('TODAY', '#f6f6f6');
today.id = 'today';
today.canAddTasks = false;
defaultProjects.push(today);

const all = new Project('ALL', '#f6f6f6');
all.id = 'all';
all.canAddTasks = false;
defaultProjects.push(all);

function updateTodayProjectTasks() {
  const todayProject = getProject('today');
  const projects = getProjects();

  const todayProjectTasks = [];

  todayProject.tasks = [];

  projects.forEach((project) => {
    if (project.canAddTasks) {
      project.tasks.forEach((task) => {
        if (isToday(task.dueDate)) {
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

  allProject.tasks = [];

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
  defaultProjects.forEach((project) => addProject(project));
}

function getDefaultProjectsIds() {
  return defaultProjects.map((defaultProject) => defaultProject.id);
}

export { addDefaultProjects, updateDefaultProjects, getDefaultProjectsIds };
