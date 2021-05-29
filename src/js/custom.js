window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");

var myCarousel = document.querySelector("#galeria");
var carousel = new bootstrap.Carousel(myCarousel);

// COUNTER

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
