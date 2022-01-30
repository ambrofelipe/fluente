app.scrollTestimonials = {

	init:function() {

		const testimonials = document.querySelector(".testimonials ul");

		if(testimonials !== null) {

			// ---
			// Attach animation to scroll
			// ---

			const slides = testimonials.querySelectorAll(".testimonials__slide");
		
			slides.forEach((slide) => {

				// Create ScrollTimeline
				const scrollTimeline = new ScrollTimeline({
					scrollSource: testimonials,
					timeRange: 1,
					orientation: 'inline',
					fill: 'both',
					scrollOffsets: [
						{ target: slide, edge: 'end', threshold: 0 },
						{ target: slide, edge: 'start', threshold: 0 },
					],
				});

				// Animate <li>
				new Animation(
					new KeyframeEffect(
						slide,
						{
							zIndex: [
								"100", 
								"200", 
								"300", 
								"200", 
								"100"
							]
						},
						{ duration: 1, fill: "both" }
					),
					scrollTimeline
				).play();

				// Animate nested <div>
				new Animation(
					new KeyframeEffect(
						slide.querySelector("div"),
						{
							transform: [
								'scale(0.85)', 
								'scale(0.85)', 
								'scale(1)', 
								'scale(0.85)', 
								'scale(0.85)'
							],
							opacity: [
								"0", 
								"0.2", 
								"1", 
								"0.2", 
								"0"
							],
							boxShadow: [
								"rgba(30, 73, 123, 0.16) 0px 10px 20px",
								"rgba(30, 73, 123, 0.20) 0px 10px 20px",
								"rgba(30, 73, 123, 0.16) 0px 10px 20px",
							]
						},
						{ duration: 1, fill: "both" }
					),
					scrollTimeline
				).play();
			});

			// ---
			// END - Attach animation to scroll
			// ---

			// ---
			// Starts slider on the main testimonial
			// ---

			// Main slide
			const main = testimonials.querySelector(".testimonials__slide--main");

			// ScrollIntoView options
			const SIVoptions = {
				behavior: "smooth",
				block: "nearest",
				inline: "center"
			};

			// Scroll
			main.scrollIntoView(SIVoptions);
			window.scrollTo(0, 0);

			// ---
			// END - Starts slider on the main testimonial
			// ---
			
			// ---
			// Slides when clicking on dots
			// ---

			// Slider dots
			const nav = document.querySelector(".testimonials__dots");
			const dots = nav.querySelectorAll(".testimonials__dot");

			dots.forEach((dot) => {
				dot.addEventListener("click", function() {
					// Dot number
					const number = parseInt(dot.getAttribute("data-index"));

					// Slide to scroll to
					const target = testimonials.querySelector(`[data-index="${number}"]`);
					
					// Off you go
					target.scrollIntoView(SIVoptions);
				});
			});

			// ---
			// END - Slides when clicking on dots
			// ---

			// ---
			// Updates dots when swiping cards
			// ---

			const desktop = "(min-width: 769px)";

			function flip(entries, observer) {
				entries.forEach((entry) => {					
					const active = nav.querySelector(".testimonials__dot--active");
					const target = entry.target.getAttribute("data-index");
					const dot = nav.querySelector(`[data-index="${target}"`);

					if(entry.isIntersecting) {
						active.classList.remove("testimonials__dot--active");
						dot.classList.add("testimonials__dot--active");
					}
				});
			}

			let IOoptions = {
				root: testimonials,
				rootMargin: "0px -5%",
				threshold: 1
			}

			if(window.matchMedia(desktop).matches) {
				IOoptions.rootMargin = "0px -25%";
			}

			const ob = new IntersectionObserver(flip, IOoptions);			

			slides.forEach((slide) => {
				ob.observe(slide);
			});

			// ---
			// END - Updates dots when swiping cards
			// ---

		}
	}
}