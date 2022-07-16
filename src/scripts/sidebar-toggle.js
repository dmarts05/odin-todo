function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  const projectView = document.querySelector('.project-view');
  sidebar.classList.toggle('sidebar-active');
  projectView.classList.toggle('sidebar-active');
}

function enableSidebarToggling() {
  const sidebarToggle = document.getElementById('sidebar-toggle');
  sidebarToggle.addEventListener('click', toggleSidebar);
}

export default enableSidebarToggling;
