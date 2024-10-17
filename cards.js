/*CARDS*/
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