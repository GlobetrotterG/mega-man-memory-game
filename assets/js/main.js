  const cards = document.querySelectorAll('.megaman-character');

  let cardFlipped = false;
  let megaManTurn = false;
  let characterOne, chracterTwo;

  function flipCard() {
   if (megaManTurn) return;
   if (this === characterOne) return;

    this.classList.add('flip');

    if (!cardFlipped) {
      cardFlipped= true;
      characterOne = this;
      return;
    }

    chracterTwo = this;
  
    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = characterOne.dataset.framework === chracterTwo.dataset.framework;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    characterOne.removeEventListener('click', flipCard);
    chracterTwo.removeEventListener('click', flipCard);

   resetBoard();
  }

  function unflipCards() {
    megaManTurn = true;

    setTimeout(() => {
      characterOne.classList.remove('flip');
      chracterTwo.classList.remove('flip');

     resetBoard();
    }, 1500);
  }

 function resetBoard() {
   [cardFlipped, megaManTurn] = [false, false];
   [characterOne, chracterTwo] = [null, null];
 }

  (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));