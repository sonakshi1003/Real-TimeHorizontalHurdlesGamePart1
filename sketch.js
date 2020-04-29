var canvas,bg1,bg2,startB;
var gameState = 0;
var playerCount;
var allPlayers;
var database;
var form, player, game;
var index = 0;
var runner1,runner2,runner3,runner4;
var runners = [];
var I1,I2,I3,I4;

function preload(){
  bg1 = loadImage("images/main.jpg");
  bg2 = loadImage("images/track.jpeg");
}
function setup(){
  canvas = createCanvas(displayWidth-50,displayHeight-200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  hurdlea1 = createSprite(320,140,60,60);
  hurdleb1 = createSprite(320,255,60,60);
  hurdlec1 = createSprite(320,370,60,60);
  hurdled1 = createSprite(320,485,60,60);

  hurdlea2 = createSprite(520,140,60,60);
  hurdleb2 = createSprite(520,255,60,60);
  hurdlec2 = createSprite(520,370,60,60);
  hurdled2 = createSprite(520,485,60,60);

  hurdlea3 = createSprite(720,140,60,60);
  hurdleb3 = createSprite(720,255,60,60);
  hurdlec3 = createSprite(720,370,60,60);
  hurdled3 = createSprite(720,485,60,60);

  hurdlea4 = createSprite(920,140,60,60);
  hurdleb4 = createSprite(920,255,60,60);
  hurdlec4 = createSprite(920,370,60,60);
  hurdled4 = createSprite(920,485,60,60);

}
function draw(){
    background(bg1);
    text("Press up arrow to jump",canvas.width/2,canvas.height-70);

  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    background(bg2);
    game.play();
    drawSprites();
  }else if(gameState === 2){
    background(bg1);
    textSize(30);
    Text("Your Rank: "+player.rank,canvas.width/2,canvas.height/2 +50);
    if(player.rank>1){
      Text("You Lose",canvas.width/2,canvas.height/2);
    }else{
      Text("You Win",canvas.width/2,canvas.height/2);
    }
  }
}