const cardArr = [ "fa-diamond", "fa-diamond",
									"fa-paper-plane-o", "fa-paper-plane-o",
									"fa-anchor", "fa-anchor",
									"fa-bolt", "fa-bolt",
									"fa-cube", "fa-cube",
									"fa-leaf", "fa-leaf",
									"fa-bicycle", "fa-bicycle",
									"fa-bomb", "fa-bomb" ];

function generateCard(card) {
	return `<li class="card" data-card="${card}">
						<i class="fa ${card}"></i>
					</li>`;
}

function initGame() {
	var deckOfCards = document.querySelector('.deck');

	var cardHTML = shuffle(cardArr).map(function(card) {
		return generateCard(card);
	});

	deckOfCards.innerHTML = cardHTML.join('');

	// TODO: place setInterval in initGame?
	// clearInterval;
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

			if (flippedCards.length === 2) {
				// check if they match
				if (flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
					flippedCards[0].classList.add('match');
					flippedCards[0].classList.add('open');
					flippedCards[0].classList.add('show');

					flippedCards[1].classList.add('match');
					flippedCards[1].classList.add('open');
					flippedCards[1].classList.add('show');

					flippedCards = [];
				} else {
					// if they don't match, hide
					setTimeout(function() {
						flippedCards.forEach(function(card) {
							card.classList.remove('open', 'show');
						});

						flippedCards = [];
					}, 1000);
					// clearTimeout to stop being able to open more than 2 cards quickly
				}
				addMoves();
				checkScore();
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

/*
MOVES
*/
let moves = 0;

function addMoves() {
	moves++;
	const movesCounter = document.querySelector('.moves');
	movesCounter.innerHTML = moves;
}

/*
STARS
*/
function checkScore() {
	if (moves === 16 || moves === 24) {
		hideStar();
	}
}

function hideStar() {
	const starsList = document.querySelectorAll('.stars li');
	for (star of starsList) {
		if (star.style.display !== 'none') {
			star.style.display = 'none';
			break;
		}
	}
}

/*
TIMER
*/
// Timer variables
let sec = 0;
let min = 0;
let timer;
let timeCounting = false;
const timerText = document.querySelector('.timer-container');

// Timer button functionality
document.querySelector('.card').addEventListener('click', startTimer);

// Timer start
function startTimer() {
	if (timeCounting == false) {
		timer = setInterval(insertTime, 1000);
		timeCounting = true;
	} else {
		return;
	}
}

// Timer stop
function stopTimer() {
	clearInterval(timer);
	sec = 0;
	min = 0;
	timeCounting = false;
}

// Timer min, sec and display time
function insertTime() {
	sec++;
	if (sec < 10) {
		sec = `0${sec}`;
	} 
	if (sec >= 60) {
		min++;
		sec = '00';
	}

	// Display the time
	timerText.innerHTML = `0${min}:${sec}`;
}

/*
RESET FUNCTIONS
TODO:
* - On 'restart' the timer and moves don't restart, needs page refresh
* - On 'restart' the board doesn't clear to start over
*/
// document.querySelector('.restart').addEventListener('click', () => {
// 	stopTimer();
// 	timerText.innerHTML = '00:00';
// })
document.querySelector('.restart').addEventListener('click', restartGame);

function restartGame() {
	// stop and reset timer
	stopTimer();
	timerText.innerHTML = '00:00'; // or call insertTime()

	// reset moves
	moves = 0;
	document.querySelector('.moves').innerHTML = moves;

	// reset stars
	stars = 0;
	const starsList = document.querySelectorAll('.stars li');
	for (star of starsList) {
		star.style.display = 'inline';
	}

	// clear board, flip all cards over
	
}
