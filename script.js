const burger = document.getElementById('bur');
const ul = document.querySelector('.header__content');

burger.addEventListener('click', () => {
	burger.classList.toggle('show-x');
	ul.classList.toggle('show');
});