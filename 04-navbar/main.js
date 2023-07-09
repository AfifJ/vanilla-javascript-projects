const navBtn = document.querySelector('.nav-btn');
const navContent = document.querySelector('.nav-content');

navBtn.addEventListener('click', () => {
  navContent.classList.toggle('show');
  navBtn.classList.toggle('opened');
})