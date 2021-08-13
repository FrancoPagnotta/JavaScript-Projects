const d = document;
let x = 0;
let y = 0;

let rotate = 0;

export function moveRocket(e,rocket,stage) {
	const $rocket = d.querySelector(rocket);
	const $stage = d.querySelector(stage);

	const limitsRocket = $rocket.getBoundingClientRect();
	const limitsStage = $stage.getBoundingClientRect();
	
	switch (e.keyCode) {
		case 37:
			if (limitsRocket.left > limitsStage.left + 10) {
				e.preventDefault();
				x--;
			};

			rotate = 180;
			break;

		case 38:
			if (limitsRocket.top > limitsStage.top + 10) {
				e.preventDefault();
				y--;
			};

			rotate = -90;
			break;

		case 39:
			if (limitsRocket.right < limitsStage.right - 10) {
				e.preventDefault();
				x++;
			};

			rotate = 0;
			break;

		case 40:
			if (limitsRocket.bottom < limitsStage.bottom - 10) {
				e.preventDefault();
				y++;
			};
			
			rotate = 90;
			break;
	
		default:
			break;
	}

	$rocket.style.transform = `translate(${x * 10}px,${y * 10}px) rotate(${rotate}deg)`;
}
