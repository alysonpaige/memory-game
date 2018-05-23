/* ----------------
Initialize Variables
---------------- */

// List for all cards
const cardList = [
	"fa-diamond",
	"fa-paper-plane-o",
	"fa-anchor",
	"fa-bolt",
	"fa-cube",
	"fa-leaf",
	"fa-bicycle",
	"fa-bomb",
	"fa-diamond",
	"fa-paper-plane-o",
	"fa-anchor",
	"fa-bolt",
	"fa-cube",
	"fa-leaf",
	"fa-bicycle",
	"fa-bomb"
];

// Select <ul> deck of cards
const deckOfCards = document.querySelector('.deck');

// Select all <li> of cards
var allCards = document.querySelectorAll('.card');

// Array to store flipped cards
let flippedCard = [];

// Array to store matched cards
let matchedCards = [];

/* TODO:
Winner popup modal, add to:
- HTML
- CSS
- add getElementById('modal) js
*/

const restart = document.querySelector('.restart');

// To track users quantity of moves per game
const moves = document.querySelector('.moves');
let movesCounter = 0;

// Select star rating elements
const star = document.getElementById('star-rating-ul').querySelectorAll('.star');
let starCount = 3;

/* TODO:
Timer
- Add to HTML under 'moves'
	- Use a font-awesome icon
- Select timer with `querySelector`
- Initialize variables
	- time, mins, secs
- Alt: create span with IDs and use querySelector
*/
// const timerEl = document.querySelector('.timer-container');
// const minsEl = document.querySelector('#mins');
// const secsEl = document.querySelector('#secs');
// let mins = 0;
// let secs = 0;

/* ----------------
App Functionality
---------------- */


/* TODO:
- Display Cards (fn)
	- Shuffle Deck
	- Loop through cards and create cardHTML
	- Display on page
- Start Timer (fn)
*/
function displayCards() {
	const shuffleDeck = shuffle(cardList);
	cardHTML = '';

	for (let card of shuffleDeck) {
		cardHTML += `<li class="card">
									<i class="fa ${card}"></i>
								</li>`;
	}
	deckOfCards.innerHTML = cardHTML;
}
displayCards();

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


/* TODO:
- Has a card been clicked? Event listener
- Yes:
	- Flip card to display icon (fn)
	- Add card to flippedCard array (fn)
- No:
	- Do nothing
*/
deckOfCards.addEventListener('click', function(e) {
	console.log('was clicked');
})

/* TODO:
- Does the flippedCard array already have another card in it?
	- Yes:
		- Check to see if the cards match
			- Yes:
				- Lock cards in open position
			- No:
				- Remove cards from flippedCard array
				- Flip card to hide symbol (fn)
- Increment move counter (fn)
*/


/* TODO:
- Are all matches found?
- Yes: (fn)
	- Display final score
	- Popup modal
	- Play again?
		- Yes:
			- Start Game
		- No: 
			- End
- No: Does the clicked card match a card in flippedCard array? (ABOVE)
*/