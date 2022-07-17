const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const projectView = document.querySelector('.project-view');

function toggleSidebar() {
  sidebar.classList.toggle('sidebar-active');
  projectView.classList.toggle('sidebar-active');

  changeSidebarToggleIcon();
}

function changeSidebarToggleIcon() {
  sidebarToggle.classList.toggle('fa-angles-left');
  sidebarToggle.classList.toggle('fa-angles-right');
}

function enableSidebarToggling() {
  sidebarToggle.addEventListener('click', toggleSidebar);

  window.addEventListener('load', () => {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (width > 700 && !sidebar.classList.contains('sidebar-active')) {
      sidebarToggle.click();
    }
  });
}

export default enableSidebarToggling;
