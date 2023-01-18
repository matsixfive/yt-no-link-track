(function () {
	"use strict";

	const clean = () => {
		setTimeout(() => {
			console.log("cleaning");
			for (let e of document.getElementsByClassName(
				"yt-simple-endpoint style-scope yt-formatted-string"
			)) {
				const searchParams = new URLSearchParams(
					decodeURIComponent(new URL(e.href).search)
				);
				if (searchParams.get("event") === "video_description") {
					e.href = searchParams.get("q");
				}
			}
		}, 20);
	};

	document.addEventListener("yt-navigate-finish", clean);

	let int = setInterval(() => {
		console.log("checking for description");
		const descText = document.getElementById("description-inline-expander");
		if (descText) {
			clean();
			console.log("clearing");
		}
	}, 100);
})();
