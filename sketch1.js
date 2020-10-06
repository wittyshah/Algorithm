var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(700,100,50,80);

  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "red";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < (fixedRect.width/2 + movingRect.width/2)){
   
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green"; 
  }
  else{
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "red";
  }
  drawSprites();
}