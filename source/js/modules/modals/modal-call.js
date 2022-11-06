const openModalBtn = document.querySelector('.modal__open-btn');
const inputName = document.querySelector('[data-name-modal');

const onOpenModal = () => {
  inputName.focus();
};

openModalBtn.addEventListener('click', onOpenModal);


export {onOpenModal};
