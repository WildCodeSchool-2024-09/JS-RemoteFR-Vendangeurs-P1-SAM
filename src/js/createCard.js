function createCard({
	img,
	firstname,
	lastname,
	desc,
	skills,
	email,
	github,
	linkedin,
}) {
	const card = document.createElement("article");
	card.classList.add("flip-card-container");
	card.innerHTML = `
						<div class="card-front">
							<figure>
								<img src="${img}" alt="Portrait de ${firstname} ${lastname}" />
								<figcaption>${firstname} ${lastname}</figcaption>
							</figure>
						</div>

						<div class="card-back">
							<div class="card-btn">
								<button class="reset-this-card" aria-label="Fermer cette carte">x</button>
							</div>

							<div class="card-content">
								<h3>${firstname} ${lastname}</h3>
								<p>${desc}</p>
							</div>

							<div class="skills">
								<ul>
									<li><i class="${skills}"></i></li>
									<li><i class=""></i></li>
									<li><i class=""></i></li>
								</ul>
							</div>

							<div class="contact">
								<i class="fa-solid fa-envelope"></i>
								<p>${email}</p>
							</div>

							<div class="social-links" role="navigation">
								<a href="${github}" target="_blank"><i class="fa-brands fa-github"></i></a>
								<a href="${linkedin}" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
							</div>
						</div>
               `;

	return card;
}
