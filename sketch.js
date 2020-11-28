var car,wall;
var speed,weight;
var deform;
function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  wall=createSprite(1500,150,60,height/2)
  wall.shapeColor=color(80,210,110);
}

function draw() {
  background(230,110,215);  
  drawSprites();

  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
     deform = (0.5*weight*speed*speed)/22500;
     if(deform<100){
       car.shapeColor=color(0,255,0);
     }
     if(deform >100 && deform<180){
       car.shapeColor=color(230,230,0);
     }
     if(deform >180){
      car.shapeColor=color(250,0,0);
    }
  }
}
