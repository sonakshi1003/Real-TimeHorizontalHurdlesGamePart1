class Game{
  constructor(){

  }
  getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
          gameState = data.val();
      });
    }
  
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    runner1 = createSprite(1290,140,50,50);
    runner2 = createSprite(1290,255,50,50);  
    runner3 = createSprite(1290,370,50,50); 
    runner4 = createSprite(1290,485,50,50);
    runners = [runner1,runner2,runner3,runner4];
 
    runner1.velocityX = -5;  
    runner2.velocityX = -5;
    runner3.velocityX = -5;
    runner4.velocityX = -5;  
  }

  play(){
    form.hide();
    Player.getPlayerInfo();
    var index = 0;
    if(allPlayers !== undefined){
      //add 1 to the index for every loop
      index = index + 1 ;

      if(index === player.index){
        if(keyDown("UP_ARROW")){
          runners[index-1].y= runners[index-1].y- 70;
        }
        if(runners[index-1].x<70){
          gameState = 2;
          player.rank +=1;
          player.updateRank();
        }
      }
      if(runners[index-1].collide("hurdlea"+index || "hurdleb"+index || "hurdlec"+index || "hurdled"+index)){
        player.score = player.score-10;
      }
    }
  }
}