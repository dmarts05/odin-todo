import { Project } from './project';

function getProjectName() {
  return document.getElementById('project-name').value;
}

function getProjectColor() {
  return document.getElementById('project-color').value;
}

function getCreatedProject() {
  return new Project(getProjectName(), getProjectColor());
}

export default getCreatedProject;
