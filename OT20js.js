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
let darkMode = JSON.parse(localStorage.getItem("darkMode"));

const enableDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    button.classList.add("dark");
    localStorage.setItem("darkMode", JSON.stringify(true));
};

const disableDarkMode = () => {
    document.documentElement.setAttribute("data-theme", "light");
    button.classList.remove("dark");
    localStorage.setItem("darkMode", JSON.stringify(false));
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
// if (localStorage.getItem("lightDark")){
// 	lightDarkToggle.value = localStorage.getItem("lightDark")
// }

// document.getElementById("lightDark").addEventListener("click", function(){
// 	localStorage.setItem("lightDark", lightDarkToggle.value);
// });

// api----------------------------
$("#classBtn").click(function(){
	$.ajax({
		url: 'https://www.dnd5eapi.co/api/classes/',
		type: 'GET',
		success: function(data){
			let results = data.results;
			let randomIndex = Math.floor(Math.random()*results.length)
			let randomClass = results[randomIndex];

			$("#classTxt").text(randomClass.name);
		},
		error: function(error){
			console.log(error);
		}
		});
});
$("#raceBtn").click(function(){
	$.ajax({
		url: 'https://www.dnd5eapi.co/api/races',
		type: 'GET',
		success: function(data){
			let results = data.results;
			let randomIndex = Math.floor(Math.random()*results.length)
			let randomClass = results[randomIndex];

			$("#raceTxt").text(randomClass.name);
		},
		error: function(error){
			console.log(error);
		}
		});
});
$("#itemBtn").click(function(){
	$.ajax({
		url: 'https://www.dnd5eapi.co/api/magic-items',
		type: 'GET',
		success: function(data){
			let results = data.results;
			let randomIndex = Math.floor(Math.random()*results.length)
			let randomClass = results[randomIndex];

			$("#itemTxt").text(randomClass.name);
		},
		error: function(error){
			console.log(error);
		}
		});
});

