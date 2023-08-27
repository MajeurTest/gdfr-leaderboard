document.getElementById("dropButton").addEventListener("click", function (e) {
	e.preventDefault();
	const display = document.getElementById("nav").style.display;

	if (display === "block") {
		document.getElementById("nav").style.display = "none";
	} else {
		document.getElementById("nav").style.display = "block";
	}
});