var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600,400);
  wall=createSprite(1200, 200, thickness, height/2);
  bullet=createSprite(50,200,50,20)
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      
      wall.shapeColor(255,0,0)
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
   }
  




  drawSprites();
}