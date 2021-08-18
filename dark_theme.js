const d = document;

export default function darkTheme(btn,classDark) {
	const $themeBtn = d.querySelector(btn);
	const $selectors = d.querySelectorAll('[data-dark]');
	
	// let moon = `<span class="material-icons-outlined">dark_mode</span>`;
	let moon = '<span class="material-icons-outlined">dark_mode</span>';
	let sun = '<span class="material-icons-outlined">wb_sunny</span>';

	d.addEventListener('click', (e)=> {
		if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
			
			if ($themeBtn.innerHTML === moon) {
				$selectors.forEach(element => element.classList.add(classDark));
				$themeBtn.innerHTML = sun;
			}
			else {
				console.log('chau');
				$selectors.forEach(element => element.classList.remove(classDark));
				$themeBtn.innerHTML = moon;
			}

		}
	});
}
