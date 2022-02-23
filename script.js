const msgEl = document.getElementById('msg');

const randomNum = getRandomNumber();

console.log(`Number: ${randomNum}`);

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition();

// Start Recognition and game
recognition.start();

// Capture user speak
function onSpeak(e) {
	const msg = e.results[0][0].transcript;

	writeMessage(msg);
	checkNumber(msg);
}

// Check message against number
function checkNumber(msg) {
	const num = +msg;

	// Check if valid number
	if(Number.isNaN(num)){
		msgEl.innerHTML = '<div>is not a valid number</div>';
		return;
	}

	// Check if in range
	if(num > 100 || num < 1) {
		msgEl.innerHTML = '<div>Number must be between 1 and 100</div>'
	}

	// Check number
	if(num === randomNum){
		document.body.innerHTML = `
			<h2>Congrats! You have guessed the number! <br><br>
			It was ${num}</h2>
			<buttton class="play-again" id="play-again">Play Again</button>
		`;
	} else if (num > randomNum) {
		msgEl.innerHTML += '<div>GO Lower!!!</div>'
	} else {
		msgEl.innerHTML += '<div>GO Higher!!!</div>'
	}
}

// Write what user speaks
function writeMessage(msg) {
	msgEl.innerHTML = `
		<div>You said:</div>
		<span class="box">${msg}</span>
	`;
}


// Generate random number
function getRandomNumber() {
	return Math.floor(Math.random() * 100) + 1;
}

// Speak result
recognition.addEventListener('result', onSpeak);