const accordions = document.querySelectorAll('[data-accordion]');

const closeOpenedAccordions = () => {
  accordions.forEach((accordion) => {
    accordion.classList.remove('is-active');
  });
};

const checkOnOpenedAccordion = () => {
  accordions.forEach((accordion) => {
    accordion.classList.remove('is-active');
  });
};

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('is-active')) {
      accordion.classList.remove('is-active');
    } else {
      checkOnOpenedAccordion();
      accordion.classList.add('is-active');
    }
  });
});

export {closeOpenedAccordions};
