
const logic = {};

logic.drawScore = function(x, y, score, align) {
    ctx.fillStyle = '#fff';
    ctx.font = '25px sans-serif';
    ctx.textAlign = align;
    ctx.fillText('Points : ' + score, x, y);
  }

  // collision Detect function
logic.collisionDetect = function(player, ball) {
    // returns true or false
    player.top = player.y;
    player.right = player.x + player.width;
    player.bottom = player.y + player.height;
    player.left = player.x;
  
    ball.top = ball.y - ball.radius;
    ball.right = ball.x + ball.radius;
    ball.bottom = ball.y + ball.radius;
    ball.left = ball.x - ball.radius;
  
    return ball.left < player.right && ball.top < player.bottom && ball.right > player.left && ball.bottom > player.top;
  }

  // update function, to update things position
logic.update = function(x, y, score, align) {

    if(!isInProgress) return;
  
    // move the paddle
    if (upPressed_Player1 && player1.y > 50) {
      player1.y -= 8;
  
    } else if (downPressed_Player1 && (player1.y < 368 - player1.height)) {
      player1.y += 8;
    }
  
    if (upArrowPressed_Player2 && player2.y > 50) {
      player2.y -= 8;
    } else if (downArrowPressed_Player2 && (player2.y < 368 - player2.height)) {
      player2.y += 8;
    }  
  
    // check if ball hits top or bottom wall
    //if (ball.y + ball.radius >= canvas.height || ball.y - ball.radius <= 0) {
    if (ball.y + ball.radius >= 368 || ball.y - ball.radius <= 50) {
      // play wallHitSound
      soundManager.play(wallHitSound);
      ball.velocityY = -ball.velocityY;
    }
  
     // if ball hit on right wall
     if (ball.x + ball.radius >= canvas.width) {
      // play scoreSound
      soundManager.play(scoreSound);
      soundManager.play(applaud);
      // then player1 scored 1 point
      player1.score += 1;
      logic.reset();
    }
  
    // if ball hit on left wall
    if (ball.x - ball.radius <= 0) {
      // play scoreSound
      soundManager.play(scoreSound);
      soundManager.play(applaud);
      // then player2 scored 1 point
      player2.score += 1;
      logic.reset();
    }
  
    if(player1.score == wonLimit || player2.score == wonLimit){
      soundManager.play(won);
      isGameOver = true;
      TweenMax.to(gameOverText, 1, {y:canvas.height / 1.9 , ease: Back.easeOut});
    }
  
  
    // move the ball
    ball.x += ball.velocityX;
    ball.y += ball.velocityY;
  
    // collision detection on paddles
    let player = (ball.x < canvas.width / 2) ? player1 : player2;
  
    if (logic.collisionDetect(player, ball)) {
      // play hitSound
      soundManager.play(hitSound);
      // default angle is 0deg in Radian
      let angle = 0;
  
      // if ball hit the top of paddle
      if (ball.y < (player.y + player.height / 2)) {
        // then -1 * Math.PI / 4 = -45deg
        angle = -1 * Math.PI / 4;
      } else if (ball.y > (player.y + player.height / 2)) {
        // if it hit the bottom of paddle
        // then angle will be Math.PI / 4 = 45deg
        angle = Math.PI / 4;
      }
  
      /* change velocity of ball according to on which paddle the ball hitted */
      ball.velocityX = (player === player1 ? 1 : -1) * ball.speed * Math.cos(angle);
      ball.velocityY = ball.speed * Math.sin(angle);
  
      // increase ball speed
      ball.speed += 0.2;
    }
  }

  // reset the ball
logic.reset = function() {
    // reset ball's value to older values
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.speed = 7;
  
    // changes the direction of ball
    ball.velocityX = -ball.velocityX;
    ball.velocityY = -ball.velocityY;
  
    isInProgress = false;
  }