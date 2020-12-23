let recordingButton = document.querySelector('.recording-button');
let recordingTexts = document.querySelectorAll('.recording-text');

recordingButton.onclick = function () {
	for (let recordingText of recordingTexts) {
		recordingText.classList.toggle('hidden')
	}
}

let recordingMainButton = document.querySelector('#recording-button')
let contacts = document.querySelector('#recording')
let close = document.querySelector('#close')

recordingMainButton.onclick = function () {
	recording.classList.remove('hidden')
}

close.onclick = function () {
	recording.classList.add('hidden')
}