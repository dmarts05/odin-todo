const sidebarToggle = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const projectView = document.querySelector('.project-view');

function toggleSidebar() {
  sidebar.classList.toggle('sidebar--active');
  projectView.classList.toggle('project-view--active');
}

function changeSidebarToggleIcon() {
  sidebarToggle.classList.toggle('fa-angles-left');
  sidebarToggle.classList.toggle('fa-angles-right');
}

function showSidebarAtWidth(showWidth) {
  window.addEventListener('resize', () => {
    const width = window.innerWidth > 0 ? window.innerWidth : screen.width;

    if (width > showWidth && !sidebar.classList.contains('sidebar--active')) {
      sidebarToggle.click();
    } else if (
      width <= showWidth &&
      sidebar.classList.contains('sidebar--active')
    ) {
      sidebarToggle.click();
    }
  });
}

function enableSidebarToggling() {
  sidebarToggle.addEventListener('click', () => {
    toggleSidebar();
    changeSidebarToggleIcon();
  });
}

function disableSidebarToggling() {
  sidebarToggle.removeEventListener('click', () => {
    toggleSidebar();
    changeSidebarToggleIcon();
  });
}

export { enableSidebarToggling, disableSidebarToggling, showSidebarAtWidth };
