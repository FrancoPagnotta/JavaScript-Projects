// imports
import hamburgerMenu from "./hamburger_menu.js";
import {digitalClock} from "./digital_clock.js";
import {moveRocket} from "./keyboard.js";
import countdown from "./countdown.js";
import scrollTopBtn from "./scroll_btn.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e)=> {
	hamburgerMenu(".panel-btn",".panel",".menu a");
	digitalClock('.time-hour','.time-minute','.time-second');
	countdown('countdown','June 01,2022','¡Happy New Year Developer!');
	scrollTopBtn('.scroll-top-btn')
});

d.addEventListener("keydown", (e)=> {
	moveRocket(e,'.rocket','.stage');
});

