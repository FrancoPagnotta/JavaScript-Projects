

// const d = document;

// export function digitalClock(date,clock,btnPlay,btnStop) {
	
// 	let day = new Date().getDay();
// 	let month = new Date().getMonth();
// 	let year = new Date().getFullYear();

// 	let clockTime;
	
// 	d.querySelector(btnStop).disabled = true;
	
// 	d.addEventListener('click',(e)=> {
// 		if (e.target.matches(btnPlay)) {
// 			clockTime = setInterval(()=> {
// 				let hour = new Date().toLocaleTimeString();

// 				d.querySelector(date).innerHTML = `${day}/${month}/${year}<br>`;
// 				d.querySelector(clock).innerHTML = `${hour}`;

// 			},1000);
			
// 			e.target.disabled = true;
// 			d.querySelector(btnStop).disabled = false;
// 		}
		
// 		if (e.target.matches(btnStop)) {
// 			clearInterval(clockTime);
// 			d.querySelector(clock).innerHTML = '00:00:00';

// 			d.querySelector(btnPlay).disabled = false;
// 			d.querySelector(btnStop).disabled = true;
// 		}
// 	});
	
const d = document;
	
export function digitalClock(timeHour,timeMin,timeSec) {
		
	
	
	setInterval(()=> {
		
		let hours = new Date().getHours();
		let minutes = new Date().getMinutes();
		let seconds = new Date().getSeconds();
		d.querySelector(timeHour).innerHTML = hours.toString().padStart(2,'0');
		d.querySelector(timeMin).innerHTML = minutes.toString().padStart(2,'0');
		d.querySelector(timeSec).innerHTML = seconds.toString().padStart(2,'0');
	},1000);
}

