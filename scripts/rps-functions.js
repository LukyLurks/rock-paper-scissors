/* Functions used for the logic of the game */


define(['rps-subfunctions'], function(rpsLib) {

  // Returns randomly 'rock', 'paper' or 'scissors'
  const getComputerSelection = function() {
    return rpsLib.generateCpuSelection();
  }

  // Returns the player's lowercased selection
  const getPlayerSelection = function() {
    const buttons = document.querySelectorAll('button');
    let choice = undefined;
    buttons.forEach((button) => {
      button.addEventListener('click', function(e) {
        choice = button.textContent.toLowerCase();
      });
      return choice;
    });
  }

  // Returns true if the player wins, false if it's the CPU, undefined if draw
  const evalRound = function(player, cpu) {
    if (player === 'rock' && cpu === 'scissors' ||
        player === 'paper' && cpu === 'rock' ||
        player === 'scissors' && cpu === 'paper') {
          return true;
    } else if(player === 'rock' && cpu === 'paper' ||
              player === 'paper' && cpu === 'scissors' ||
              player === 'scissors' && cpu === 'rock'){
      return false;
    } else {
      return undefined;
    }
  }

  // Plays a round of the game
  const playSingleRound = function() {
    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerSelection();

    let playerWins = evalRound(playerSelection, computerSelection);
    if (playerWins === undefined) {
      console.log(`Draw: ${playerSelection} is ${computerSelection}`);
      return undefined;
    } else if (playerWins) {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      return true;
    } else {
      console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
      return false;
    }
  }

  const resetScore = function() {
    this.player.textContent = 0;
    this.cpu.textContent = 0;
  }

  const resetRoundResult = function() {
    let narration = this.div.children[0];
    narration.textContent = '';
  }

  const resetGameResult = function() {
    let result = this.div.children[0];
    result.textContent = '';
  }

  const isGameover = function(score) {
    let playerWins = +(score.player.textContent) === 5;
    let cpuWins = +(score.cpu.textContent) === 5;
    return playerWins || cpuWins;
  }

  const updateScore = function(playerWins) {
    if(playerWins) {
      +(this.player.textContent)++;
    } else if(!playerWins) {
      +(this.cpu.textContent)++;
    }
  }

  const updateRoundResult = function(playerWins) {
    let narration = this.div.children[0];
    if(playerWins) {
      narration.textContent = 'Good!';
    } else if(!playerWins) {
      narration.textContent = 'Wrong guess.';
    } else {
      narration.textContent = 'It\'s a tie.';
    }
  }

  const updateGameResult = function(score) {
    let result = this.div.children[0];
    if(score.player > score.cpu) {
      result.textContent = 'You win!';
      return true;
    } else if(score.cpu > score.player) {
      result.textContent = 'You lose...'
      return false;
    }
    return undefined;
  }

  // Game loop
  const playRockPaperScissors = function() {
    const score = {
      player: document.querySelector('#playerScore'),
      cpu: document.querySelector('#cpuScore'),
      reset: resetScore,
      update: updateScore
    };

    const roundResult = {
      div: document.querySelector('#narration'),
      reset: resetRoundResult,
      update: updateRoundResult
    };

    const gameResult = {
      div: document.querySelector('#result'),
      reset: resetGameResult,
      update: updateGameResult
    };

    score.reset();
    roundResult.reset();
    gameResult.reset();

    while(!isGameover(score)) {
      playerWins = playSingleRound();
      score.update(playerWins);
      roundResult.update(playerWins);
    }
    return gameResult.update(score);
  }

  return {
    getComputerSelection: getComputerSelection,
    getPlayerSelection: getPlayerSelection,
    evalRound: evalRound,
    playSingleRound: playSingleRound,
    playRockPaperScissors: playRockPaperScissors
  }
});