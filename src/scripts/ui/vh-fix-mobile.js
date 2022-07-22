function setVhUnitVariable() {
  // Get viewport height and multiple it by 1% to get a value for a vh unit
  const vh = window.innerHeight * 0.01;

  // Set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function fixVhOnMobile() {
  window.addEventListener('resize', setVhUnitVariable);
  screen.orientation.addEventListener('change', setVhUnitVariable);
}

export default setVhUnitVariable;
