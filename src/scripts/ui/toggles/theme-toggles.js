function setCurrentDeviceTheme() {
  const themeToggle = document.querySelector('.theme-toggle');

  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    themeToggle.classList.add('fa-sun');
    document.documentElement.classList.add('dark');
  } else {
    themeToggle.classList.add('fa-moon');
    document.documentElement.classList.add('light');
    document.querySelector('.header__logo').classList.add('light');
  }
}

function toggleTheme() {
  const themeToggle = document.querySelector('.theme-toggle');

  if (themeToggle.classList.contains('fa-sun')) {
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
  } else {
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
  }

  document.documentElement.classList.toggle('dark');
  document.documentElement.classList.toggle('light');
  document.querySelector('.header__logo').classList.toggle('light');
}

function enableThemeToggling() {
  const themeToggle = document.querySelector('.theme-toggle');

  setCurrentDeviceTheme();

  themeToggle.addEventListener('click', toggleTheme);
}

export default enableThemeToggling;
