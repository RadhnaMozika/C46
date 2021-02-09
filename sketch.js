var bg1, bg2, bg3;
var player;
var layout, monster, monsterGroup;
var food, waterGroup, foodGroup;

var gameState = 1;

function preload(){

  bg1 = loadImage("images/Spawn2.jpg");
  bg2 = loadImage("images/map2.jpg");
  bg3 = loadImage("images/map1.png");

  


}


function setup() {
  createCanvas(1300, 700);

  
  player = new Player(1000, 350);

  layout = new Layout();

  layout.layout1();
  layout.layout2();
  layout.layout3();

  food = new Food();

  monsterGroup = new Group();
  waterGroup = new Group();
  foodGroup = new Group();
}


function draw() {
  background(200); 
  layout.bg();

  
  player.move();

  layout.layoutBounceOff();

 food.createWater();

  monster = new Monster();
  

  monster.killPlayer();

  drawSprites();
  player.die();

  food.increaseHealth();

  //console.log(gameState);

  console.log("X"+player.player.x);
  console.log("Y"+player.player.y);


  //giving player ownership of weapon when mouse clicks on it
  if(mousePressedOver(player.weapon)){
    player.ownership = true
  }

  if(player.ownership === true){
    
    player.pickWeapon();

    player.kill();
  }

  textSize(20);
  fill(255);
  strokeWeight(5);
  text(player.health, player.player.x-5, player.player.y-5);

  
}

