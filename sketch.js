var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(650, 650);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  ghost = createSprite(200,200,50,50);
  ghost.addImage(ghostImg);
  ghost.scale = 0.3;

  doorsGroup = new Group();
  climbersGroup = new Group();
  
  
}

function draw() {
  background(200);
  
   

    
    createGoals();
    if(gameState === "play")
    {
      if(keyDown("left_arrow"))
      {
        ghost.x -= 5;
      }
      if(keyDown("right_arrow"))
      {
        ghost.x += 5;
      }
      if(keyDown("up_arrow"))
      {
        ghost.y -= 5;
      }
      if(keyDown("down_arrow"))
      {
        ghost.y += 5;
      }
      if(keyDown("space"))
      {
        ghost.velocityY = -10;
      }
      ghost.velocityY += 0.8;
      if(tower.y > 400){
          tower.y = 300
        }
        if(climbersGroup.isTouching(ghost) || doorsGroup.isTouching(ghost))
        {
          gameState = "end"
        }
    }
    drawSprites();
    
   if(gameState === "end")
  {
   text("Game Over! YOU DIED",200,200);
   
  }
  
}


function createGoals()
{
  if(frameCount % 150 === 0)
  {
   
  var r = Math.round(random(120,400));  
  door = createSprite(r,-50);
  door.addImage(doorImg);
  door.velocityY = 1;

  climber = createSprite(r,10);
  climber.addImage(climberImg);
  climber.scale = 0.5;
  climber.velocityY = 1;
  climber.debug = true

  door.lifetime =250
climber.lifetime = 250

  doorsGroup.add(door);
  climbersGroup.add(climber);
  }
}
