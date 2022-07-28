function enableElementsCompactTextToggling(elements) {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('compact');
    });
  });
}

function enableCompactTextToggling(compactWidth, compactElementsClasses) {
  // Get every element that can be compacted
  const compactElements = compactElementsClasses.map((compactElementClass) =>
    Array.from(document.getElementsByClassName(`${compactElementClass}`))
  );

  const width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  const smallScreen = width <= compactWidth;

  window.addEventListener('DOMContentLoaded', () => {
    if (smallScreen) {
      compactElements.forEach((compactElementArr) => {
        enableElementsCompactTextToggling(compactElementArr);
      });
      document
        .querySelector('.add-modal-toggle')
        .addEventListener('click', () => {
          compactElements.forEach((compactElementArr) => {
            enableElementsCompactTextToggling(compactElementArr);
          });
        });
    } else {
      document
        .querySelector('.add-modal-toggle')
        .removeEventListener('click', () => {
          compactElements.forEach((compactElementArr) => {
            enableElementsCompactTextToggling(compactElementArr);
          });
        });
    }
  });

  window.addEventListener('resize', () => {
    if (smallScreen) {
      compactElements.forEach((compactElementArr) => {
        enableElementsCompactTextToggling(compactElementArr);
      });
      document
        .querySelector('.add-modal-toggle')
        .addEventListener('click', () => {
          compactElements.forEach((compactElementArr) => {
            enableElementsCompactTextToggling(compactElementArr);
          });
        });
    } else {
      document
        .querySelector('.add-modal-toggle')
        .removeEventListener('click', () => {
          compactElements.forEach((compactElementArr) => {
            enableElementsCompactTextToggling(compactElementArr);
          });
        });
    }
  });
}

export default enableCompactTextToggling;
