class Layout {
    constructor(){

    }

    bg(){
        imageMode(CENTER);
        image(bg1, width/2+300, height/2, 2500, 2200);

        imageMode(CORNERS);
        image(bg2, -300, 1450, 2200, 4500);
        
        imageMode(CORNER);
        image(bg3, -285, 4500, 2500, 3000);
    }

    layout1(){

        this.wall1 = createSprite(-30, 350, 10, 1800);
        this.wall2 = createSprite(940, -510, 2000, 10);
        this.wall3 = createSprite(1920, 350, 10, 1800);
        this.wall4 = createSprite(300, 1210, 700, 10);
        this.wall5 = createSprite(1590, 1210, 700, 10);
        this.wall6 = createSprite(630, 1450, 10, 500);
        this.wall7 = createSprite(1260, 1450, 10, 500);

    }

    

    layoutBounceOff(){
        player.player.collide(this.wall1);
        player.player.collide(this.wall2);
        player.player.collide(this.wall3);
        player.player.collide(this.wall4);
        player.player.collide(this.wall5);
        player.player.collide(this.wall6);
        player.player.collide(this.wall7);

        player.player.bounceOff(this.wall8);
        player.player.bounceOff(this.wall9);
        player.player.bounceOff(this.wall10);
        player.player.bounceOff(this.wall11);
        player.player.bounceOff(this.wall12);
        player.player.bounceOff(this.wall13);
        player.player.bounceOff(this.wall14);
        player.player.bounceOff(this.wall15);
        player.player.bounceOff(this.wall16);
        player.player.bounceOff(this.wall17);
        player.player.bounceOff(this.wall18);
        player.player.bounceOff(this.wall19);
        player.player.bounceOff(this.wall20);
        player.player.bounceOff(this.wall21);
        player.player.bounceOff(this.wall22);
        player.player.bounceOff(this.wall23);
        player.player.bounceOff(this.wall24);
        player.player.bounceOff(this.wall25);
        player.player.bounceOff(this.wall26);
        player.player.bounceOff(this.wall27);
        player.player.bounceOff(this.wall28);
        player.player.bounceOff(this.wall29);
        player.player.bounceOff(this.wall30);
        player.player.bounceOff(this.wall31);
        player.player.bounceOff(this.wall32);
        player.player.bounceOff(this.wall33);
        player.player.bounceOff(this.wall34);
        player.player.bounceOff(this.wall35);
        player.player.bounceOff(this.wall36);
        player.player.bounceOff(this.wall37);
        player.player.bounceOff(this.wall38);
        player.player.bounceOff(this.wall39);
        player.player.bounceOff(this.wall40);
        player.player.bounceOff(this.wall41);
        player.player.bounceOff(this.wall42);
        player.player.bounceOff(this.wall43);
        player.player.bounceOff(this.wall44);
        player.player.bounceOff(this.wall45);
        player.player.bounceOff(this.wall46);
        player.player.bounceOff(this.wall47);
        player.player.bounceOff(this.wall48);

        
        

        
    }

    
    layout2(){
        this.wall8 = createSprite(300, 1700, 620, 10);
        this.wall9 = createSprite(1600, 1700, 620, 10);
        this.wall10 = createSprite(1900, 2900, 10, 2400);
        this.wall11 = createSprite(0, 2900, 10, 2400);

        this.wall12 = createSprite(625, 2240, 1250, 10);
        this.wall13 = createSprite(625, 2640, 1250, 10);

        this.wall14 = createSprite(1260, 2450, 10, 430);

        this.wall15 = createSprite(1260, 3170, 1270, 10);

        this.wall16 = createSprite(1260, 3440, 1270, 10);

        this.wall17 = createSprite(630, 3300, 10, 300);

        this.wall18 = createSprite(1590, 4110, 620, 10);

        this.wall19 = createSprite(300, 4110, 620, 10);

        this.wall20 = createSprite(1280, 4420, 10, 600);
        this.wall21 = createSprite(620, 4420, 10, 600);

        //this.object1 = createSprite(1350, 4050, 150, 150);
      //  this.object2 = createSprite(1350, 3530, 150, 150);

        

    }


    layout3(){
        this.wall22 = createSprite(1200, 4700, 200, 120);
        this.wall23 = createSprite(700, 4700, 200, 120);

        this.wall24 = createSprite(1650, 4750, 800, 10);
        this.wall25 = createSprite(270, 4750, 800, 10);

        //long side walls
        this.wall26 = createSprite(-150, 5900, 10, 2500);
        this.wall27 = createSprite(2070, 5900, 10, 2500);

        this.wall28 = createSprite(-100, 5220, 100, 140);
        this.wall29 = createSprite(2030, 5220, 100, 140);

        this.wall30 = createSprite(300, 5220, 380, 120);
        this.wall31 = createSprite(1630, 5220, 380, 120);

        this.wall32 = createSprite(340, 5330, 310, 140);
        this.wall33 = createSprite(1580, 5330, 310, 140);

        this.wall34 = createSprite(260, 5450, 150, 200);
        this.wall35 = createSprite(1660, 5450, 150, 200);

        this.wall36 = createSprite(490, 7170, 600, 120);
        this.wall37 = createSprite(1450, 7170, 600, 120);

        this.wall38 = createSprite(2000, 6580, 180, 280);
        this.wall39 = createSprite(-70, 6580, 180, 280);

        this.wall40 = createSprite(-60, 6000, 180, 380);
        this.wall41 = createSprite(2000, 6000, 180, 380);

        this.wall42 = createSprite(270, 5750, 140, 140);
        this.wall43 = createSprite(1670, 5750, 140, 140);

        this.wall44 = createSprite(150, 5860, 250, 130);
        this.wall45 = createSprite(1780, 5860, 250, 130);

        this.wall46 = createSprite(-50, 7120, 170, 10);
        this.wall47 = createSprite(2000, 7120, 170, 10);

        this.wall48 = createSprite(10, 7250, 10, 230);
        this.wall49 = createSprite(1930, 7250, 10, 230);

        this.wall48 = createSprite(970, 7390-10, 2000, 10);
    }

    ///changePlayerPosition(){
    //    player.player.x = 1250;
   //     player.player.y = 320;
   // }
}