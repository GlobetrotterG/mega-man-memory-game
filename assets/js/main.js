class SoundBarMusic {
    constructor() {
        this.gameMusic = new Audio('assets/soundtrack/titlescreen.mp3');
        this.flippingTone = new Audio('assets/soundtrack/pickacard.mp3');
        this.soundWhenMatched = new Audio('assets/soundtrack/rightcards.mp3');
        this.winSound = new Audio('assets/soundtrack/victory.mp3');
        this.youLoseSound = new Audio('assets/soundtrack/gameover.mp3');
        this.gameMusic.volume = 0.3;
        this.flippingTone.volume = 0.1;
        this.soundWhenMatched.volume = 0.5;
        this.gameMusic.loop = true;
    }
    musicBegin() {
        this.gameMusic.play();
    }
    pauseMusic() {
        this.gameMusic.pause();
        this.gameMusic.currentTime = 0;
    }
    flippingTheCard() {
        this.flippingTone.play();
    }
    itsAMatch() {
        this.soundWhenMatched.play();
    }
    itsAWin() {
        this.pauseMusic();
        this.winSound.play();
    }
    itsEndGame() {
        this.pauseMusic();
        this.youLoseSound.play();
    }
}

class MegaManMemoryGame {
    constructor(gameTime, megaManRobotDecks) {
        this.characterDeckArray = megaManRobotDecks;
        this.gameTime = gameTime;
        this.theTimeLeft = gameTime;
        this.timerSetting = document.getElementById('time-remaining');
        this.flipCounter = document.getElementById('flips');
        this.soundBarMusic = new SoundBarMusic();
    }
    playMegaManGameNow() {
        this.checkRobotCharacterCard = null;
        this.numberOfFlips = 0;
        this.theTimeLeft = this.gameTime;
        this.matchedRobotCharacters = [];
        this.analysingFlips = true;
        setTimeout(() => {
            this.soundBarMusic.musicBegin();
            this.changeCharacterCards();
            this.timerStartsCounting = this.beginTheTimer();
            this.analysingFlips = false;
        }, 500);
        this.concealTheCards();
        this.timerSetting.innerText = this.theTimeLeft;
        this.flipCounter.innerText = this.numberOfFlips;
    }
    concealTheCards() {
        this.characterDeckArray.forEach(card => {
            card.classList.remove('show');
            card.classList.remove('matched');
        });
    }
    doTheCardFlip(card) {
        if(this.getCardToFlip(card)) {
            this.soundBarMusic.flippingTheCard();
            this.numberOfFlips++;
            this.flipCounter.innerText = this.numberOfFlips;
            card.classList.add('show');

            if(this.checkRobotCharacterCard)
                this.checkForCardMatch(card);
            else
                this.checkRobotCharacterCard = card;       
        }
    }
    checkForCardMatch(card) {
        if(this.getMegaManRobotCard(card) === this.getMegaManRobotCard(this.checkRobotCharacterCard))
            this.robotCharacterCardsPaired(card, this.checkRobotCharacterCard);
        else
            this.cardsNotMatching(card, this.checkRobotCharacterCard);

        this.checkRobotCharacterCard = null;
    }
    robotCharacterCardsPaired(robotcharacter1, robotcharacter2) {
        this.matchedRobotCharacters.push(robotcharacter1);
        this.matchedRobotCharacters.push(robotcharacter2);
        robotcharacter1.classList.add('matched');
        robotcharacter2.classList.add('matched');
        this.soundBarMusic.itsAMatch();
        if(this.matchedRobotCharacters.length === this.characterDeckArray.length)
            this.itsAWin();
    }
    cardsNotMatching(robotcharacter1, robotcharacter2) {
        this.analysingFlips = true;
        setTimeout(() => {
            robotcharacter1.classList.remove('show');
            robotcharacter2.classList.remove('show');
            this.analysingFlips = false;
        }, 1000);
    }
    getMegaManRobotCard(card) {
        return card.getElementsByClassName('megaman-character')[0].src;
    }
    beginTheTimer() {
        return setInterval(() => {
            this.theTimeLeft--;
            this.timerSetting.innerText = this.theTimeLeft;
            if(this.theTimeLeft === 0)
                this.itsEndGame();
        }, 1000);
    }
    itsEndGame() {
        clearInterval(this.timerStartsCounting);
        this.soundBarMusic.itsEndGame();
        document.getElementById('you-lose-text').classList.add('show');
    }
    itsAWin() {
        clearInterval(this.timerStartsCounting);
        this.soundBarMusic.itsAWin();
        document.getElementById('win-text').classList.add('show');
    }
    changeCharacterCards() {
        for(let megamanCharacter = this.characterDeckArray.length - 1; megamanCharacter > 0; megamanCharacter--) {
            let megamanIndex = Math.floor(Math.random() * (megamanCharacter+1));
            this.characterDeckArray[megamanIndex].style.order = megamanCharacter;
            this.characterDeckArray[megamanCharacter].style.order = megamanIndex;
        }
    }
    getCardToFlip(card) {
       return !this.analysingFlips && !this.matchedRobotCharacters.includes(card) && card !== this.checkRobotCharacterCard;
    }
}

function prepareGame() {
    let gameTexts = Array.from(document.getElementsByClassName('text-theme'));
    let megaManRobotDecks = Array.from(document.getElementsByClassName('card'));
    let playMegaManGame = new MegaManMemoryGame(60, megaManRobotDecks);

    gameTexts.forEach(textOverlay => {
        textOverlay.addEventListener('click', () => {
            textOverlay.classList.remove('show');
            playMegaManGame.playMegaManGameNow();
        });
    });
    megaManRobotDecks.forEach(card => {
        card.addEventListener('click', () => {
            playMegaManGame.doTheCardFlip(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', prepareGame());
} else {
    prepareGame();
}





