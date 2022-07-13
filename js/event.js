
const events = {};

let upPressed_Player1 = false;
let downPressed_Player1 = false;

let upArrowPressed_Player2 = false;
let downArrowPressed_Player2 = false;

let spaceBarPressed = false;

let isInProgress = false;

const wonLimit = 5;
let isGameOver = false;

events.keyDownHandler = function(event){

    if(!isGameOver){
      isInProgress = true;
    }
  
    // get the keyCode
    switch (event.keyCode) {
      case 32:
        if(!isGameOver) return;

        // set upArrowPressed = true
        spaceBarPressed = true;
        isInProgress = true;
        player1.score = 0;
        player2.score = 0;
        TweenMax.to(gameOverText, 0.5 ,{y:-50 , ease: Back.easeIn});
        isGameOver = false;
        break;
      // "W" key
      case 87:
        // set upArrowPressed = true
        upPressed_Player1 = true;
        break;
      // "S" key
      case 83:
        downPressed_Player1 = true;
        break;
      // "down arrow" key
      case 38:
        upArrowPressed_Player2 = true;
      break;
      // "up arrow" key
      case 40:
        downArrowPressed_Player2 = true;
      break;
    }
  }
  
  // gets activated when we release the key
  events.keyUpHandler = function(event){
    switch (event.keyCode) {
      // "W" key
      case 87:
        // set upArrowPressed = false
        upPressed_Player1 = false;
        break;
      // "S" key
      case 83:
        downPressed_Player1 = false;
        break;
      // "down arrow" key
      case 38:
        upArrowPressed_Player2 = false;
      break;
      // "up arrow" key
      case 40:
        downArrowPressed_Player2 = false;
      break;
    }
  }