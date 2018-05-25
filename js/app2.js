const cardArr = ["fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb","fa-diamond","fa-paper-plane-o","fa-anchor","fa-bolt","fa-cube","fa-leaf","fa-bicycle","fa-bomb"];

const deckOfCards = document.querySelector('.deck');
let allCards = deckOfCards.querySelectorAll('.card');

allCards.forEach(function(card){
	card.addEventListener('click', function(event) {
		card.classList.add('open', 'show');
	});
})
