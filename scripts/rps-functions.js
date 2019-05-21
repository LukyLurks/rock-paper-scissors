/* Functions used for the logic of the game */


define(['rps-subfunctions'], function(rpsLib) {

  // Returns randomly 'rock', 'paper' or 'scissors'
  const getComputerSelection = function() {
    return rpsLib.generateCpuSelection();
  }

  // Returns the player's lowercased selection
  const getPlayerSelection = function() {
    let choice = rpsLib.cleanPlayerSelection(rpsLib.promptPlayerSelection());
    while(choice === undefined) {
      console.log("Please input a valid selection.")
      choice = rpsLib.cleanPlayerSelection(rpsLib.promptPlayerSelection());
    }
    return choice;
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
      return 'draw';
    } else if (playerWins) {
      console.log(`You win, ${playerSelection} beats ${computerSelection}`);
      return 'win';
    } else {
      console.log(`You lose, ${computerSelection} beats ${playerSelection}`);
      return 'lose';
    }
  }

  // Returns the result of the game
  const getFinalResults = function(playerScore, cpuScore) {
    if(playerScore > cpuScore) {
      return `You ${playerScore} - ${cpuScore} CPU -- A WINNER IS YOU`;
    } else if(cpuScore > playerScore) {
      return `You ${playerScore} - ${cpuScore} CPU -- A WINNER IS NOT YOU`;
    } else {
      return `You ${playerScore} - ${cpuScore} CPU -- DRAW`;
    }
  }

  // Game loop
  const game = function() {
    let playerScore = 0;
    let cpuScore = 0;
    const numberOfRounds = 5;
    let roundResult = '';
    for(i = 0; i < numberOfRounds; i++) {
      roundResult = playSingleRound();
      if(roundResult === 'win') {
        playerScore++;
      } else if(roundResult == 'lose') {
        cpuScore++;
      }
    }
    return getFinalResults(playerScore, cpuScore);
  }

  return {
    getComputerSelection: getComputerSelection,
    getPlayerSelection: getPlayerSelection,
    evalRound: evalRound,
    playSingleRound: playSingleRound,
    getFinalResults: getFinalResults,
    game: game
  }
});