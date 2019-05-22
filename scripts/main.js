/************************************************************************
 * OVERVIEW
 ***********************************************************************/
  /*
  - 1 player against the computer.
  - A move is chosen by the computer that the user can't see.
  - The user is prompted a choice that they'll enter as a string
    ('rock', 'paper', or 'scissors', case insensitive.)
  - Log a string announcing the result like "You Lose! Paper beats Rock"
  - Save the score
  - Make 5 rounds like that
  - Announce the winner like "You 3 - 2 CPU \n A WINNER IS YOU"
  */

requirejs(['rps-functions'], function(rpsFunctions) {
  console.log('hi');
  rpsFunctions.playRockPaperScissors();
});