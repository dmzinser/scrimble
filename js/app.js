let randWord = Math.floor(Math.random() * randomWordArrayEasy.length)
let word = randomWordArrayEasy[randWord];

let newWord = [];

const inputField = document.querySelector("#input");
inputField.style.display = "none";

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  createPlayer();
});

createPlayer = () => {
  name = prompt("What is your name?");
  newPlayer = new Player(name);
  newPlayer.initPlayerOne();
  startButton.style.display = "none";
  inputField.style.display = "block";
  document.querySelector("#input").focus();
  game.shuffleWord(word);
  game.clock();
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.round = 0;
    this.game = 0;
    this.time = 15;
  };

  initPlayerOne() {
    const playerOneName = document.querySelector("#playername");
    const score = document.querySelector("#score");
    const round = document.querySelector("#round");
    const time = document.querySelector("#time");
    playerOneName.innerText = this.name;
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
    let x = e.target.value;
      if(e.keyCode === 13) {
      this.checkMatch(x);
      }
  },

  checkMatch(x) {
    let clearAnswer = document.querySelector("#input");
      if(x === word) {
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
    let clearAnswer = document.querySelector("#input");
    clearAnswer.value = "";
    let scrimbleDisplay = document.querySelector("#scrimbles");
    scrimbleDisplay.innerHTML = "";
    randWord = Math.floor(Math.random() * randomWordArrayEasy.length);
    word = randomWordArrayEasy[randWord];
    this.shuffleWord(word);
},

  checkScore() {
    if(newPlayer.score === 3) {
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
      this.gameWon();
    }
  },
  
  clock() {
    setInterval( () => {
      if(newPlayer.time > 0) {
        newPlayer.time -=1;
        const timer = document.querySelector("#time");
        timer.innerText = (`Time Remaining: ${newPlayer.time}`);
      } else if(newPlayer.time === 0) {
        this.gameOver();
        newPlayer.time = -1;
        }
    }, 1000);
  },

  gameWon() {
    if(newPlayer.game === 1) {
      alert("You Won! Play Again");
      location.reload();
    }
  },

  gameOver() {
    console.log("LOSER")
      alert(`You Lost ${newPlayer.name}!  Play Again?`);
      location.reload();
  }
}
document.querySelector("#input").addEventListener("keydown", game.playerAnswer.bind(game))