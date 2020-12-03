class AudioController {
    constructor() {
        this.bgMusic = new Audio('assets/soundtrack/titlescreen.mp3');
        this.flipSound = new Audio('assets/soundtrack/pickacard.mp3');
        this.matchSound = new Audio('assets/soundtrack/rightcards.mp3');
        this.winSound = new Audio('assets/soundtrack/victory.mp3');
        this.gameOverSound = new Audio('assets/soundtrack/gameover.mp3');
        this.bgMusic.volume = 0.4;
        this.flipSound.volume = 0.1;
        this.matchSound = 0.2;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    win() {
        this.stopMusic();
        this.winSound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class MegaManMemoryGame {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
}


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





