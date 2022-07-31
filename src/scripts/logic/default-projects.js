import { Project } from './project';
import { addProject } from './project-manager';

const inbox = new Project('INBOX', '#f6f6f6');
inbox.id = 'inbox';

const today = new Project('TODAY', '#f6f6f6');
today.canAddTasks = false;

const all = new Project('ALL', '#f6f6f6');
all.canAddTasks = false;

const defaultProjects = [inbox, today, all];

function addDefaultProjects() {
  defaultProjects.forEach((project) => addProject(project));
}

export default addDefaultProjects;
