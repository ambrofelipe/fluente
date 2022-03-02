app.handleGallery = {

	init: function() {

		const gallery = document.querySelector(".gallery");

		if(gallery !== null) {

			const masonry = Macy({
				container: ".gallery__list",
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

			const photos = gallery.querySelectorAll(".gallery__item");

			photos.forEach(photo => {
				photo.addEventListener("mouseover", function () {
					this.classList.add("gallery__item--hover");

					const siblings = gallery.querySelectorAll("li:not(.gallery__item--hover");
					siblings.forEach(sibling =>  sibling.classList.add("gallery__item--out"));

					// Listen for the cursor coordinates
					// Pan the image
					this.addEventListener("mousemove", function (e) {
						const img = this.querySelector("img");
						const originX = ((e.clientX - this.getBoundingClientRect().left) / this.offsetWidth) * 100;
						const originY = ((e.clientY - this.getBoundingClientRect().top) / this.offsetHeight) * 100;

						img.style.transformOrigin = originX + "% " + originY + "%";
					});

					this.addEventListener("mouseout", function () {
						this.classList.remove("gallery__item--hover");

						const siblings = gallery.querySelectorAll("li:not(.gallery__item--hover");
						siblings.forEach(sibling => sibling.classList.remove("gallery__item--out"));
					});
				});
			});

		}

	}

}