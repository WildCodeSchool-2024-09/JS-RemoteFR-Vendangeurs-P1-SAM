/*DARKMODE*/

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
	document.body.classList.add("darkmode");
	localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
	document.body.classList.remove("darkmode");
	localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
	darkmode = localStorage.getItem("darkmode");
	darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

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

/*CLICK CARDS*/
const cardNodeList = document.querySelectorAll(".flip-card-container");
// const buttonResetCard = document.querySelector(".reset-button");
const buttonsResetThisCard = document.querySelectorAll(".reset-this-card");

cardNodeList.forEach((cards, thisCard) => {
	const firstChildCard = cards.children[0];
	const secondChildCard = cards.children[1];

	firstChildCard.addEventListener("click", () => {
		firstChildCard.classList.add("active-front");
		secondChildCard.classList.add("active-back");
	});
	buttonsResetThisCard[thisCard].addEventListener("click", () => {
		firstChildCard.classList.remove("active-front");
		secondChildCard.classList.remove("active-back");
	});
});

// buttonResetCard.addEventListener("click", () => {
// 	firstChildCard.classList.remove("active-front");
// 	secondChildCard.classList.remove("active-back");
// });

const wrapper = document.querySelector(".cards-wrapper");

function displayCards () {
    wildersList.forEach((wilder) => {
        wrapper.appendChild(createCard(wilder))
    });
}

displayCards;

// wildersList.forEach((wilder) => {
//    wilder.skills.forEach((skill) => {
//       console.log(`<li><i class="${skill}"></i></li>`);
//    });
// });