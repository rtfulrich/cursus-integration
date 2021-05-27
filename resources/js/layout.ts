// Dark/Light Mode theme switch
(() => {
	const themeSwitchers = document.querySelectorAll(".theme-mode-switcher");
	themeSwitchers.forEach((item: Element) => {
		item.addEventListener("click", () =>
			document.body.classList.toggle("dark-mode")
		);
	});
})();
