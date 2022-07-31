import { switchProject } from './project-switching';

// This button will switch to the project view of the project that contains 'home' class
function enableHomeProjectBtn() {
  const homeBtn = document.querySelector('.home-btn');
  homeBtn.addEventListener('click', () => {
    const homeProject = document.querySelector('.home');
    switchProject(homeProject);
  });
}

export default enableHomeProjectBtn;
