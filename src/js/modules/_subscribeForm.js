app.subscribeForm = {

    init:function(){
        const form = document.querySelector(".subscribe__form");

		if(form !== null) {
			const fields = form.querySelectorAll("input, textarea");
			const submit = form.querySelector(".subscribe__button");
			const loading = form.querySelector(".loading");
			const label = form.querySelector("label");

			const givenName = form.querySelector("#given-name");
			const familyName = form.querySelector("#family-name");
			const company = form.querySelector("#company");
			const email = form.querySelector("#email");
			const message = form.querySelector("#message");
			const consent = form.querySelector("#check-terms");

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

			// Reset error on checkbox change
			consent.addEventListener("change", function () {
				const p = this.nextElementSibling;
				p.classList.remove("error");
			});

			// Checks fields on submit
			submit.addEventListener("click", async function (e) {
				e.preventDefault();
				loading.classList.add("loading--visible");
				this.classList.add("button--disabled");

				if (givenName.value.trim().length <= 3) {
					givenName.parentNode.className = "error";
				} else {
					givenName.parentNode.className = "success";
				}

				if (familyName.value.trim().length <= 3) {
					familyName.parentNode.className = "error";
				} else {
					familyName.parentNode.className = "success";
				}

				if (company.value.trim().length === 0) {
					company.parentNode.className = "error";
				} else {
					company.parentNode.className = "success";
				}

				if (email.value.trim().length <= 5) {
					email.parentNode.className = "error";
				} else {
					const checkEmailResponse = await checkEmail(email.value);

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

				if (message.value.trim().length <= 16) {
					message.parentNode.className = "error";
				} else {
					message.parentNode.className = "success";
				}

				if (!consent.checked) {
					consent.nextElementSibling.className = "error";
				} else {
					consent.nextElementSibling.className = "success";
				}

				fields.forEach(function(field) {
					if(field.value !== "") {
						field.parentNode.classList.add("filled");
					}
				});

				const errors = form.querySelectorAll("label.error");

				if (errors.length === 0) {

					// SUBMIT FORM
					const mail = {
						action: "fluente_send_mail",
						post_id: submit.dataset.post,
						nonce: submit.dataset.nonce,
						url: window.location.href,
						name: `${givenName.value} ${familyName.value}`,
						company: company.value,
						email: email.value,
						message: message.value,
						consent: "Concordo"
					};

					jQuery
						.ajax({
							type: "POST",
							url: ajaxObj.ajaxurl,
							data: mail,
						})
						.done(response => {
							if (response.success) {
								// Show success dialog
								const thanks = document.querySelectorAll(".thanks, .dim");
								thanks.forEach(el => {
									el.classList.add("visible");
									el.classList.add("on");
								});
								console.log(response.data);
							}
						})
						.fail(function (xhr, textStatus, error) {
							console.log(xhr.statusText);
							console.log(textStatus);
							console.log(error);
						});

					// Reset form
					email.value = "";
					consent.checked = false;
					submit.classList.remove("button--disabled");
					loading.classList.remove("loading--visible");

				} else {
					this.classList.remove("button--disabled");
					loading.classList.remove("loading--visible");
				}
			})
		}
    }

}