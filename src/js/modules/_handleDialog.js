app.handleDialog = {

    init: function() {
        const thanks = document.querySelectorAll(".thanks, .dim");
		const dialog = document.querySelector(".thanks");
        const closeBtn = document.querySelector(".thanks button");
        const loading = document.querySelector(".loading");

		const closeDialog = () => {
			thanks.forEach(el => {
                el.classList.remove("on");
                setTimeout(() => { el.classList.remove("visible"); }, 300);
            });

            loading.classList.remove("on");
            setTimeout(() => { loading.classList.remove("visible"); }, 300);
		}

		closeBtn.addEventListener("click", closeDialog);

		// ---
		// WCAG compliance: trap focus and press escape to close the dialog element
		// ---

		// Mutation Observer detects when dialog is shown
		const MOoptions = {
			attributes: true,
			childList: false,
			subtree: false
		}

		// Tab redirects focus to the only interactive element in the dialog - the close button
		// Esc closes the dialog
		const keyboardControl = (event) => {
			if(event.key === "Tab") {
				event.preventDefault();
				closeBtn.focus();
			}

			if(event.key === "Escape") {
				event.preventDefault();
				closeDialog();
			}
		}

		const createListener = (mutationsList, observer) => {
			document.addEventListener("keydown", keyboardControl);
		}

		const ob = new MutationObserver(createListener);

		ob.observe(dialog, MOoptions);

		// ---
		// END - WCAG compliance: trap focus and press escape to close the dialog element
		// ---
    }

}