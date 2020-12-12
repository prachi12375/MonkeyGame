
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivaltime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600, 250);
  
  monkey = createSprite(50, 190, 1, 1);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.12;
  
  ground=createSprite(300, 230, 600, 10);
  ground.x = ground.width /2;
  
  bananaGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
  background("white");
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  ground.velocityX=-4;
  
  if(keyDown("space") && monkey.y >= 180) {
     monkey.velocityY = -13;
  }
  monkey.velocityY = monkey.velocityY + 0.5;
  
  monkey.collide(ground);
  
  spawnbanana();
  spawnobstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivaltime, 400, 50);
}

function spawnbanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,90,40,10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.06;
    banana.velocityX = -5;
    
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
  }
}
function spawnobstacles() {
  if (frameCount % 300 === 0) {
    var obstacles = createSprite(600,200,40,10);
    obstacles.addImage(obstacleImage);
    obstacles.scale = 0.12;
    obstacles.velocityX = -5;
    
    obstacles.lifetime = 200;
    
    obstaclesGroup.add(obstacles);
  }
}




