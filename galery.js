let swipeLeft = document.querySelector('.swipe-left')
let swipeRight = document.querySelector('.swipe-right') 
let galeryCards = document.querySelectorAll('.galery-card')
let cardNumber = 0;

swipeRight.onclick = function () {
		if (cardNumber < galeryCards.length - 1) {
			cardNumber++
			galeryCards[cardNumber - 1].classList.toggle('hidden')
			galeryCards[cardNumber].classList.toggle('hidden')
		} else {
			cardNumber = 0
			galeryCards[galeryCards.length - 1].classList.toggle('hidden')
			galeryCards[cardNumber].classList.toggle('hidden')
		}
}

swipeLeft.onclick = function () {
		if (cardNumber > 0) {
			cardNumber--
			galeryCards[cardNumber + 1].classList.toggle('hidden')
			galeryCards[cardNumber].classList.toggle('hidden')
		} else {
			cardNumber = galeryCards.length - 1
			galeryCards[0].classList.toggle('hidden')
			galeryCards[cardNumber].classList.toggle('hidden')
		}
}
