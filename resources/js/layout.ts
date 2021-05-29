// Dark/Light Mode theme switch
(() => {
	const setDataThemes = () => {
		const isDark = document.body.classList.contains("dark-mode");
		const elementsWithDataTheme = document.querySelectorAll("[data-theme]");
		elementsWithDataTheme.forEach((item: Element) => {
			item.setAttribute("data-theme", isDark ? "dark" : "light");
		});
	};

	const themeSwitchers = document.querySelectorAll(".theme-mode-switcher");
	themeSwitchers.forEach((item: Element) => {
		item.addEventListener("click", () => {
			document.body.classList.toggle("dark-mode");
			setDataThemes();
		});
	});

	window.addEventListener("DOMContentLoaded", setDataThemes);
})();

// Header menu
(() => {
	const hideShownMenu = () => {
		const menu = document.querySelector(".menu.show");
		menu?.classList.remove("show");
	};
	const controllers = document.querySelectorAll(".controller");
	controllers.forEach((controller: HTMLElement) => {
		controller.addEventListener("click", (event: MouseEvent) => {
			event.preventDefault();
			const theElementID = controller.getAttribute("data-controlled");
			const theElement = document.getElementById(theElementID);
			const isShown = theElement.classList.contains("show");
			if (isShown) hideShownMenu();
			else theElement.classList.add("show");
		});
	});
})();
