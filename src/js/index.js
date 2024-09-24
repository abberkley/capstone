const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function () {
	this.classList.toggle('close');
	menu.classList.toggle('reveal');
});
