let randWord = Math.floor(Math.random() * randomWordArrayEasy.length)
let word = randomWordArrayEasy[randWord];

let newWord = [];

const answerInput = document.querySelector("#answer-input");
answerInput.style.display = "none";

const nameInput = document.querySelector("#name-input");
nameInput.style.display = "none";

const tryAgainButton = document.querySelector("#try-again");
tryAgainButton.style.display = "none";

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  startButton.style.display = "none";
  nameInput.style.display = "blocK";
  nameInput.value = "Your Name";
  nameInput.addEventListener("click", () => {
    nameInput.value = "";
  });
  nameInput.addEventListener("keydown", (e) => {
    if(e.keyCode === 13) {
      createPlayer();
    }
  })
});

createPlayer = () => {
  name = nameInput.value;
  newPlayer = new Player(name);
  newPlayer.initPlayer();
  nameInput.style.display = "none"
  answerInput.style.display = "block";
  document.querySelector("#answer-input").focus();
  game.shuffleWord(word);
  game.clock();
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.round = 0;
    this.game = 0;
    this.time = 45;
  };

  initPlayer() {
    const playerName = document.querySelector("#player-name");
    const score = document.querySelector("#score");
    const round = document.querySelector("#round");
    const time = document.querySelector("#time");
    playerName.innerText = this.name;
    score.innerText = (`Score: ${this.score}`);
    round.innerText = (`Rounds Won: ${this.round}`);
    time.innerText = (`Time Remaining: ${this.time}`);
  }
}

const game = {

  shuffleWord(word) {
    if(newPlayer.time > 0) {
      wordChars = word.split("");
      const staticLength = wordChars.length;
      newWord = [];
      for(let i = 0; i < staticLength; i++) 
      newWord += wordChars.splice(Math.floor(Math.random(wordChars[i]) * wordChars.length), 1).join("");
      let scrimbleDisplay = document.querySelector("#scrimbles");
      let wordDisplay = document.createElement("span");
      wordDisplay.setAttribute("class", "span");
      wordDisplay.innerText = newWord;
      scrimbleDisplay.appendChild(wordDisplay);
    } else {
      this.gameOver();
    }
  },
  
  playerAnswer(e) {  
    let playerAnswer = e.target.value;
      if(e.keyCode === 13) {
      this.checkMatch(playerAnswer);
      }
  },

  checkMatch(playerAnswer) {
    let clearAnswer = document.querySelector("#answer-input");
      if(playerAnswer === word) {
        this.increaseScore();
        this.removeWord();
        this.chooseNewWordEasy();
        this.checkScore();
        this.checkRound();
        this.greatJob();
      } else {
        this.tryAgain();
        clearAnswer.value = "";
      }
  },
  
  greatJob() {
    let scrimbles = document.querySelector("#scrimbles");
    let greatJobImg = document.createElement("img");
    greatJobImg.setAttribute("class", "great-job");
    greatJobImg.src = "https://media.giphy.com/media/wQNbW62D5XSkU/giphy.gif";
    scrimbles.appendChild(greatJobImg);
    setTimeout(() => {
      scrimbles.removeChild(greatJobImg);
    }, 1500)
  },

  tryAgain() {
    let scrimbles = document.querySelector("#scrimbles");
    let tryAgainImg = document.createElement("img");
    tryAgainImg.setAttribute("class", "try-again");
    tryAgainImg.src = "https://media.giphy.com/media/fpdql5AgW7ziM/giphy.gif";
    scrimbles.appendChild(tryAgainImg);
    setTimeout(() => {
      scrimbles.removeChild(tryAgainImg);
    }, 1500)
  },

  increaseScore() {
    newPlayer.score +=1;
    score.innerText = (`Score: ${newPlayer.score}`);
  },

  removeWord() {
    randomWordArrayEasy.splice(randWord, 1);
  },

  chooseNewWordEasy() {
    let clearAnswer = document.querySelector("#answer-input");
    clearAnswer.value = "";
    let scrimbleDisplay = document.querySelector("#scrimbles");
    scrimbleDisplay.innerHTML = "";
    randWord = Math.floor(Math.random() * randomWordArrayEasy.length);
    word = randomWordArrayEasy[randWord];
    this.shuffleWord(word);
},

  checkScore() {
    if(newPlayer.score === ) {
      newPlayer.score = 0;
      score.innerText = (`Score: ${newPlayer.score}`);
      newPlayer.round +=1;
      round.innerText = (`Rounds Won: ${newPlayer.round}`);
    }
  },

  checkRound() {
    if(newPlayer.round === 3) {
      newPlayer.game +=1;
      newPlayer.score = 0;
      score.innerText = (`Score: ${newPlayer.score}`);
      newPlayer.round = 0;
      round.innerText = (`Rounds Won: ${newPlayer.round}`);
      this.checkGameWon();
    }
  },

  checkGameWon() {
    if(newPlayer.game === 1) {
      this.gameWon();
    }
  },
  
  clock() {
    setInterval( () => {
      if(newPlayer.time > 0 && newPlayer.game <1) {
        newPlayer.time -=1;
        const timer = document.querySelector("#time");
        timer.innerText = (`Time Remaining: ${newPlayer.time}`);
      } else if(newPlayer.time === 0) {
        this.gameOver();
        newPlayer.time = -1;
      }
    }, 1000);
  },

  clearPlayerInfo() {
    answerInput.style.display = "none";
    const name = document.querySelector("#player-name");
    name.innerText = "";
    const score = document.querySelector("#score");
    score.innerText = "";
    const round = document.querySelector("#round");
    round.innerText = "";
    const game = document.querySelector("#game");
    game.innerText = "";
    const timer = document.querySelector("#time");
    timer.innerText = "";
    let scrimbleDisplay = document.querySelector("#scrimbles");
    scrimbleDisplay.innerHTML = "";
  },

  gameWon() {
    this.clearPlayerInfo();
    let gameName = document.querySelector(".game-name");
    gameName.style.display = "none";
    let nightmode = document.querySelector(".nightmode");
    nightmode.style.display = "block";
    let scrimbles = document.querySelector("#scrimbles");
    let gameWonImg = document.createElement("img");
    gameWonImg.setAttribute("class", "game-won");
    gameWonImg.src = "https://media.giphy.com/media/YXGDd9bw8Wewo/giphy.gif";
    scrimbles.appendChild(gameWonImg);
    setTimeout(() => {
      scrimbles.removeChild(gameWonImg);
    }, 13250);
    this.reload();
  },

  gameOver() {
    this.clearPlayerInfo();
    let gameName = document.querySelector(".game-name");
    gameName.style.display = "none";
    let nightmode = document.querySelector(".nightmode");
    nightmode.style.display = "block";
    let scrimbles = document.querySelector("#scrimbles");
    let gameOverImg = document.createElement("img");
    gameOverImg.setAttribute("class", "game-over");
    gameOverImg.src = "https://media.giphy.com/media/dkuZHIQsslFfy/giphy.gif";
    scrimbles.appendChild(gameOverImg);
    setTimeout(() => {
      scrimbles.removeChild(gameOverImg);
    }, 13250);
    this.reload();
  },
  
  reload() {
    setInterval(() => {
      location.reload();
    }, 13250);
  }
}
document.querySelector("#answer-input").addEventListener("keydown", game.playerAnswer.bind(game))