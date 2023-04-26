"use strict";
// light dark mode ---------------------
function toggleClick(){
	$("html").toggleClass("dark")
}
$(function(){
	$("#top button").click(toggleClick)
})

// light dark -> local storage ---------------------
const button = document.getElementById("lightDark");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    button.classList.add("dark");
    localStorage.setItem("darkMode", "true");
};

const disableDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
    button.classList.remove("dark");
    localStorage.setItem("darkMode", "false");
};

if (darkMode) {
    enableDarkMode();
}

button.addEventListener("click", () => {
    darkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (!darkMode) {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
});

// api----------------------------
let classImages = {
	"BARBARIAN": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/barbarian-icon.png'>",
	"BARD": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/bard-icon.png'>",
	"CLERIC": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/cleric-icon.png'>",
	"DRUID": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/druid-icon.png'>",
	"FIGHTER": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/fighter-icon.png'>",
	"MONK": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/monk-icon.png'>",
	"PALADIN": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/paladin-icon.png'>",
	"RANGER": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/ranger-icon.png'>",
	"ROGUE": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/rouge-icon.png'>",
	"SORCERER": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/sorcerer-icon.png'>",
	"WARLOCK": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/warlock-icon.png'>",
	"WIZARD": "<img src='https://raw.githubusercontent.com/ajdelace/ot20_images/main/wizard-icon.png'>"
};
let raceImages = {
	"human": "https://raw.githubusercontent.com/ajdelace/ot20_images/main/human.png",
	"elf": "https://raw.githubusercontent.com/ajdelace/ot20_images/main/elf.png",
	"dwarf": "https://raw.githubusercontent.com/ajdelace/ot20_images/main/dwarf.png",
	"halfling": "https://raw.githubusercontent.com/ajdelace/ot20_images/main/halfling.png",
	"gnome": "https://raw.githubusercontent.com/ajdelace/ot20_images/main/gnome.png",
	"tiefling": "https://raw.githubusercontent.com/ajdelace/ot20_images/main/tiefling.png"
}

$("#classBtn").click(function(){
	$.ajax({
		url: 'https://www.dnd5eapi.co/api/classes/',
		type: 'GET',
		success: function(data){
			let results = data.results;
			let randomIndex = Math.floor(Math.random()*results.length)
			let randomClass = results[randomIndex].index.toUpperCase();
			let classImage = classImages[randomClass];

			$("#classTxt").text(randomClass);
			$("#classImg").html(classImage);
			$("#classTxt").text(`THE PATH OF THE ${randomClass} HAS CHOSEN YOU!`);
		},
		error: function(error){
			console.log(error);
		}
		});
});

let races = ["Human", "Elf", "Dwarf", "Halfling", "Dragonborn", "Tiefling"];
$("#raceBtn").click(function() {
  let randomIndex = Math.floor(Math.random() * races.length);
  let randomRace = races[randomIndex];

  $("#raceTxt").text(`You are a ${randomRace}!`);
  $("#raceImg").html(`<img src="images/${randomRace}.png" alt="${randomRace}">`);
});

$("#itemBtn").click(function(){
	$.ajax({
		url: 'https://www.dnd5eapi.co/api/magic-items',
		type: 'GET',
		success: function(data){
			let results = data.results;
			let randomIndex = Math.floor(Math.random()*results.length);
			let randomClass = results[randomIndex];

			$("#itemTxt").text(`You can never be found without your ${randomClass.name}!`);
		},
		error: function(error){
			console.log(error);
		}
		});
});

$(function(){
	$( "#accordion" ).accordion();
  });

  $(function(){
	$("#tabs").tabs();
  });