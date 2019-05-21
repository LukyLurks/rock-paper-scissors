/** "Library" of sub-functions which aren't directly tied to the logic of the 
 * game, but are used within such functions
 */
define(function() {
  // Returns a random integer from 0 to n both included
  const getRandomInt = function(n) {
    return Math.floor(Math.random() * Math.floor(n));
  }

  // Returns a choice
  const generateCpuSelection = function() {
    let choice = getRandomInt(3);
    switch(choice) {
      case 0:
        choice = 'rock';
        break;
      case 1:
        choice = 'paper';
        break;
      case 2:
        choice = 'scissors';
        break;
      default:
        choice = 'rock';
    }
    return choice;
  }

  // Returns the user input for a selection
  const promptPlayerSelection = function() {
    return prompt('Please input "rock", "paper", or "scissors".', 'rock');
  }

  // Returns valid input string or undefined
  const cleanPlayerSelection = function(input) {
    let i = input.toLowerCase();
    if (i === 'rock' || i === 'paper' || i === 'scissors') {
      return i;
    } else {
      return undefined;
    }
  }

  return {
    getRandomInt: getRandomInt,
    generateCpuSelection: generateCpuSelection,
    promptPlayerSelection: promptPlayerSelection,
    cleanPlayerSelection: cleanPlayerSelection
  }
});