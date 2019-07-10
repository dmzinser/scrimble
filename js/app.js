let randWord = Math.floor(Math.random() * randomWordArrayEasy.length)
let word = randomWordArrayEasy[randWord];

let newWord = [];

const inputField = document.querySelector("#input");
inputField.style.display = "none";

const startButton = document.querySelector("#start");
startButton.addEventListener("click", () => {
  createPlayer();
})

createPlayer = () => {
  name = prompt("What is your name?");
  newPlayer = new Player(name);
  newPlayer.initPlayerOne();
  startButton.style.display = "none";
  inputField.style.display = "block";
  document.querySelector("#input").focus();
  game.shuffleWord(word);
}

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.round = 0;
    this.game = 0;
  }
  initPlayerOne() {
    const playerOneMetrics = document.querySelector("#playerinfo");
    const playerOneName = document.querySelector("#playername");
    playerOneName.innerText = this.name;
    playerOneMetrics.appendChild(playerOneName);
    const score = document.querySelector("#score");
    const round = document.querySelector("#round");
    score.innerText = (`Score: ${this.score}`);
    round.innerText = (`Rounds Won: ${this.round}`);
  }
}
const game = {

  score: 0,
  round: 0,

  shuffleWord(word) {
    wordChars = word.split("");
    const staticLength = wordChars.length;
    newWord = [];
    for(let i = 0; i < staticLength; i++) 
    newWord += wordChars.splice(Math.floor(Math.random(wordChars[i]) * wordChars.length), 1).join("");
    let scrimbleDisplay = document.querySelector("#scrimbles");
    let wordDisplay = document.createElement("h2")
    wordDisplay.innerText = newWord;
    scrimbleDisplay.appendChild(wordDisplay);  
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
        this.checkScore();
        this.checkRound();
        this.chooseNewWordEasy();
        console.log(randomWordArrayEasy);
      } else {
        console.log("Try Again");
        clearAnswer.value = "";
      }
  },
  increaseScore() {
    newPlayer.score +=1;
    score.innerText = (`Score: ${newPlayer.score}`);
  },
  chooseNewWordEasy() {
    let clearAnswer = document.querySelector("#input");
    let scrimbleDisplay = document.querySelector("#scrimbles");
    scrimbleDisplay.innerHTML = "";
    randWord = Math.floor(Math.random() * randomWordArrayEasy.length);
    word = randomWordArrayEasy[randWord];
    this.shuffleWord(word);
    clearAnswer.value = "";
},
  checkScore() {
    if(newPlayer.score === 3) {
      newPlayer.score = 0;
      score.innerText = (`Score: ${newPlayer.score}`);
      newPlayer.round +=1;
      round.innerText = (`Rounds Won: ${newPlayer.round}`);
      // run roundWon()
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
  removeWord() {
    randomWordArrayEasy.splice(randWord, 1);
  },
  gameWon() {
    if(newPlayer.game === 1) {
      alert("Game Over!");
      location.reload();
    }
  },
  roundWon() {
    if(newPlayer.score === 3 && newPlayer.round === 1) {
      
    }
  }
}
document.querySelector("#input").addEventListener("keydown", game.playerAnswer.bind(game))