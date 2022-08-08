import { addProject, getProjects } from '../logic/project-manager';
import { addDefaultProjects } from '../logic/default-projects';
import { Project } from '../logic/project';
import { Task } from '../logic/task';

function loadProjectsFromStorage() {
  const loadedProjects = JSON.parse(localStorage.getItem('projects'));

  if (loadedProjects !== null) {
    loadedProjects.forEach((loadedProject) => {
      const project = new Project(loadedProject._name, loadedProject._color);
      project.id = loadedProject.id;
      project.canAddTasks = loadedProject.canAddTasks;
      project.sortMethod = loadedProject.sortMethod;

      const projectTasks = loadedProject.tasks;
      projectTasks.forEach((projectTask) => {
        const task = new Task(
          projectTask._name,
          new Date(projectTask._dueDate),
          projectTask._priority
        );
        task.id = projectTask.id;
        task.checked = projectTask.checked;

        project.addTask(task);
      });

      addProject(project);
    });
  } else {
    addDefaultProjects();
  }
}

function saveProjectsToStorage() {
  localStorage.setItem('projects', JSON.stringify(getProjects()));
}

export { loadProjectsFromStorage, saveProjectsToStorage };
