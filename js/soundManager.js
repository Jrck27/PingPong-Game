
const soundManager = {};

const hitSound = new Audio('sounds/hitSound.wav');
const scoreSound = new Audio('sounds/scoreSound.wav');
const wallHitSound = new Audio('sounds/wallHitSound.wav');
const applaud = new Audio('sounds/applaud.wav');
const won = new Audio('sounds/won.wav');

soundManager.play = function(paramName){
    paramName.play();
}

