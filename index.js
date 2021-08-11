
// PROJECTS

// imports
import hamburgerMenu from "./hamburger_menu.js";
import {digitalClock} from "./digital_clock.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=> {
	hamburgerMenu(".panel-btn",".panel",".menu a");
	digitalClock('.time-hour','.time-minute','.time-second');
});

