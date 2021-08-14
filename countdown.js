

const d = document;

export default function countdown(id,limitDate,finalMessage) {
	const $countdown = document.getElementById(id);
	const countdownDate = new Date(limitDate).getTime();

	const $days = document.querySelector('.countdown-days');
	const $hours = document.querySelector('.countdown-hours');
	const $minutes = document.querySelector('.countdown-minutes');
	const $seconds = document.querySelector('.countdown-seconds');

	let countdownTempo = setInterval(()=> {
		let now = new Date().getTime();
		let limitTime = countdownDate-now;
		let days = Math.floor(limitTime / (1000 * 60 * 60 * 24));
		let hours = ("0" + Math.floor(limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).slice(-2); 
		let minutes = ("0" + Math.floor(limitTime % (1000 * 60 * 60) / (1000 * 60))).slice(-2); 
		let seconds = ("0" + Math.floor(limitTime % (1000 * 60) / 1000)).slice(-2); 
		
		$days.innerHTML = days;
		$hours.innerHTML = hours;
		$minutes.innerHTML = minutes;
		$seconds.innerHTML = seconds;

		// console.log(countdownDate,now,limitTime);
		
		if (limitTime < 0) {
			clearInterval(countdownTempo);
			$countdown.innerHTML = `<h3>${finalMessage}</h3>`

		}
	},1000);
}