var car,wall;
var speed, weight;

function setup(){
    createCanvas(1600,400);

    speed=random(55,90);
    weight=random(400,1500);

    car=createSprite(50,200,50,50);
    car.velocityX=speed;
    car.shapeColor="white";

    wall=createSprite(1500,200, 50, height/2)
    wall.shapeColor="black"
}

    function draw(){
        background("gray")
    if(wall.x-car.x < (car.width+wall.width)/2) {
        car.velocityX=0;
        var deformation=0.5 * weight * speed* speed/22500;
      if(deformation>180)
      {
          car.shapeColor="red";
      }
  
      if(deformation<180 && deformation>100)
      {
          car.shapeColor="yellow";
      }
  
      if(deformation<100)
      {
          car.shapeColor="green";
      }
    } 
    drawSprites();
 }