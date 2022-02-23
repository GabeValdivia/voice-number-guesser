const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();



console.log(`Number: ${randomNum}`);


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recongnition = new window.SpeechRecognition();

// Start Recognition and game
recongnition.start();

function getRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}