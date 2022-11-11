// const consultForm = document.getElementById('scroll');
const scrollButton = document.getElementById('scroll');

const initScrollToForm = () => {
  if (scrollButton) {
    scrollButton.addEventListener('click', function (event) {
      event.preventDefault();
      const blockID = scrollButton.getAttribute('href');
      blockID.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });

  }
};
// const initScrollToForm = () => {
//   const scrollTo = ()=>{
//     const step = 2;
//     if (consultForm.offsetTop < window.pageYOffset + step) {
//       document.documentElement.scrollTo(0, consultForm.offsetTop);
//     } else {
//       document.documentElement.scrollTo(0, window.pageYOffset + step);
//     }
//     if (consultForm.offsetTop !== window.pageYOffset) {
//       requestAnimationFrame(scrollTo);
//     }
//   };

//   scrollButton.addEventListener('click', scrollTo);
// };

export {initScrollToForm};
