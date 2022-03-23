app.checkRecaptcha = async () => {
	const apiURL = "//api.fluente.me/recaptcha";

	const token = await app.getToken();

	const data = {
		"token": token
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

app.getToken = () => {
	return new Promise(resolve => {
		grecaptcha.ready(function() {
			const token = grecaptcha.execute('6LepYdcZAAAAAAEQ3yx9_xIFc3ox41h-EWs6UPT0', {action: 'submit'});

			resolve(token);
		});
	});
}