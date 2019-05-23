define(function() {
  // Random integer from 0 included to n excluded
  const getRandomInt = function(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }

  // Returns randomly 'rock', 'paper' or 'scissors'
  const getComputerSelection = function() {
    let choice = getRandomInt(3);
    if (choice === 0) {
      choice = 'rock';
    } else if (choice === 1) {
      choice = 'paper';
    } else {
      choice = 'scissors';
    }
    return choice;
  }

  // Returns undefined if it's a tie
  const evalRound = function(player, cpu) {
    let playerWins = player === 'rock' && cpu === 'scissors' ||
        player === 'paper' && cpu === 'rock' ||
        player === 'scissors' && cpu === 'paper';

    let playerLoses = player === 'rock' && cpu === 'paper' ||
        player === 'paper' && cpu === 'scissors' ||
        player === 'scissors' && cpu === 'rock';

    if (playerWins) {
      return true;
    } else if(playerLoses) {
      return false;
    } else {
      return undefined;
    }
  }

  // Plays a round of the game
  const playSingleRound = function(playerSelection) {
    let computerSelection = getComputerSelection();

    let playerWins = evalRound(playerSelection, computerSelection);
    if (playerWins) {
      return true;
    } else if (playerWins === undefined) {
      return undefined;
    } else {
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

  const isGameover = function(score, winScore) {
    let playerWins = +(score.player.textContent) === winScore;
    let cpuWins = +(score.cpu.textContent) === winScore;
    return playerWins || cpuWins;
  }

  const updateScore = function(playerWins) {
    if(playerWins) {
      +(this.player.textContent)++;
    } else if(playerWins === false) {
      +(this.cpu.textContent)++;
    }
  }

  const updateRoundResult = function(playerWins) {
    let narration = this.div.children[0];
    if(playerWins) {
      narration.textContent = 'Good!';
    } else if(playerWins === undefined) {
      narration.textContent = 'It\'s a tie.';
    } else {
      narration.textContent = 'Wrong guess.';
    }
  }

  const updateGameResult = function(score) {
    let result = this.div.children[0];
    if(+score.player.textContent > +score.cpu.textContent) {
      result.textContent = 'You win!';
      return true;
    } else {
      result.textContent = 'You lose...'
      return false;
    }
  }

  const disableButtons = function(buttons) {
    if(buttons.length !== undefined) {
      buttons.forEach((b) => {
        b.disabled = true;
        b.classList.remove('enabled');
        b.classList.add('disabled');
      });
    } else {
      buttons.disabled = true;
      buttons.classList.remove('enabled');
      buttons.classList.add('disabled');
    }
  }

  const enableButtons = function(buttons) {
    if(buttons.length !== undefined) {
      buttons.forEach((b) => {
        b.disabled = false;
        b.classList.remove('disabled');
        b.classList.add('enabled');
      });
    } else {
      buttons.disabled = false;
      buttons.classList.remove('disabled');
      buttons.classList.add('enabled');
    }
  }

  return {
    getRandomInt: getRandomInt,
    getComputerSelection: getComputerSelection,
    evalRound: evalRound,
    playSingleRound: playSingleRound,
    resetScore: resetScore,
    resetRoundResult: resetRoundResult,
    resetGameResult: resetGameResult,
    isGameover: isGameover,
    updateScore: updateScore,
    updateRoundResult: updateRoundResult,
    updateGameResult: updateGameResult,
    disableButtons: disableButtons,
    enableButtons: enableButtons
  }
});
