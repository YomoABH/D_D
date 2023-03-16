// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

//присвоение переменной элемента текст
const text = document.querySelectorAll('.circle__text');
for (let i = 0; i < text.length; i++) {
	console.log();
	text[i].innerHTML = text[i].textContent.replace(/\S/g, "<span class='circle__span'>$&</span>");
}


let element = document.querySelectorAll('.circle__span');
for (let i = 0; i < element.length; i++) {
	if (element[i].textContent === "-") {
		element[i].classList.add('invisible')
	}
	let count = 360 / (element.length / text.length)
	console.log(count);
	element[i].style.transform = "rotate(" + i * count + "deg)";
}        