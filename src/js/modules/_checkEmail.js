app.checkEmail = async (email) => {
	const apiURL = "//api.fluente.me/checkEmail";
	
	const data = {
		"email": email
	}

	const options = {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json"
		},
		redirect: "follow",
		referrerPolicy: "no-referrer",
		body: JSON.stringify(data),
	};

	const response = await fetch(apiURL, options);

	return response.json();
}