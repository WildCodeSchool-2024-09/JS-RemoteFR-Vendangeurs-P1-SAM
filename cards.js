// CREATE CARD
function createCard({
	img,
	firstname,
	lastname,
	desc,
	email,
	github,
	linkedin,
}) {
	const defaultImg = "./public/img/img-wilders/default-user.png";
	const imgSrc = img ? img : defaultImg;

	const card = document.createElement("article");
	card.classList.add("flip-card-container");

	card.innerHTML = `
			<div class="card-front">
				<figure>
					<img src="${imgSrc}" alt="Portrait de ${firstname} ${lastname}" />
					<figcaption>${firstname} ${lastname}</figcaption>
				</figure>
			</div>
			
			<div class="card-back">
			<div class="card-btn">
				<button class="reset-this-card" aria-label="Fermer cette carte">
				<i class="fa-solid fa-xmark"></i>
				</button>
			</div>
			
			<div class="card-content">
				<h3>${firstname} ${lastname}</h3>
				<p>${desc}</p>
			</div>
			
			<div class="card-skills">
				<ul class="skill-list">
					
				</ul>
			</div>
			
			${
				email
					? `
				<div class="card-contact">
					<i class="fa-solid fa-envelope"></i>
					<a href="mailto:${email}">${email}</a>
				</div>`
					: ""
			}
			
			<div class="card-social-links" role="navigation">
				${
					github
						? `<a href="${github}" target="_blank">
							<i class="fa-brands fa-github"></i>
						</a>`
						: ""
				} 
				${
					linkedin
						? `<a href="${linkedin}" target="_blank">
							<i class="fa-brands fa-linkedin"></i>
						</a>`
						: ""
				}
			</div>
	`;

	return card;
}

// ADD CARDS
const wrapper = document.querySelector(".cards-wrapper");

for (const wilder of wildersList) {
	const card = createCard(wilder);

	if (wilder.skills.length > 0) {
		const skillList = card.querySelector(".skill-list");

		for (const skill of wilder.skills) {
			for (const skillIcon in skill) {
				const iconClass = skill[skillIcon];

				const li = document.createElement("li");
				li.innerHTML = `<i class="${iconClass}"></i>`;
				skillList.appendChild(li);
			}
		}
	}
	wrapper.appendChild(card);
}

// CLICK CARDS
const cardNodeList = document.querySelectorAll(".flip-card-container");
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
	// BUTTON RESET CARDS
	const buttonResetCard = document.querySelector(".reset-button");
	buttonResetCard.addEventListener("click", () => {
		firstChildCard.classList.remove("active-front");
		secondChildCard.classList.remove("active-back");
	});
});
