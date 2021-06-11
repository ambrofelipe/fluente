import "../sass/main.scss";

// Plugins

import { CountUp } from "countup.js";

// Executa somente na página index - to-do: code splitting
let indexPage = document.querySelector(".teams");
if (indexPage) {
	let target;

	// Aguarda a página carregar para definir o alvo e iniciar o observador
	window.addEventListener(
		"load",
		(event) => {
			target = document.querySelector(".contador");

			createObserver();
		},
		false
	);

	// Define o observador
	function createObserver() {
		let observer;

		let options = {
			root: null, // null observa com relação ao viewport
			rootMargin: "-100px", // espera o contador passar 100px da margem inferior
			threshold: 1.0, // inicia quando estiver 100% visível
		};

		observer = new IntersectionObserver(iniciaContador, options);
		observer.observe(target);
	}

	// Define o callback chamado pelo observador
	function iniciaContador(entries, observer) {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				let options = {
					duration: 4,
				};
				let experiencia = new CountUp("anosExperiencia", 6, options);
				let alunos = new CountUp("numAlunos", 150, options);

				if (!experiencia.error && !alunos.error) {
					experiencia.start();
					alunos.start();
				} else {
					console.error(experiencia.error);
					console.error(alunos.error);
				}
			}
		});
	}
}

import Data from "./particles.json";
import "particles.js";

import Typewriter from "typewriter-effect/dist/core";

// Executa somente na página portfolio - to-do: code splitting
let portfolioPage = document.getElementById("main-portfolio");
if (portfolioPage) {
	// PARTICLES EFFECT IN PORTFOLIO
	// Inicia particles.js
	particlesJS.load("main-portfolio", "js/particles.json");

	// TYPEWRITER EFFECT IN PORTFOLIO
	let typePortfolio = document.getElementById("typeHeader");

	var typewriter = new Typewriter(typePortfolio, {
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
}
