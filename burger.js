/*BURGER*/

const boutonBurger = document.querySelector(".boutonBurger");
const menuBurger = document.querySelector(".menuBurger");

const span1 = document.querySelector(".span1");
const span2 = document.querySelector(".span2");
const span3 = document.querySelector(".span3");

const element = document.querySelectorAll(".element");

function toggleMenu() {
	menuBurger.classList.toggle("menuBurgerOpen");
	span1.classList.toggle("span1Open");
	span2.classList.toggle("span2Open");
	span3.classList.toggle("span3Open");
}

boutonBurger.addEventListener("click", toggleMenu);

for (let i = 0; i < element.length; i++) {
	element[i].addEventListener("click", toggleMenu);
}
