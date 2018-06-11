const cardArr = [ "fa-diamond", "fa-diamond",
									"fa-paper-plane-o", "fa-paper-plane-o",
									"fa-anchor", "fa-anchor",
									"fa-bolt", "fa-bolt",
									"fa-cube", "fa-cube",
									"fa-leaf", "fa-leaf",
									"fa-bicycle", "fa-bicycle",
									"fa-bomb", "fa-bomb" ];

function generateCard(card) {
	return `<li class="card">
						<i class="fa ${card}"></i>
					</li>`;
}

function initGame() {
	var deckOfCards = document.querySelector('.deck');
	var cardHTML = shuffle(cardArr).map(function(card) {
		return generateCard(card);
	});
	deckOfCards.innerHTML = cardHTML.join('');
}

initGame();

const deckOfCards = document.querySelector('.deck');
let allCards = deckOfCards.querySelectorAll('.card');
let flippedCards = []; // Array to store flipped cards

allCards.forEach(function(card) {
	card.addEventListener('click', function(event) {

		if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
			flippedCards.push(card);
			card.classList.add('open', 'show');

			// check if they match
			var firstCardType = flippedCards[0].dataset.card;
			console.log(firstCardType);

			// if cards don't match - go away
			if (flippedCards.length === 2) {
				setTimeout(function() {
					flippedCards.forEach(function(card) {
						card.classList.remove('open', 'show');
					});

					flippedCards = [];
				}, 1000);
			}
		}
	});
});


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
	}
	return array;
}