let recordingButton = document.querySelector('.recording-button');
let recordingTexts = document.querySelectorAll('.recording-text');

recordingButton.onclick = function () {
	for (let recordingText of recordingTexts) {
		recordingText.classList.toggle('hidden')
	}
}