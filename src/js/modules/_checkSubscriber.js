app.checkSubscriber = {

	init: async () => {

		const path = window.location.pathname;

		if(path.indexOf("subscribe") !== -1) {
			const loading = document.querySelector(".loading");
			loading.classList.add("loading--visible");

			const getURL = new URLSearchParams(document.location.search);
			const token = getURL.get("token");

			if(!token) return window.location.replace("/");
			
			console.log("🚀 ~ file: _checkSubscriber.js ~ line 6 ~ app.checkSubscriber= ~ token", token)
			
			const response = await app.checkSubscriber.subscribe(token);

			// Populate content
			const heading = document.querySelector(".main h1");
			const message = document.querySelector(".main p");

			loading.classList.remove("loading--visible");

			heading.textContent = response.data.title;
			message.textContent = response.data.message;
		}
	
	},

	subscribe: async (token) => {
		const apiURL = "//api.fluente.me/subscribe?token=" + token;

		const response = await fetch(apiURL);

		return response.json();
	}
}