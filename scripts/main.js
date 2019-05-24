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
  const scoreToWinText = document.querySelector('#scoreToWin');
  
  const scoreToWin = 5;
  let playerMove = '';
  let cpuMove = '';
  let playerWonRound = undefined;
  scoreToWinText.textContent = scoreToWin;

  newGameButton.addEventListener('click', function(e) {
    score.reset();
    roundResult.reset();
    gameResult.reset();
    rpsLib.enableButtons(rpsButtons);
    rpsLib.disableButtons(newGameButton);
  });

  rpsButtons.forEach((button) => {
    button.addEventListener('click', function(e) {
      playerMove = button.textContent.toLowerCase();
      cpuMove = rpsLib.getcpuMove()
      playerWonRound = rpsLib.playSingleRound(playerMove, cpuMove);
      score.update(playerWonRound);
      roundResult.update(playerWonRound, cpuMove);
      if(rpsLib.isGameover(score, scoreToWin)) {
        rpsLib.disableButtons(rpsButtons);
        rpsLib.enableButtons(newGameButton);
        return gameResult.update(score);
      }
    });
  });
});
