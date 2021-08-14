const d = document;
const w = window;

export default function scrollTopBtn(btn) {
	const $scrollBtn = d.querySelector(btn);

	w.addEventListener('scroll', (e)=> {
		let scrollTop = w.pageYOffset || d.documentElement.scrollTop;

		// console.log(pageYOffset, d.documentElement.scrollTop);
		if ( scrollTop > 1800) $scrollBtn.classList.remove('hidden');
		else $scrollBtn.classList.add('hidden');
	});

	$scrollBtn.addEventListener('click', (e)=> {
		if (e.target.matches(btn)) {
			w.scrollTo({
				behavior: 'smooth',
				top: 0,
			})
		}
	});

}