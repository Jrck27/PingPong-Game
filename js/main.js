
const canvas = document.getElementById('canvas');

window.onload = function () {
  init();
}

window.addEventListener('keydown', events.keyDownHandler);
window.addEventListener('keyup',   events.keyUpHandler);

function init(){
  assetManager.ImageLoader(imageList);
  setInterval(gameLoop, 1000 / 60);
  //TweenMax.ticker.addEventListener("tick", gameLoop);
}

// render function draws everything on to canvas
function render() {
  // set a style
  ctx.fillStyle = "#007500"; /* whatever comes below this acquires black color (#000). */
  // draws the black board
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  assetManager.drawImage(imageArray);
  // draw player1 score
  assetManager.drawScore(130, 30, player1.score, player1.align);
  // draw player2 score
  assetManager.drawScore(3 * canvas.width / 4, 30, player2.score, player2.align);

  assetManager.makeText(gameRulesText);
  assetManager.makeText(player1insText);
  assetManager.makeText(player2insText);
  assetManager.makeText(gameOverText);
  
  assetManager.drawBall(ball)
  // draw player paddle
  assetManager.drawPaddle(player1);
  assetManager.drawPaddle(player2);

}


// gameLoop
function gameLoop() {
  logic.update();
  render();
}


