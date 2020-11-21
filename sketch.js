
var car, wall
var speed, weight
var wall

function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 50, 50);

  speed = random(55, 90)
  weight = random(400, 1500)

  wall = createSprite(1500, 200, 60, height/2)
  wall.shapeColor = color(80, 80, 80)
}

function draw() {
  createCanvas(1600, 400)
  background(150, 150, 150); 
  
  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0
    var deformation = 0.5 * weight * speed * speed /22500
    if(deformation > 180){
      car.shapeColor = color(255, 0, 0) //red
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230, 230, 0) //yellow
    }
    if(deformation < 100){
      car.shapeColor = color(0, 255, 0) //green
    }
  }
  drawSprites();
}