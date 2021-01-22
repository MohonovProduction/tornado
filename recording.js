let message = document.querySelector('.message')
let messageButton = document.querySelector('.message-button')
let isMessageActive = false;

messageButton.onclick = function () {
	if (isMessageActive) {
		$('.message').fadeOut(500)
		isMessageActive = false
	} else {
		$('.message').fadeIn(500)
		isMessageActive = true
	}
}

let recordingMainButton = document.querySelector('.main-button')
let contacts = document.querySelector('.pop-up')
let close = document.querySelector('.close')

recordingMainButton.onclick = function () {
	$('.pop-up').fadeIn(500)
}

close.onclick = function () {
	$('.pop-up').fadeOut(500)
}

var clipboard = new Clipboard('.vk');