// GALLERY IN INDEX
// window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

// var myCarousel = document.querySelector("#galeria");
// var carousel = new bootstrap.Carousel(myCarousel);

// COUNT-UP IN INDEX
let contadorClass = document.getElementsByClassName("conta").length;
if (contadorClass > 0) {
	var a = 0;

	$(function () {
		$(window).on("scroll", function () {
			var doTopo = $(".info").offset().top - window.innerHeight;
			if (a == 0 && $(window).scrollTop() > doTopo) {
				$(".conta").each(function () {
					var $this = $(this),
						contaAte = $this.attr("data-count");
					$({
						contaDe: $this.text(),
					}).animate(
						{
							contaDe: contaAte,
						},

						{
							duration: 3000,
							easing: "swing",
							step: function () {
								$this.text(Math.floor(this.contaDe));
							},
							complete: function () {
								$this.text(this.contaDe);
							},
						}
					);
				});
				a = 1;
			}
		});
	});
}

// PARTICLES EFFECT IN PORTFOLIO
let particlesCanvas = document.getElementsByClassName("main-portfolio").length;
if (particlesCanvas > 0) {
	particlesJS.load("particles-js", "js/particles.json", function () {
		console.log("callback - particles.js config loaded");
	});
}

// TEMA

// $(function () {
// 	$("#mode-button").onclick = () => {
// 		if (body.classList.contains("dark-theme")) {
// 			console.log("works until here");
// 			body.classList.setAttribute("class", "light-theme");
// 			$("#mode-button").text("Modo noturno");
// 			localStorage.setItem("userMode", "light-theme");
// 		} else {
// 			body.classList.setAttribute("class", "dark-theme");
// 			$("#mode-button").text("Modo diurno");
// 			localStorage.setItem("userMode", "dark-theme");
// 		}
// 	};
// });
