requirejs(['rps-lib'], function(rpsLib) {
  const score = {
    player: document.querySelector('#playerScore'),
    cpu: document.querySelector('#cpuScore'),
    reset: rpsLib.resetScore,
    update: rpsLib.updateScore
  };
  const roundResult = {
    div: document.querySelector('#narration'),
    reset: rpsLib.resetRoundResult,
    update: rpsLib.updateRoundResult
  };
  const gameResult = {
    div: document.querySelector('#result'),
    reset: rpsLib.resetGameResult,
    update: rpsLib.updateGameResult
  };
  const newGameButton = document.querySelector('#newGame');
  const rpsButtons = document.querySelectorAll('.playerButton');
  const winScoreText = document.querySelector('#winScore');

  const winScore = 3;
  let playerSelection = '';
  let playerWins = undefined;
  winScoreText.textContent = winScore;

  newGameButton.addEventListener('click', function(e) {
    score.reset();
    roundResult.reset();
    gameResult.reset();
    rpsLib.enableButtons(rpsButtons);
    rpsLib.disableButtons(newGameButton);
  });

  rpsButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
      playerSelection = button.textContent.toLowerCase();
      playerWins = rpsLib.playSingleRound(playerSelection);
      score.update(playerWins);
      roundResult.update(playerWins);
      if(rpsLib.isGameover(score, winScore)) {
        rpsLib.disableButtons(rpsButtons);
        rpsLib.enableButtons(newGameButton);
        return gameResult.update(score);
      }
    });
  });
});
