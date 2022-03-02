app.countUp = {

	init: function() {

		const counters = document.querySelectorAll(".bio__countup");

		if(counters.length > 0) {
			
			// Intersection Observer options
			const IOoptions = {
				root: null,
				rootMargin: "0px 0px -200px 0px",
				threshold: 1.0
			};

			// CountUp options (pun not intended)
			const CUoptions =  {
				duration: 4,
				separator: ".",
			};

			const startCounter = (entries, observer) => {
				entries.forEach(entry => {
					if(entry.isIntersecting) {
						const id = entry.target.id;
						const countTo = entry.target.dataset.count;

						const countIt = new countUp.CountUp(id, countTo, CUoptions);

						if(!countIt.error) {
							countIt.start();
						} else {
							console.error(countIt.error);
						}

						ob.unobserve(entry.target);
					}
				});
			}

			const ob = new IntersectionObserver(startCounter, IOoptions);

			counters.forEach(counter => {
				ob.observe(counter);
			});
		}
	}
}