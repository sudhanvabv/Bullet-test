var wall, thickness, bullet, speed, weight;
 

function setup() {
  createCanvas(800,400);
  thickness=random(22,83)
  wall=createSprite(750, 200, thickness, height/2)
 bullet=createSprite(10, 200, 10, 10)
 speed=random(100, 150)
 weight=random(30, 52)
 bullet.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet, wall)) {
bullet.velocityX=0;
var damage=0.5 * speed* speed/(thickness *thickness *thickness)

if(damage>10)
{
  wall.shapeColor=color(255,0,0)
}
if(damage<10){
wall.shapeColor=color(0,0,255)
}
  }
  
  drawSprites();
}
function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
return true
  }
  return false
}