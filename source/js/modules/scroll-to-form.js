const consultForm = document.querySelector('[data-form]');
const scrollButton = document.querySelector('[data-scroll-to-form]');

const initScrollToForm = () => {
  if (consultForm) {
    scrollButton.addEventListener('click', (event) => {
      event.preventDefault();
      consultForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });

  }
};

export {initScrollToForm};
