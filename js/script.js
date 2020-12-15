const toggle = document.getElementById('toggle');
const menu = document.getElementById('menu');
const overlay = document.querySelector('.overlay');

toggle.addEventListener('click', () => {
	menu.classList.toggle('show');
	overlay.classList.toggle('show');
});
