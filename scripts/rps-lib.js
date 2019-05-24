define(function() {
  // Random integer from 0 included to n excluded
  const getRandomInt = function(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }

  // CPU's move is simply chosen at random
  const getCpuMove = function() {
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

  const playSingleRound = function(player, cpu) {
    let playerWonRound = player === 'rock' && cpu === 'scissors' ||
        player === 'paper' && cpu === 'rock' ||
        player === 'scissors' && cpu === 'paper';

    let playerLostRound = player === 'rock' && cpu === 'paper' ||
        player === 'paper' && cpu === 'scissors' ||
        player === 'scissors' && cpu === 'rock';

    if (playerWonRound) {
      return true;
    } else if(playerLostRound) {
      return false;
    } else {  // if it's a tie
      return undefined;
    }
  }

  const resetScore = function() {
    this.player.textContent = 0;
    this.cpu.textContent = 0;
  }

  const resetRoundResult = function() {
    let cpuMoveText = this.div.children[0];
    let narration = this.div.children[1];
    cpuMoveText.textContent = '';
    narration.textContent = '';
  }

  const resetGameResult = function() {
    let result = this.div.children[0];
    result.textContent = '';
  }

  const isGameover = function(score, scoreToWin) {
    let playerWonGame = +(score.player.textContent) === scoreToWin;
    let cpuWonGame = +(score.cpu.textContent) === scoreToWin;
    return playerWonGame || cpuWonGame;
  }

  const updateScore = function(playerWonRound) {
    if(playerWonRound) {
      +(this.player.textContent)++;
    // Not specifying false would increment CPU score for ties
    } else if(playerWonRound === false) {
      +(this.cpu.textContent)++;
    }
  }

  // Indicates the CPU's move and who won the round
  const updateRoundResult = function(playerWonRound, cpuMove) {
    let cpuMoveText = this.div.children[0];
    cpuMoveText.textContent =`The computer used ${cpuMove}.`;
    let narration = this.div.children[1];
    if(playerWonRound) {
      narration.textContent = 'Good!';
    } else if(playerWonRound === undefined) {
      narration.textContent = 'It\'s a tie.';
    } else {
      narration.textContent = 'Wrong guess.';
    }
  }

  // Announces the winner when the game is over
  const updateGameResult = function(score) {
    let result = this.div.children[0];
    let playerWonGame = +score.player.textContent > +score.cpu.textContent
    if(playerWonGame) {
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
    getCpuMove: getCpuMove,
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
