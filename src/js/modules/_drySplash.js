app.drySplash = {

	init: function() {
		const splash = document.getElementById("splash");

		if(splash !== null) {
			setTimeout(() => { splash.style.opacity = "0"; }, 300);
			setTimeout(() => { splash.style.visibility = "hidden"; }, 600);
		}
	}
}
