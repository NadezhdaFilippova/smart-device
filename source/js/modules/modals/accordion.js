const accordions = document.querySelectorAll('[data-accordion]');

const closeOpenedAccordions = () => {
  document.querySelector('.footer-nav__wrapper').classList.remove('accordion--open');
  document.querySelector('.footer-contacts').classList.remove('accordion--open');
};

const checkOnOpenedAccordion = () => {
  accordions.forEach((accordion) => {
    accordion.classList.remove('accordion--open');
  });
};

accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => {
    if (accordion.classList.contains('accordion--open')) {
      accordion.classList.remove('accordion--open');
    } else {
      checkOnOpenedAccordion();
      accordion.classList.add('accordion--open');
    }
  });
});

export {closeOpenedAccordions};
