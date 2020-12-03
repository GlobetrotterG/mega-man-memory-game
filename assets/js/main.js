function ready() {
    let overlays = Array.from(document.getElementsByClassName('text-theme'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new MegaManMemoryGame(60, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('show');
            game.startGame();
        });
    });
    cards.forEach(card => {
        card.addEventListener('click', () => {
            game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

