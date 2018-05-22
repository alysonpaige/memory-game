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
  */
  
  /* ----------------
  App Functionality
  ---------------- */
  
  
  /* TODO:
  - Display Cards
  - Shuffle Deck
  - Start Timer
  */
  
  
  /* TODO:
  - Has a card been clicked? Event listener
  - Yes:
    - Flip card to display icon (fn)
    - Add card to flippedCard array (fn)
  - No:
    - Do nothing
  */
  
  
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