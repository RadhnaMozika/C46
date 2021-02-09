class Monster{
    constructor(){
        this.flameAnimation = loadAnimation("images/fire1.png", "images/fire2.png", "images/fire3.png", "images/fire4.png", "images/fire5.png",
         "images/fire6.png", "images/fire7.png", "images/fire8.png", "images/fire9.png", "images/fire10.png", "images/fire11.png",
          "images/fire11.png", "images/fire13.png")
        
          if(frameCount % 20 === 0){
            this.monster = createSprite(Math.round(random(0, width)), Math.round(random(0, height)), 50, 50);
            this.monster.velocityX = Math.round(random(-10, 10));
            this.monster.velocityY = Math.round(random(-10, 10));

            monsterGroup.add(this.monster);

            
        }
    }

    killPlayer(){
        if(player.player.isTouching(monsterGroup)){
            player.health = player.health--;
        }
    }
}