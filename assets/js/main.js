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
    let characterMatch = characterOne.dataset.framework === chracterTwo.dataset.framework;
    characterMatch ? disableCards() : unflipCards();
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
     let shufflingCard = Math.floor(Math.random() * 12);
     card.style.order = shufflingCard;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));

