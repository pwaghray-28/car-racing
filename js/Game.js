class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    player.getPlayers();
    if(allplayers !== undefined){
      var position = 130
      for(var i in allplayers){
        textSize(70)
        text(allplayers[i].name+":"+allplayers[i].distance,250,position)
        position = position+20
      }
    }
    if(keyIsDown(UP_ARROW)&& player.index!== null){
      player.distance = player.distance+20
      player.update()
    }
  }
}
