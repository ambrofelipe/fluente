"use strict";

// Init namespace
var app = {};

$ = jQuery;

// Modules
//=require modules/*.js

async function checkEmail(email = "") {
	const encodedEmail = encodeURIComponent(email);
	const checkURL = `https://mailcheck.p.rapidapi.com/?domain=${encodedEmail}`

	const options = {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "mailcheck.p.rapidapi.com",
			"x-rapidapi-key": "852f534a0fmshb6ac09f8f350c4cp1a44eejsn675f9cc76187"
		},
	};

	const response = await fetch(checkURL, options);

	if (response.status === 200) {
		return response.json();
	} else {
		console.error(response.status);
	}
}

async function sendMail(url = "", data = {}) {
	const options = {
		method: "POST",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(data),
	};

	const response = await fetch(url, options);

	return response.json();
}

$(function() {
	app.drySplash.init();
	app.flipBurger.init();
	app.handleGallery.init();
	app.countUp.init();
	app.subscribeForm.init();
	app.handleDialog.init();
});

