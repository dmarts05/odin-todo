function getSortMethod() {
  return document.querySelector(
    'input[type="radio"][name="sort-method"]:checked'
  ).value;
}

export { getSortMethod };
