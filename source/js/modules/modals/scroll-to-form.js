const consultForm = document.getElementById('scroll');
const scrollButton = document.getElementById('scroll');

const scrollButtonClick = () => {
  const target = consultForm;
  const elementPosistion = target.getBoundingClientRect().top;
  const offSetPosition = elementPosistion;

  window.scrollBy({
    top: offSetPosition,
    behavior: 'smooth',
  });
};


scrollButton.addEventListener('click', scrollButtonClick);

export {scrollButtonClick};
