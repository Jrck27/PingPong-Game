const ctx = canvas.getContext('2d');

const assetManager = {};

let imageArray = [];
const paddleWidth = 10;
const paddleHeight = 100;

const imageList =[
    {name: 'board', src: 'images/board.png', x: 0, y:0},
    {name: 'paddleRed', src: 'images/paddleRed.png', x: 30, y:0},
    {name: 'paddleBlack', src: 'images/paddleBlack.png', x: 3 * canvas.width / 5.3, y:0}
  ]

const gameOverText = {
    x: canvas.width / 2,
    y: -50,
    font : '35px sans-serif',
    align: 'center',
    color: '#ffffff',
    //text: 'GameOver!\nPress spacebar to start',
    text: 'Game Over! press spacebar',
    offsetY: 30
  };
  
  const gameRulesText = {
    x: canvas.width / 1.33 ,
    y: canvas.height / 1.03,
    font : '13px sans-serif',
    align: 'center',
    color: '#ffffff',
    text: 'Fist Player who got 5 points will be the winner!'
  };
  
  const player1insText = {
    x: 18 ,
    y: canvas.height / 1.05,
    font:'11px sans-serif',
    align: 'start',
    color: '#ffffff',
    text: 'Player1 : Press W and S.'
  };
  
  const player2insText = {
    x: 18,
    y: canvas.height / 1.02,
    font:'11px sans-serif',
    align: 'start',
    color: '#ffffff',
    text: 'Player 2: Press Arrow Up and Arrow Down.'
  };

  // ball
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 7,
    speed: 7,
    velocityX: 5,
    velocityY: 5,
    color: '#FFA500'
  };

  // player1 paddle
const player1 = {
    x: 13,
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: '#800000',
    align: 'start',
    score: 0,
  };
  
  // player2 paddle
const player2 = {
    x: canvas.width - (paddleWidth + 10),
    y: canvas.height / 2 - paddleHeight / 2,
    width: paddleWidth,
    height: paddleHeight,
    color: '#00008B',
    align: 'start',
    score: 0
  };

assetManager.ImageLoader = function(paramOptions){

    console.log("assetManager -- : ", paramOptions)
    paramOptions.forEach(function(e, i){
  
        const imageObj = {};
        imageObj.name = e.name;
        imageObj.posX = e.x;
        imageObj.posY = e.y;
    
        imageObj.obj = new Image();
        imageObj.obj.src = e.src;
    
        imageArray.push(imageObj);
    
      });
}

assetManager.makeText = function(paramOptions){
    ctx.fillStyle = paramOptions.color;
    ctx.font = paramOptions.font;
    ctx.textAlign = paramOptions.align;
    ctx.fillText(paramOptions.text, paramOptions.x, paramOptions.y);
}

assetManager.drawBall = function(paramOptions){
    ctx.fillStyle = paramOptions.color;
    ctx.beginPath();
    ctx.arc(paramOptions.x, paramOptions.y, paramOptions.radius, 0, Math.PI * 2, true); // π * 2 Radians = 360 degrees
    ctx.closePath();
    ctx.fill();
}

// function to draw paddle
assetManager.drawPaddle = function(paramOptions){
    ctx.fillStyle = paramOptions.color;
    ctx.fillRect(paramOptions.x, paramOptions.y, paramOptions.width, paramOptions.height);
}

assetManager.drawScore = function(x, y, score, align) {
    ctx.fillStyle = '#fff';
    ctx.font = '25px sans-serif';
    ctx.textAlign = align;
    ctx.fillText('Points : ' + score, x, y);
  }

assetManager.drawImage = function(paramOptions) {
    paramOptions.forEach(function(e, i){
        ctx.drawImage(e.obj, e.posX, e.posY);
      })
  }


/* assetManager.getAssetByName = function(param) {

    for (let i = 0; i < imageArray.length; i++) {
      if(imageArray[i].name == param){
        console.log("asdfasdjfad -- : ", imageArray[i].obj)
  
        return imageArray[i].obj;
      }
      
    }
  } */




