app.sendEmail = {

    init: function() {
        const form = document.querySelector(".subscribe__form");

		if(form !== null) {
			const fields = form.querySelectorAll("input");
			const submit = form.querySelector(".subscribe__button");
			const loading = form.querySelector(".loading");

			const name = form.querySelector("#name");
			const email = form.querySelector("#email");

			// Reset error on input focus
			fields.forEach(field => {
				field.addEventListener("focus", function () {
					const parent = this.parentNode;
					parent.classList.remove("error");
					parent.classList.add("focus");
				})
				field.addEventListener("blur", function () {
					const parent = this.parentNode;
					parent.classList.remove("error");
					parent.classList.add("focus");
				})
				field.addEventListener("focusout", function () {
					const parent = this.parentNode;
					if(field.value === "") {
						parent.classList.remove("focus");
						parent.classList.remove("filled");
					} else {
						parent.classList.add("filled");
					}
				})
			});

			// Checks fields on submit
			submit.addEventListener("click", async function (e) {
				e.preventDefault();
				loading.classList.add("loading--visible");
				submit.disabled = true;

				fields.forEach(function(field) {
					if(field.value !== "") {
						field.parentNode.classList.add("filled");
					}
				});

				if (name.value.trim().length === 0) {
					name.parentNode.className = "error";
				} else {
					name.parentNode.className = "success";
				}

				if (email.value.trim().length <= 5) {
					email.parentNode.className = "error";
				} else {
					const checkEmailResponse = await app.checkEmail(email.value);

					if (checkEmailResponse) {
						if (
							!checkEmailResponse.valid ||
							checkEmailResponse.block ||
							checkEmailResponse.disposable
						) {
							email.parentNode.className = "error";
						} else {
							email.parentNode.className = "success";
						}
					} else {
						email.parentNode.className = "success";
					}
				}

				const errors = form.querySelectorAll("label.error");

				const recaptcha = await app.checkRecaptcha();

				if (errors.length === 0 && recaptcha.score >= 0.5) {

					// SUBMIT FORM
					const subscriber = {
						"name": name.value,
						"email": email.value,
					};

					const subscribe = await app.sendEmail.send(subscriber);
                    console.log("🚀 ~ file: _sendEmail.js ~ line 88 ~ subscribe", subscribe)

					// Populate dialog
					const heading = document.querySelector(".thanks h1");
					const message = document.querySelector(".thanks p");

					if(subscribe.status === "success") {
						heading.textContent = subscribe.data.title;
						message.textContent = subscribe.data.message;
					} else {
						heading.textContent = "Oops!";
						message.textContent = subscribe.message;
					}

					// Show dialog
					const thanks = document.querySelectorAll(".thanks, .dim");

					thanks.forEach(el => {
						el.classList.add("visible");
						el.classList.add("on");
					});
					
					// Reset form
					fields.forEach(function(field) {
						field.value = "";
						field.parentNode.className = "";
					});
					submit.disabled = false;
					loading.classList.remove("loading--visible");

				} else {
					this.disabled = false;
					loading.classList.remove("loading--visible");
				}
			});
		}
    },

	send: async (data) => {
		const apiURL = "//api.fluente.me/sendEmail";

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
			body: JSON.stringify(data)
		};

		const response = await fetch(apiURL, options);

		return response.json();
	}

}