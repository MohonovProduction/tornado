let recordingButton = document.querySelector('.recording-button');
let icons = document.querySelector('#icons');

recordingButton.onclick = function () {
	$('#icons').toggle('slow')
}

let recordingMainButton = document.querySelector('#recording-button')
let contacts = document.querySelector('#recording')
let close = document.querySelector('#close')

recordingMainButton.onclick = function () {
	//recording.classList.remove('hidden')
	$('#recording').show('slow')
}

close.onclick = function () {
	$('#recording').hide('slow')
	//recording.classList.add('hidden')
}