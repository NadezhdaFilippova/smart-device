const spoilerButton = document.querySelector('[data-toggle-spoiler]');
const spoilerContent = document.querySelector('[data-spoiler]');
const spoilerContentMobile = document.querySelector('[data-spoiler-mobile]');

const initSpoiler = () => {
  if (spoilerContent) {
  const onSpoilerButtonClick = () => {
    spoilerContentMobile.classList.toggle('is-shown');
    spoilerContent.classList.toggle('is-shown');
    if (spoilerContent.classList.contains('is-shown')) {
      spoilerButton.textContent = 'Скрыть';
    } else {
      spoilerButton.textContent = 'Подробнее';
    }
  };

  spoilerButton.addEventListener('click', onSpoilerButtonClick);
}
};

export {initSpoiler};
