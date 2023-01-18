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
	document.addEventListener("click", clean);
})();
