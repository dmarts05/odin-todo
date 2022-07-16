function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const projectView = document.querySelector('.project-view');

  sidebar.classList.toggle('sidebar-active');
  projectView.classList.toggle('sidebar-active');

  changeSidebarToggleIcon();
}

function changeSidebarToggleIcon() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  sidebarToggle.classList.toggle('fa-angles-left');
  sidebarToggle.classList.toggle('fa-angles-right');
}

function enableSidebarToggling() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  sidebarToggle.addEventListener('click', toggleSidebar);
}

export default enableSidebarToggling;
