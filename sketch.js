var bullet, speed, weight;
var wall, thickness;
var damage;
function setup() {
  createCanvas(1600,400);

  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 100, 50);
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(0, 255, 255);
}

function draw() {
  background(255,255,255);  

  if(wall.x-bullet.x<=bullet.width/2+wall.width/2) {
    bullet.velocityX = 0;

    damage = ((0.5*weight*speed*speed)/(thickness*thickness*thickness));
       if(damage>10) {
         wall.shapeColor = "red";
       }

       if(damage<10) {
        wall.shapeColor = "green";
      }
  }

  drawSprites();
}