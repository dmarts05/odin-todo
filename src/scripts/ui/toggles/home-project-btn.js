import { switchProject } from './project-switching';

// This button will switch to the project view of the project that contains 'home' class
function enableHomeProjectBtn(autoSwitchWidth) {
  const homeBtn = document.querySelector('.home-btn');
  homeBtn.addEventListener('click', () => {
    const homeProject = document.querySelector('.home');
    switchProject(homeProject);

    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (width <= autoSwitchWidth) {
      if (document.querySelector('.sidebar--active')) {
        document.querySelector('.sidebar-toggle').click();
      }
    }
  });
}

export default enableHomeProjectBtn;
