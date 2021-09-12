// CSS bundle
import "../scss/main.scss";

// Favicon assets
import "../ico/e192.png";
import "../ico/e128.png";
import "../ico/e64.png";
import "../ico/e32.png";
import "../ico/e16.png";

// Web manifest asset
import "../js/manifest.json";

// Plugins
import { CountUp } from "countup.js";

import "./particles.json";
import "particles.js";

import Typewriter from "typewriter-effect/dist/core";
import Macy from "macy";

//
// GLOBAL
// ACTIVE MENU OPTION
//
//

const path = window.location.pathname;

// Get all nav links
const btns = document.querySelectorAll("header nav a");

// Loop through the links and add the active class to the current/clicked button
btns.forEach((btn) => {
	btn.addEventListener("click", () => {
		const current = document.getElementsByClassName("active");

		// There's already an active class
		if (current.length > 0) {
			current[0].classList.remove("active");
		}

		// Add the active class to the clicked button
		this.classList.add("active");
	});
});

if (path.indexOf("index") > -1 || path === "/") {
	//
	// INDEX
	// MACY - MASONRY GALLERY
	//
	//

	const masonry = Macy({
		container: "#galeria",
		trueOrder: false,
		waitForImages: false,
		useOwnImageLoader: false,
		debug: true,
		mobileFirst: true,
		columns: 1,
		margin: {
			y: 16,
			x: "2%",
		},
		breakAt: {
			1200: 6,
			940: 5,
			520: 3,
			400: 2,
		},
	});

	//
	// INDEX
	// ZOOM / PAN / SATURATION EFFECT OF PHOTOS
	//
	//

	const galleryContainer = document.querySelector("#galeria");
	const photoContainer = galleryContainer.querySelectorAll("div");

	// Loop through the photos and listen for mouse hover on each
	// Zoom into it, and desaturate all siblings
	photoContainer.forEach(function (photo) {
		photo.addEventListener("mouseover", function () {
			// Add class so we can select its siblings later
			this.classList.add("mouseover");

			// Zoom in
			const img = this.querySelector("img");
			img.style.transform = "scale(1.5)";
			img.style.transition = "all 400ms ease";

			// Desaturate
			const siblings = galleryContainer.querySelectorAll("div:not(.mouseover) > img");
			siblings.forEach(function (sibling) {
				sibling.style.filter = "saturate(0) opacity(70%)";
				sibling.style.transition = "all 400ms ease";
			});

			// Listen for the cursor coordinates
			// Pan the image
			this.addEventListener("mousemove", function (e) {
				const img = this.querySelector("img");
				const originX = ((e.clientX - this.getBoundingClientRect().left) / this.offsetWidth) * 100;
				const originY = ((e.clientY - this.getBoundingClientRect().top) / this.offsetHeight) * 100;

				img.style.transformOrigin = originX + "% " + originY + "%";
			});

			// Listen for the mouse out of the photo
			// Zoom out of it and resaturate all siblings
			this.addEventListener("mouseout", function () {
				const img = this.querySelector("img");
				// Zoom out
				img.style.transform = "scale(1.0)";
				img.style.transition = "all 400ms ease";

				// Resaturate
				const siblings = galleryContainer.querySelectorAll("div:not(.mouseover) > img");
				siblings.forEach(function (sibling) {
					sibling.style.filter = "saturate(1) opacity(100%)";
					sibling.style.transition = "all 400ms ease";
				});

				// Remove class we added before
				this.classList.remove("mouseover");
			});
		});
	});

	//
	// INDEX
	// COUNTUP - BIO
	//
	//
	let target;
	let jaContou = false;

	// Define o observador
	function createObserver() {
		let observer;

		const options = {
			root: null, // null observa com relação ao viewport
			rootMargin: "-10%", // espera o contador passar 100px da margem inferior
			threshold: 1.0, // inicia quando estiver 100% visível
		};

		observer = new IntersectionObserver(iniciaContador, options);
		observer.observe(target);
	}

	// Aguarda a página carregar para definir o alvo e iniciar o observador
	window.addEventListener(
		"load",
		() => {
			target = document.querySelector(".contador");

			createObserver();
		},
		false
	);

	// Define o callback chamado pelo observador
	function iniciaContador(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting && !jaContou) {
				const options = {
					duration: 4,
				};
				const experiencia = new CountUp("anosExperiencia", 6, options);
				const alunos = new CountUp("numAlunos", 150, options);

				if (!experiencia.error && !alunos.error) {
					experiencia.start();
					alunos.start();
				} else {
					console.error(experiencia.error);
					console.error(alunos.error);
				}
				jaContou = true;
			}
		});
	}
} else if (path.indexOf("portfolio") > -1) {
	//
	// PORTFOLIO
	// PARTICLES - HERO
	//
	//
	// Inicia particles.js
	particlesJS.load("welcome-section", "js/particles.json");

	//
	// PORTFOLIO
	// TYPEWRITER - BIO
	//
	//
	const typePortfolio = document.querySelector("#typeHeader");

	const typewriter = new Typewriter(typePortfolio, {
		loop: false,
		delay: 75,
	});
	typewriter
		.pauseFor(2500)
		.typeString("I'm a web deveolper.")
		.pauseFor(900)
		.deleteChars(6)
		.pauseFor(400)
		.typeString("loper.")
		.pauseFor(1500)
		.deleteChars(19)
		.pauseFor(900)
		.typeString(" make the internet more fun")
		.pauseFor(400)
		.typeString(" and accessible.")
		.pauseFor(1000)
		.start();

	//
	// PORTFOLIO
	// MACY - MASONRY GALLERY
	//
	//
	const projects = Macy({
		container: "#galeria",
		trueOrder: false,
		waitForImages: false,
		useOwnImageLoader: false,
		debug: true,
		mobileFirst: true,
		columns: 1,
		margin: {
			y: 16,
			x: "2%",
		},
		breakAt: {
			1200: 6,
			940: 5,
			520: 3,
			400: 2,
		},
	});
}
