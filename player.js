class Player{
    constructor(x, y){

        this.player = createSprite(x, y, 50, 50);
        this.weapon = createSprite(1840, 700, 50, 50);

        

        this.name;
        this.distance;
        this.health = 100;
        this.score;

        this.owernership = false;

    }

    move(){
        if(keyDown("up")){
            this.player.y = this.player.y-30;
        }
        if(keyDown("down")){
            this.player.y = this.player.y+30;
        }
        if(keyDown("left")){
            this.player.x = this.player.x-30;
        }
        if(keyDown("right")){
            this.player.x = this.player.x+30;
        }

    
  

            if(this.player.x < 360){
                camera.x = 360;
            }
            else if(this.player.x > 360 && this.player.x < 1550){
                camera.x = this.player.x;
            }
            if(this.player.x > 1550)
                camera.x = 1550;

            if(this.player.y < -400){
                camera.y = -400;
            }
            
            else if(this.player.y > -390 ){
                camera.y = this.player.y;
            }
        
    }

    pickWeapon(){
        
            this.owernership = true;
            this.weapon.x = this.player.x;
            this.weapon.y = this.player.y;
 
    }

    kill(){
        if(this.owernership === true){

            if(keyDown("space")){

                //if(monster.monster.x - this.player.x <= 100 || this.player.x - monster.monster.x <= 100
                //|| monster.monster.y - this.player.y <= 100 || this.player.y - monster.monster.y <= 100){

                        monsterGroup.destroyEach();
                
           // }
        }
    }

}

die(){
    if(this.health < 1){
        gameState = 0;
    }
}
    

}