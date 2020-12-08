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
    beginTheMusic() {
        this.gameMusic.play();
    }
    pauseTheMusic() {
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
        this.pauseTheMusic();
        this.winSound.play();
    }
    itsGameOver() {
        this.pauseTheMusic();
        this.youLoseSound.play();
    }
    muteMusic() {
        this.gameMusic.muted = !this.gameMusic.muted;
        this.youLoseSound.muted = !this.youLoseSound.muted;
        this.winSound.muted = !this.winSound.muted;
        this.soundWhenMatched.muted = !this.soundWhenMatched.muted;
        this.flippingTone.muted = !this.flippingTone.muted;
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
            this.soundBarMusic.beginTheMusic();
            this.changeCharacterCards();
            this.timerStartsCounting = this.beginTheTimer();
            this.analysingFlips = false;
        }, 500);
        this.concealTheCards();
        this.timerSetting.innerText = this.theTimeLeft;
        this.flipCounter.innerText = this.numberOfFlips;
    }
    muteButton(){
        this.soundBarMusic.muteMusic();
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
    robotCharacterCardsPaired(robotCharacterCard1, robotCharacterCard2) {
        this.matchedRobotCharacters.push(robotCharacterCard1);
        this.matchedRobotCharacters.push(robotCharacterCard2);
        robotCharacterCard1.classList.add('matched');
        robotCharacterCard2.classList.add('matched');
        this.soundBarMusic.itsAMatch();
        if(this.matchedRobotCharacters.length === this.characterDeckArray.length)
            this.itsAWin();
    }
    cardsNotMatching(robotCharacterCard1, robotCharacterCard2) {
        this.analysingFlips = true;
        setTimeout(() => {
            robotCharacterCard1.classList.remove('show');
            robotCharacterCard2.classList.remove('show');
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
                this.itsGameOver();
        }, 1000);
    }
    itsGameOver() {
        clearInterval(this.timerStartsCounting);
        this.soundBarMusic.itsGameOver();
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

function prepareGame(gameTime = 60) {
    let gameTexts = Array.from(document.getElementsByClassName('text-theme'));
    let muteButton = document.getElementById("muteButton");
    let megaManRobotDecks = Array.from(document.getElementsByClassName('card'));
    let playMegaManGame = new MegaManMemoryGame(gameTime, megaManRobotDecks);
    muteButton.addEventListener('click',() => {
        playMegaManGame.muteButton();
    });
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
    document.addEventListener('DOMContentLoaded', prepareGame(60));
} else {
    prepareGame(60);
}





